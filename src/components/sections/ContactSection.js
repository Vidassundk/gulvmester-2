// components/sections/ContactSection.js
"use client";

import ContactForm from "../ContactForm"; // Assuming ContactForm is already translated
import { useAppContext } from "@/context"; // Corrected import path as per your instruction

// Accept 'dark' prop, defaulting to false
export default function ContactSection({ dark = false }) {
  const { t } = useAppContext(); // Get the translation function

  // Determine background class based on 'dark' prop
  const backgroundClass = dark ? "dark-bg" : "gray-bg";
  // Determine text color class for white text
  const textColorClass = dark ? "text-white" : ""; // Use empty string if not dark, assuming default text color is fine

  return (
    <div className={`contact-section ${backgroundClass} section-padding`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".2s">
            <ContactForm />
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".4s">
            <div className="contact-intro-wrap">
              <div className="section-title">
                <h6>{t("contact_section.get_in_touch_subtitle")}</h6>{" "}
                {/* Apply textColorClass */}
                <div className="heading-animation">
                  <h2 className={textColorClass}>
                    {t("contact_section.ready_to_transform_title")}
                  </h2>{" "}
                  {/* Apply textColorClass */}
                </div>
              </div>
              <p className={textColorClass}>
                {t("contact_section.description_paragraph")}{" "}
                {/* Apply textColorClass */}
              </p>
            </div>
            <div className="contact-info-wrap">
              <div className="contact-info-inner mt-60">
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-contact-wrap">
                      <div className="info-icon">
                        <i className={`fa-solid fa-phone`}></i>{" "}
                        {/* Apply textColorClass to icon if needed */}
                      </div>
                      <div className="info-content">
                        <h4 className={textColorClass}>
                          {t("contact_section.call_us_heading")}
                        </h4>{" "}
                        {/* Apply textColorClass */}
                        <p className={textColorClass}>
                          {t("header_top.phone1")}
                        </p>{" "}
                        {/* Apply textColorClass */}
                        <p className={textColorClass}>
                          {t("header_top.phone2")}
                        </p>{" "}
                        {/* Apply textColorClass */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-contact-wrap">
                      <div className="info-icon">
                        <i className={`fa-solid fa-envelope `}></i>{" "}
                        {/* Apply textColorClass to icon if needed */}
                      </div>
                      <div className="info-content">
                        <h4 className={textColorClass}>
                          {t("contact_section.email_us_heading")}
                        </h4>{" "}
                        {/* Apply textColorClass */}
                        <p className={textColorClass}>
                          {t("header_top.email")}
                        </p>{" "}
                        {/* Apply textColorClass */}
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-contact-wrap">
                      <div className="info-icon">
                        <i className={`fa-solid fa-location-dot `}></i>{" "}
                        {/* Apply textColorClass to icon if needed */}
                      </div>
                      <div className="info-content">
                        <h4 className={textColorClass}>
                          {t("contact_section.our_office_heading")}
                        </h4>{" "}
                        {/* Apply textColorClass */}
                        <p className={`mb-10 ${textColorClass}`}>
                          {t("contact_section.office_address_line1")}
                        </p>{" "}
                        {/* Apply textColorClass */}
                        <p className={textColorClass}>
                          {t("contact_section.office_address_line2")}
                        </p>{" "}
                        {/* Apply textColorClass */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
