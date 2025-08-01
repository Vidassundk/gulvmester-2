// components/HeaderTop.js (or wherever your HeaderTop component is located)
"use client";

import { useAppContext } from "@/context";

export default function HeaderTop() {
  const { t } = useAppContext(); // Get the translation function from context

  return (
    <div className="header-top-area dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-8 dark-bg">
            <span>
              <i className="fa-light fa-envelope"></i>
              {t("header_top.email")}
            </span>
            <span>
              <i className="fa-light fa-location-dot"></i>
              {t("header_top.address")}
            </span>
            <span>
              <i className="fa-light fa-clock"></i>
              {t("header_top.hours")}
            </span>
          </div>
          <div className="col-xl-2 col-lg-4 text-end dark-bg">
            <div className="social-area">
              <a
                href="https://www.facebook.com/profile.php?id=61565412763854_LINK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/gulv_mestere_as/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
