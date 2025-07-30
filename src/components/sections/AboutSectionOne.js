// components/sections/AboutSectionOne.js
"use client";

import Link from "next/link";
import { useAppContext } from "@/context"; // Adjust path as necessary

// Assuming these are relevant background images
import aboutBg2 from "@/assets/img/gulvmestereas/google.jpg";
import aboutBg1 from "@/assets/img/gulvmestereas/mittanbud.jpg";

export default function AboutSectionOne() {
  const { t } = useAppContext(); // Get the translation function

  return (
    <div id="about-1" className="about-section gray-bg section-padding">
      <div className="container">
        <div className="row gx-lg-5">
          <div
            className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="about-img-wrap">
              <div
                className="image-one"
                style={{ backgroundImage: `url(${aboutBg2.src})` }}
              ></div>
              <div
                className="image-two"
                style={{ backgroundImage: `url(${aboutBg1.src})` }}
              ></div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="about-content-wrap">
              <div className="section-title">
                <h6>{t("about_section_one.subtitle")}</h6>{" "}
                {/* Translated "Why Choose Us?" */}
                <div className="heading-animation">
                  <h2>{t("about_section_one.title")}</h2>{" "}
                  {/* Translated "Hear From Our Happy Clients" */}
                </div>
              </div>
              <p>
                {t("about_section_one.description")} {/* Translated */}
              </p>
            </div>
            <div className="row mt-60">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="single-counter-box">
                  {/* Google Reviews Link */}
                  <Link
                    href="https://maps.app.goo.gl/HviTCkRTVs9mshmC9"
                    className="counter-link-overlay"
                  >
                    <p className="counter-number">
                      <span
                        className="purecounter"
                        data-purecounter-duration="1"
                        data-purecounter-end="4.9"
                        data-purecounter-decimals="1"
                      >
                        4.9
                      </span>
                      <span className="rating-suffix">/5</span>
                    </p>
                    <h6>{t("about_section_one.google_rating_label")}</h6>{" "}
                    {/* Translated */}
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="single-counter-box">
                  {/* Mittanbud Reviews Link */}
                  <Link href="/" className="counter-link-overlay">
                    <p className="counter-number">
                      <span
                        className="purecounter"
                        data-purecounter-duration="1"
                        data-purecounter-end="100"
                      >
                        20
                      </span>
                      <span className="rating-suffix">+</span>
                    </p>
                    <h6>{t("about_section_one.mittanbud_reviews_label")}</h6>{" "}
                    {/* Translated */}
                  </Link>
                </div>
              </div>
            </div>
            {/* If there was a "Read Our Reviews" button here, it would also be translated */}
            {/* Example: <Link href="/reviews" className="theme-btn">{t('about_section_one.read_reviews_button')}</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
