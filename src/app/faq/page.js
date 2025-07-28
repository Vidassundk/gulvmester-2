// app/faq/page.js
"use client";

import Breadcrumb from "@/components/sections/Breadcrumb";
import FaqSectionFour from "@/components/sections/FaqSectionFour";
import MissionSection from "@/components/sections/MissionSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import bgImage from "@/assets/img/gulvmestereas/faq-bg.jpg"; // Background image for breadcrumb

import { useAppContext } from "@/context"; // Corrected import path

export default function Faq() {
  const { t } = useAppContext(); // Get the translation function

  const menus = [
    {
      label: t("common.faq_page_breadcrumb_label"), // Translated label for "FAQ's"
      link: "", // Empty link for the current page
    },
  ];

  return (
    <>
      {/*-- Breadcrumb Area  --*/}
      <Breadcrumb
        title={t("common.faq_page_title")}
        menus={menus}
        bgImage={bgImage.src}
      />{" "}
      {/* Translated title */}
      {/*-- Faq Section  --*/}
      <FaqSectionFour />
      {/*-- Mission Section  --*/}
      <MissionSection />
      {/*-- Why Choose Us Section  --*/}
      <WhyChooseUsSection />
    </>
  );
}
