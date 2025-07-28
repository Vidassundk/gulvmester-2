// components/sections/ProjectSectionOne.js
"use client";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";
import Link from "next/link";
import { useAppContext } from "@/context"; // Adjust path as necessary

import projectImg1 from "@/assets/img/gulvmestereas/gulv-image1.jpg";
import projectImg2 from "@/assets/img/gulvmestereas/gulv-image2.jpg";
import projectImg3 from "@/assets/img/gulvmestereas/gulv-image3.jpg";
import projectImg4 from "@/assets/img/gulvmestereas/gulv-image4.jpg";
import projectImg5 from "@/assets/img/gulvmestereas/gulv-image5.jpg";
import projectImg6 from "@/assets/img/gulvmestereas/gulv-image6.jpg";

export default function ProjectSectionOne() {
  const { t } = useAppContext(); // Get the translation function

  const projects = [
    {
      imgSrc: projectImg1.src,
      delay: ".2s",
    },
    {
      imgSrc: projectImg2.src,
      delay: ".4s",
    },
    {
      imgSrc: projectImg3.src,
      delay: ".6s",
    },
    {
      imgSrc: projectImg4.src,
      delay: ".2s",
    },
    {
      imgSrc: projectImg5.src,
      delay: ".4s",
    },
    {
      imgSrc: projectImg6.src,
      delay: ".6s",
    },
  ];

  useEffect(() => {
    Fancybox.bind('[data-fancybox="project-gallery"]', {
      Thumbs: {
        autoStart: false,
      },
      Toolbar: true,
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="project-section project-three section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 col-md-8 wow fadeInUp animated"
            data-wow-delay="200ms"
          >
            <div className="section-title mb-0">
              <h6>{t("projects_section_one.subtitle")}</h6> {/* Translated */}
              <div className="heading-animation">
                <h2>{t("projects_section_one.title")}</h2> {/* Translated */}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-4 text-lg-end d-none d-lg-inline-block">
            <Link href="/project" className="theme-btn">
              {t("common.view_all_projects")}{" "}
              {/* Translated "View All Projects" */}
            </Link>
          </div>
        </div>
        <div className="row gy-4 mt-40">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`col-xl-4 col-lg-4 col-md-6 wow fadeInUp ${
                index === 4 || index === 5 ? "d-none d-lg-block" : ""
              }`}
              data-wow-delay={project.delay}
            >
              <a
                href={project.imgSrc}
                data-fancybox="project-gallery"
                className="single-project-wrapper"
              >
                <div className="project-bg">
                  <img
                    src={project.imgSrc}
                    alt={t("projects_section_one.image_alt_prefix", {
                      index: index + 1,
                    })}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
