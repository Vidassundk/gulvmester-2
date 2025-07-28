// components/sections/ServiceSectionFour.js
"use client";

import Link from "next/link"; // Keep Link if used elsewhere, not directly for service items here
import { useAppContext } from "@/context"; // Corrected import path

export default function ServiceSectionFour() {
  const { t } = useAppContext(); // Get the translation function

  // Array of service items, now using translation keys
  // These keys map to the content already defined in services_section in en.json
  const services = [
    {
      icon: "flaticon-saw-1",
      titleKey: "services_section.professional_installation_title",
      descriptionKey: "services_section.professional_installation_desc",
      link: "/services",
      delay: ".2s",
    },
    {
      icon: "flaticon-chisel",
      titleKey: "services_section.custom_designs_title",
      descriptionKey: "services_section.custom_designs_desc",
      link: "/services",
      delay: ".4s",
    },
    {
      icon: "flaticon-sawing",
      titleKey: "services_section.renovation_repair_title",
      descriptionKey: "services_section.renovation_repair_desc",
      link: "/services",
      delay: ".6s",
    },
    {
      icon: "flaticon-toolbox",
      titleKey: "services_section.expert_consultations_title",
      descriptionKey: "services_section.expert_consultations_desc",
      link: "/services",
      delay: ".2s",
    },
    {
      icon: "flaticon-drill",
      titleKey: "services_section.laminate_solutions_title",
      descriptionKey: "services_section.laminate_solutions_desc",
      link: "/services",
      delay: ".4s",
    },
    {
      icon: "flaticon-carpenter",
      titleKey: "services_section.parquet_engineered_title",
      descriptionKey: "services_section.parquet_engineered_desc",
      link: "/services",
      delay: ".6s",
    },
  ];

  return (
    <div className="service-section gray-bg section-padding pb-90">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={service.delay}
            >
              <div className="single-service-item">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h5>{t(service.titleKey)}</h5> {/* Translated title */}
                <p>{t(service.descriptionKey)}</p>{" "}
                {/* Translated description */}
                {/* Add "Read More" link if this design includes it */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
