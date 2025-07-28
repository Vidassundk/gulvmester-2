// components/header/MainMenu.js (apply similar logic to MobileMenu.js)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/data/menu";
import { useAppContext } from "@/context";

// Function to get flag emoji based on locale
const getFlagEmoji = (locale) => {
  switch (locale) {
    case "en":
      return "🇬🇧";
    case "no":
      return "🇳🇴";
    case "lt":
      return "🇱🇹";
    default:
      return "";
  }
};

export default function MainMenu() {
  // Or MobileMenu for the other component
  const { t, locale, setLocale, closeMobileMenu /* add if in MobileMenu */ } =
    useAppContext();
  const pathname = usePathname();

  const isActive = (href) => pathname === href;
  const hasActiveChild = (subMenu = []) =>
    subMenu.some((item) => isActive(item.href));

  // Handle MetisMenu initialization for MobileMenu
  // (Paste MobileMenu's useEffect here if this is MobileMenu.js)
  // ... (MobileMenu's useEffect for MetisMenu here) ...

  const handleLanguageClick = (newLocale, e) => {
    e.preventDefault(); // Crucial: Prevent any default link action
    setLocale(newLocale);
    // If in MobileMenu, close it after selection
    if (typeof closeMobileMenu === "function") {
      // Check if closeMobileMenu exists (only in MobileMenu)
      closeMobileMenu();
    }
  };

  return (
    <div className="main-menu d-none d-lg-block">
      {" "}
      {/* Or mobile-nav-bar for MobileMenu.js */}
      <ul>
        {menuItems.map((item, idx) => {
          const isParentActive = item.href
            ? isActive(item.href)
            : hasActiveChild(item.subMenu);
          // Determine if this is the language parent item
          const isLanguageParent = item.labelKey === "menu.language";

          return (
            <li key={idx} className={isParentActive ? "active" : ""}>
              {item.href && item.href !== "#" && !isLanguageParent ? (
                // Use Next.js Link for actual navigation pages
                <Link className="navlink" href={item.href}>
                  {t(item.labelKey)}
                </Link>
              ) : (
                // Use plain <a> for dropdown triggers (like 'Language') or items with href="#"
                // Ensure href is always '#' or the correct placeholder for dropdowns
                <a className="navlink" href={item.href || "#"}>
                  {t(item.labelKey)}
                  {isLanguageParent && (
                    <span style={{ marginLeft: "8px" }}>
                      {getFlagEmoji(locale)}
                    </span>
                  )}
                </a>
              )}

              {item.subMenu && (
                <ul className="sub-menu">
                  {item.subMenu.map((sub, subIdx) => {
                    // Check if this sub-menu item is a language option
                    const isLanguageOption = sub.locale !== undefined;

                    return (
                      <li key={subIdx}>
                        {isLanguageOption ? (
                          // For language options, use plain <a> and handle click with setLocale
                          <a
                            href="#" // IMPORTANT: Use '#' here to prevent navigation
                            className={isActive(sub.href) ? "active" : ""}
                            onClick={(e) => handleLanguageClick(sub.locale, e)}
                          >
                            {t(sub.labelKey)}
                          </a>
                        ) : (
                          // For regular sub-menu navigation, use Next.js Link
                          <Link
                            href={sub.href}
                            className={isActive(sub.href) ? "active" : ""}
                          >
                            {t(sub.labelKey)}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
