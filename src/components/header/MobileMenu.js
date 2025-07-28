// components/header/MobileMenu.js
"use client";

import Link from "next/link";
import MetisMenu from "metismenujs";
import "metismenujs/sass";
import { useEffect } from "react";
import { useAppContext } from "@/context";
import { menuItems } from "@/data/menu";
import { usePathname } from "next/navigation";

// Function to get flag emoji based on locale - DEFINED OUTSIDE THE COMPONENT
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

export default function MobileMenu() {
  const {
    t,
    locale,
    setLocale,
    isMobileMenuShow,
    openMobileMenu,
    closeMobileMenu,
  } = useAppContext();
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href;
  };

  const hasActiveChild = (subMenu = []) => {
    return subMenu.some((item) => isActive(item.href));
  };

  // Consolidated handler for any menu item click that should close the menu
  const handleMenuItemClick = (e, newLocale = null, href = null) => {
    // If it's a language click, prevent default and set locale
    if (newLocale) {
      e.preventDefault(); // Prevent default navigation for language switch
      setLocale(newLocale);
    }
    // If it's a regular link with a valid href, Next.js Link will handle navigation,
    // but we still want to close the menu.
    // No need to preventDefault for Link components as Next.js handles it.
    closeMobileMenu(); // Close mobile menu regardless of navigation or language switch
  };

  useEffect(() => {
    let metisMenuInstance = null;
    const menuElement = document.querySelector("#mobile-menu");

    if (menuElement) {
      if (isMobileMenuShow) {
        if (menuElement._metisMenu) {
          menuElement._metisMenu.dispose();
          menuElement._metisMenu = undefined;
        }
        metisMenuInstance = new MetisMenu(menuElement);
      } else {
        if (menuElement._metisMenu) {
          menuElement._metisMenu.dispose();
          menuElement._metisMenu = undefined;
        }
      }
    }

    return () => {
      if (menuElement && menuElement._metisMenu) {
        menuElement._metisMenu.dispose();
        menuElement._metisMenu = undefined;
      }
    };
  }, [isMobileMenuShow]);

  return (
    <div
      className="mobile-nav-bar d-block col-sm-1 col-6 d-lg-none"
      style={{ zIndex: 1000 }}
    >
      <div className="mobile-nav-wrap">
        <div id="hamburger" onClick={openMobileMenu}>
          <i className="las la-bars"></i>
        </div>
        <div className={`mobile-nav ${isMobileMenuShow ? "show" : ""}`}>
          <button type="button" className="close-nav" onClick={closeMobileMenu}>
            <i className="las la-times-circle"></i>
          </button>
          <nav className="sidebar-nav">
            <ul className="metismenu" id="mobile-menu">
              {menuItems.map((item, idx) => {
                const isParentActive = item.href
                  ? isActive(item.href)
                  : hasActiveChild(item.subMenu);

                return (
                  <li key={idx} className={isParentActive ? "active" : ""}>
                    {item.href && item.href !== "#" ? (
                      // Regular menu item with a valid href
                      <Link
                        href={item.href}
                        className="navlink"
                        onClick={(e) => handleMenuItemClick(e, null, item.href)} // Pass event and href
                      >
                        {t(item.labelKey)}
                      </Link>
                    ) : (
                      // Menu item for dropdowns (like Language), or items with href="#"
                      <a
                        className="has-arrow"
                        href={item.href || "#"}
                        // No direct onClick here for MetisMenu parent, as it triggers sub-menu toggle
                        // If MetisMenu itself needs to close the overall mobile menu on parent click,
                        // that would be a MetisMenu configuration or separate click handler.
                      >
                        {t(item.labelKey)}
                        {item.labelKey === "menu.language" && (
                          <span style={{ marginLeft: "8px" }}>
                            {getFlagEmoji(locale)}
                          </span>
                        )}
                      </a>
                    )}

                    {item.subMenu && (
                      <ul className="sub-menu">
                        {item.subMenu.map((sub, subIdx) => (
                          <li key={subIdx}>
                            {sub.locale ? (
                              // Language switcher sub-item: Use <a> with handleMenuItemClick
                              <a
                                href="#" // Set href to "#" to prevent navigation
                                className={isActive(sub.href) ? "active" : ""}
                                onClick={(e) =>
                                  handleMenuItemClick(e, sub.locale)
                                } // Pass newLocale
                              >
                                {t(sub.labelKey)}
                              </a>
                            ) : (
                              // Regular submenu item with a valid href: Use Link with handleMenuItemClick
                              <Link
                                href={sub.href}
                                className={isActive(sub.href) ? "active" : ""}
                                onClick={(e) =>
                                  handleMenuItemClick(e, null, sub.href)
                                } // Pass href
                              >
                                {t(sub.labelKey)}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="action-bar">
            <a
              href={`mailto:${t("header_top.email")}`}
              onClick={(e) => handleMenuItemClick(e)}
            >
              <i className="las la-envelope"></i>
              {t("header_top.email")}
            </a>
            <a
              href={`tel:${t("header_top.phone1")}`}
              onClick={(e) => handleMenuItemClick(e)}
            >
              <i className="fal fa-phone"></i>
              {t("header_top.phone1")}
            </a>
            <Link
              href="/contact"
              className="theme-btn"
              onClick={(e) => handleMenuItemClick(e, null, "/contact")}
            >
              {t("common.contact_us_button")}
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`overlay ${isMobileMenuShow ? "active" : ""}`}
        onClick={closeMobileMenu}
      ></div>
    </div>
  );
}
