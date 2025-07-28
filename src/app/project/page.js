// app/project/page.js
"use client";

import Breadcrumb from "@/components/sections/Breadcrumb";
import ProjectSectionFour from "@/components/sections/ProjectSectionFour";
import bgImage from "@/assets/img/banner.jpg"; // Background image for breadcrumb

import { useAppContext } from "@/context"; // Corrected import path

export default function Project() {
  const { t } = useAppContext(); // Get the translation function

  const menus = [
    {
      label: t("common.project_page_breadcrumb_label"), // Translated label for "Project"
      link: "", // Empty link for the current page
    },
  ];

  return (
    <>
      {/*-- Breadcrumb Area  --*/}
      <Breadcrumb
        title={t("common.project_page_title")}
        menus={menus}
        bgImage={bgImage.src}
      />{" "}
      {/* Translated title */}
      {/*-- Project Section  --*/}
      <ProjectSectionFour />
      {/*-- Testimonial Section  --*/}
      {/* <TestimonialSectionOne /> */}
      {/*-- FAQ Section  --*/}
      {/* <FaqSectionThree /> */}
    </>
  );
}
