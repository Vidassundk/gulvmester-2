// components/sections/WhyChooseUsSection.js
"use client";

import { useAppContext } from "@/context"; // Corrected import path

import chooseImg1 from "@/assets/img/gulvmestereas/gulv-image7.jpg";
import chooseImg2 from "@/assets/img/gulvmestereas/gulv-image22.jpg";
import chooseImg3 from "@/assets/img/gulvmestereas/gulv-image12.jpg";
import chooseImg4 from "@/assets/img/gulvmestereas/gulv-image18.jpg";

export default function WhyChooseUsSection() {
  const { t } = useAppContext(); // Get the translation function

  const reasons = [
    {
      number: "01",
      titleKey: "why_choose_us_section.reason1_title",
      image: chooseImg1,
      altKey: "why_choose_us_section.reason1_alt",
    },
    {
      number: "02",
      titleKey: "why_choose_us_section.reason2_title",
      image: chooseImg2,
      altKey: "why_choose_us_section.reason2_alt",
    },
    {
      number: "03",
      titleKey: "why_choose_us_section.reason3_title",
      image: chooseImg3,
      altKey: "why_choose_us_section.reason3_alt",
    },
    {
      number: "04",
      titleKey: "why_choose_us_section.reason4_title",
      image: chooseImg4,
      altKey: "why_choose_us_section.reason4_alt",
    },
  ];

  return (
    <div className="why-choose-us-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="section-title">
              <h6>{t("why_choose_us_section.subtitle")}</h6>{" "}
              {/* Translated "Discover the Difference" */}
              <h2>{t("why_choose_us_section.title")}</h2>{" "}
              {/* Translated "Why Choose Gulvmestere?" */}
            </div>
          </div>
          <div className="offset-xl-1 col-xl-7 offset-lg-1 col-lg-7">
            {reasons.map((reason, index) => (
              <div className="single-choose-wrap" key={index}>
                <div className="single-choose-inner">
                  <h5>
                    <span>{reason.number}</span>
                    {t(reason.titleKey)} {/* Translated reason title */}
                  </h5>
                </div>
                <div className="choose-img">
                  <img
                    src={reason.image.src}
                    alt={t(reason.altKey)} /* Translated image alt text */
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
