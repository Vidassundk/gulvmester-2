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
    if (typeof window !== "undefined") {
      return localStorage.getItem("app_locale") || "en";
    }
    return "en";
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
  ); // Dependency: locale (setLocaleState causes locale to change)

  // The translation function 't'
  const t = useCallback(
    (key, replacements = {}) => {
      // If no translations loaded yet, or specific locale data is missing, return the key.
      if (
        isLoadingTranslations ||
        Object.keys(translationsMap).length === 0 ||
        !translationsMap[locale]
      ) {
        return key;
      }

      // Try to get translation from the current locale
      let translation = getNestedTranslation(translationsMap[locale], key);

      // Fallback to English if translation is missing or empty in current locale
      if (
        translation === undefined ||
        translation === null ||
        (typeof translation === "string" && translation.trim() === "")
      ) {
        // console.warn(`Missing or empty translation for key: "${key}" in locale: "${locale}". Attempting English fallback.`);
        if (translationsMap.en) {
          // Check if English translations are loaded for fallback
          const englishTranslation = getNestedTranslation(
            translationsMap.en,
            key
          );
          if (englishTranslation) {
            translation = englishTranslation;
          } else {
            return key; // If English fallback also fails, just return the key
          }
        } else {
          return key; // If English translations aren't available for fallback, return key
        }
      }

      // Apply string replacements if translation is a string
      if (typeof translation === "string") {
        return Object.keys(replacements).reduce((acc, repKey) => {
          return acc.replace(
            new RegExp(`{{${repKey}}}`, "g"),
            replacements[repKey]
          );
        }, translation);
      }

      return key; // Return key if translation is not a string
    },
    [translationsMap, isLoadingTranslations, locale] // Dependencies: `t` changes if translationsMap, loading state, or locale changes
  );

  // Effect for body class management (unrelated to i18n, kept as is)
  useEffect(() => {
    if (isSearchActive) {
      document.body.classList.add("search-active");
    } else {
      document.body.classList.remove("search-active");
    }
  }, [isSearchActive]);

  // --- ROBUST useEffect FOR LOADING TRANSLATIONS (Handles Initial Load and Locale Switches) ---
  useEffect(() => {
    const loadAndStoreTranslations = async (targetLocale) => {
      // Mark as fetching
      fetchedLocales.current[targetLocale] = "fetching";

      const data = await fetchTranslations(targetLocale);

      setTranslationsMap((prevMap) => {
        // Only update if the data is different to avoid unnecessary re-renders
        // Using JSON.stringify for deep comparison, which is okay for small JSONs.
        // For very large JSONs, consider a custom deep equality check.
        if (JSON.stringify(prevMap[targetLocale]) !== JSON.stringify(data)) {
          return {
            ...prevMap,
            [targetLocale]: data,
          };
        }
        return prevMap; // No change, return previous map to avoid re-render
      });

      // Mark as fetched
      fetchedLocales.current[targetLocale] = "fetched";
    };

    const ensureTranslationsLoaded = async () => {
      setIsLoadingTranslations(true); // Indicate general loading for i18n

      // 1. Ensure English (fallback) is loaded first, but only once
      if (
        !fetchedLocales.current.en ||
        fetchedLocales.current.en === "fetching"
      ) {
        if (!translationsMap.en) {
          // Double check in state to prevent redundant fetch if setTranslationsMap was delayed
          await loadAndStoreTranslations("en");
        }
      }

      // 2. Load the current active locale's translations, if not already loaded or being fetched
      if (
        !fetchedLocales.current[locale] ||
        fetchedLocales.current[locale] === "fetching"
      ) {
        if (!translationsMap[locale]) {
          // Double check in state
          await loadAndStoreTranslations(locale);
        }
      }

      // After all necessary fetches are initiated/completed, set loading to false.
      // Give a small delay to ensure React has processed updates.
      setTimeout(() => {
        setIsLoadingTranslations(false);
      }, 50); // A small debounce helps prevent flicker from rapid state changes
    };

    ensureTranslationsLoaded();
  }, [locale]); // DEPENDENCY ARRAY: ONLY `locale`.
  // This effect runs only when the selected language changes.
  // It's responsible for initiating the fetch for the new locale AND English.

  return (
    <AppContext.Provider
      value={{
        // UI Context (kept as is)
        isSearchActive,
        openSearch,
        closeSearch,
        isOffcanvasOpen,
        openOffcanvas,
        closeOffcanvas,
        isMobileMenuShow,
        openMobileMenu,
        closeMobileMenu,

        // i18n Context
        t,
        locale,
        setLocale: changeLocale,
        isLoadingTranslations, // Pass loading state
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
