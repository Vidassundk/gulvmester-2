// context/AppContext.js
"use client";

import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from "react";

const AppContext = createContext(null);

// Function to fetch translations for a specific locale
async function fetchTranslations(locale) {
  try {
    const response = await fetch(`/locales/${locale}.json`);
    if (!response.ok) {
      throw new Error(
        `Failed to load translations for ${locale}. Status: ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to load translations for ${locale}:`, error);
    return {}; // Return empty object on fetch error to prevent breaking
  }
}

// Simple utility for deep property access
const getNestedTranslation = (obj, path) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

export function AppWrapper({ children }) {
  // UI States (kept as is)
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

  // i18n States
  const [locale, setLocaleState] = useState(() => {
    // --- THIS IS THE MODIFIED BLOCK ---
    if (typeof window !== "undefined") {
      // Try to get the user's saved preference, otherwise default to 'no'
      return localStorage.getItem("app_locale") || "no";
    }
    // Default to 'no' on the server
    return "no";
    // --- END OF MODIFIED BLOCK ---
  });

  // translationsMap will store an object like { 'en': {...}, 'no': {...} }
  const [translationsMap, setTranslationsMap] = useState({});
  const [isLoadingTranslations, setIsLoadingTranslations] = useState(true);

  // Use a ref to keep track of fetched locales to prevent redundant fetches
  const fetchedLocales = useRef({});

  // UI Actions (kept as is)
  const openSearch = () => setIsSearchActive(true);
  const closeSearch = () => setIsSearchActive(false);
  const openOffcanvas = () => setIsOffcanvasOpen(true);
  const closeOffcanvas = () => setIsOffcanvasOpen(false);
  const openMobileMenu = () => setIsMobileMenuShow(true);
  const closeMobileMenu = () => setIsMobileMenuShow(false);

  // i18n Actions
  const changeLocale = useCallback(
    (newLocale) => {
      if (locale === newLocale) return;
      setIsLoadingTranslations(true); // Indicate loading immediately on locale switch
      setLocaleState(newLocale);
      if (typeof window !== "undefined") {
        localStorage.setItem("app_locale", newLocale);
      }
    },
    [locale]
  );

  // The translation function 't'
  const t = useCallback(
    (key, replacements = {}) => {
      if (
        isLoadingTranslations ||
        Object.keys(translationsMap).length === 0 ||
        !translationsMap[locale]
      ) {
        return key;
      }

      let translation = getNestedTranslation(translationsMap[locale], key);

      // Fallback to English if translation is missing (this part remains unchanged)
      if (
        translation === undefined ||
        translation === null ||
        (typeof translation === "string" && translation.trim() === "")
      ) {
        if (translationsMap.en) {
          const englishTranslation = getNestedTranslation(
            translationsMap.en,
            key
          );
          if (englishTranslation) {
            translation = englishTranslation;
          } else {
            return key;
          }
        } else {
          return key;
        }
      }

      if (typeof translation === "string") {
        return Object.keys(replacements).reduce((acc, repKey) => {
          return acc.replace(
            new RegExp(`{{${repKey}}}`, "g"),
            replacements[repKey]
          );
        }, translation);
      }

      return key;
    },
    [translationsMap, isLoadingTranslations, locale]
  );

  // Effect for body class management
  useEffect(() => {
    if (isSearchActive) {
      document.body.classList.add("search-active");
    } else {
      document.body.classList.remove("search-active");
    }
  }, [isSearchActive]);

  // Effect for loading translations
  useEffect(() => {
    const loadAndStoreTranslations = async (targetLocale) => {
      fetchedLocales.current[targetLocale] = "fetching";
      const data = await fetchTranslations(targetLocale);
      setTranslationsMap((prevMap) => {
        if (JSON.stringify(prevMap[targetLocale]) !== JSON.stringify(data)) {
          return { ...prevMap, [targetLocale]: data };
        }
        return prevMap;
      });
      fetchedLocales.current[targetLocale] = "fetched";
    };

    const ensureTranslationsLoaded = async () => {
      setIsLoadingTranslations(true);
      if (
        !fetchedLocales.current.en ||
        fetchedLocales.current.en === "fetching"
      ) {
        if (!translationsMap.en) {
          await loadAndStoreTranslations("en");
        }
      }
      if (
        !fetchedLocales.current[locale] ||
        fetchedLocales.current[locale] === "fetching"
      ) {
        if (!translationsMap[locale]) {
          await loadAndStoreTranslations(locale);
        }
      }
      setTimeout(() => {
        setIsLoadingTranslations(false);
      }, 50);
    };

    ensureTranslationsLoaded();
  }, [locale]);

  return (
    <AppContext.Provider
      value={{
        isSearchActive,
        openSearch,
        closeSearch,
        isOffcanvasOpen,
        openOffcanvas,
        closeOffcanvas,
        isMobileMenuShow,
        openMobileMenu,
        closeMobileMenu,
        t,
        locale,
        setLocale: changeLocale,
        isLoadingTranslations,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
}
