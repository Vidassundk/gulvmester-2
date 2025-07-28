// components/sections/ServiceSectionThree.js
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link"; // Keep Link if used elsewhere, but not directly for service items now
import { useAppContext } from "@/context"; // Adjust path as necessary

export default function ServiceSectionThree() {
  const { t } = useAppContext(); // Get the translation function

  // Array of service items, now using translation keys
  const services = [
    {
      icon: "flaticon-saw-1",
      titleKey: "services_section.professional_installation_title",
      descriptionKey: "services_section.professional_installation_desc",
      link: "/services", // Link remains hardcoded to path
    },
    {
      icon: "flaticon-chisel",
      titleKey: "services_section.custom_designs_title",
      descriptionKey: "services_section.custom_designs_desc",
      link: "/services",
    },
    {
      icon: "flaticon-sawing",
      titleKey: "services_section.renovation_repair_title",
      descriptionKey: "services_section.renovation_repair_desc",
      link: "/services",
    },
    {
      icon: "flaticon-toolbox",
      titleKey: "services_section.expert_consultations_title",
      descriptionKey: "services_section.expert_consultations_desc",
      link: "/services",
    },
    {
      icon: "flaticon-drill",
      titleKey: "services_section.laminate_solutions_title",
      descriptionKey: "services_section.laminate_solutions_desc",
      link: "/services",
    },
    {
      icon: "flaticon-carpenter",
      titleKey: "services_section.parquet_engineered_title",
      descriptionKey: "services_section.parquet_engineered_desc",
      link: "/services",
    },
  ];

  return (
    <div
      id="service-3"
      className="service-section gray-bg section-padding pb-90"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 text-center">
            <div className="section-title">
              <h6>{t("common.our_services")}</h6>{" "}
              {/* Translated "Our Services" */}
              <div className="heading-animation">
                <h2>{t("services_section.main_heading")}</h2>{" "}
                {/* Translated "Your Vision, Our Foundation: Expert Flooring Solutions" */}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-40">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={false}
            breakpoints={{
              0: { slidesPerView: 1, pagination: { clickable: true } },
              575: { slidesPerView: 1, pagination: false },
              767: { slidesPerView: 2, pagination: { clickable: true } },
              990: { slidesPerView: 3 },
              1200: { slidesPerView: 3, pagination: { clickable: true } },
            }}
            className="service-slider owl-carousel"
          >
            {services.map((service, index) => (
              <SwiperSlide className="single-service-item" key={index}>
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h5>{t(service.titleKey)}</h5> {/* Translate title */}
                <p>{t(service.descriptionKey)}</p> {/* Translate description */}
                {/* Ensure the "Read More" link also uses translation, if desired */}
                <Link href={service.link} className="read_more_link">
                  <span className="link_text">{t("common.read_more")}</span>
                  <span className="link_icon">
                    <i className="las la-arrow-right"></i>
                  </span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
