// app/services/page.js
"use client";

import Breadcrumb from "@/components/sections/Breadcrumb";
import ServiceSectionFour from "@/components/sections/ServiceSectionFour";
// import ProjectSectionThree from "@/components/sections/ProjectSectionThree"; // Commented out as in original
// import TestimonialSectionThree from "@/components/sections/TestimonialSectionThree"; // Commented out as in original
import CounterSectionTwo from "@/components/sections/CounterSectionTwo";
// import PricingSectionOne from "@/components/sections/PricingSectionOne"; // Commented out as in original
// import ClientsSectionOne from "@/components/sections/ClientsSectionOne"; // Commented out as in original

import { useAppContext } from "@/context"; // Corrected import path

export default function Services() {
  const { t } = useAppContext(); // Get the translation function

  const menus = [
    {
      label: t("common.services_page_breadcrumb_label"), // Translated label for "Services"
      link: "", // Empty link for the current page
    },
  ];

  return (
    <>
      {/*-- Breadcrumb Area  --*/}
      <Breadcrumb title={t("common.services_page_title")} menus={menus} />{" "}
      {/* Translated title */}
      {/*-- Service Section  --*/}
      <ServiceSectionFour />
      {/*-- Project Section  --*/}
      {/* <ProjectSectionThree /> */}
      {/*-- Testimonial Section  --*/}
      {/* <TestimonialSectionThree /> */}
      {/*-- Counter Section --*/}
      <CounterSectionTwo />
      {/*-- Pricing Section  --*/}
      {/* <PricingSectionOne /> */}
      {/*-- Clients Section --*/}
      {/* <ClientsSectionOne customClass="pt-60" /> */}
    </>
  );
}
