// components/sections/HeroSectionOne.js
"use client";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Link from "next/link";
import headlineImg from "@/assets/img/floor-header-image-small.png";

import { useEffect } from "react";
import bannerBg from "@/assets/img/banner.jpg";

import { useAppContext } from "@/context";

export default function HeroSectionOne() {
  const { t } = useAppContext(); // Get the translation function

  useEffect(() => {
    // Keep Fancybox binding if there are elements with data-fancybox in this component
    // For a video play button, data-fancybox="video-popup" or similar would be used.
    // If this Fancybox binding is only for a specific video, keep it.
    // If it's a general gallery, it might be initialized elsewhere.
    Fancybox.bind("[data-fancybox]", {
      Thumbs: false,
      Toolbar: true,
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="hero-area gray-bg pt-120 pb-120 position-relative">
      {/* Headline Section */}
      <div id="Headline-Section" className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="hero-content-wrap">
              <div className="section-title">
                <h6>{t("hero_section.subtitle")}</h6> {/* Translated */}
                <div className="heading-animation">
                  <h1>
                    {t("hero_section.heading_part1")} {/* Translated */}
                    <span
                      className="wow fadeIn d-inline-block"
                      data-wow-delay=".2s"
                    >
                      <img
                        src={headlineImg.src}
                        alt="Flooring illustration"
                        className="img-fluid"
                      />
                    </span>{" "}
                    {t("hero_section.heading_part2")} {/* Translated */}
                  </h1>
                </div>
              </div>
              <h4 className="mb-4">
                {t("hero_section.tagline")} {/* Translated */}
              </h4>
              <p>
                {t("hero_section.description")} {/* Translated */}
              </p>
              <div
                className="hero-btn mt-40 wow fadeInUp animated"
                data-wow-delay="500ms"
              >
                <Link href="/services" className="theme-btn">
                  {t("hero_section.services_button")} {/* Translated */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-img-wrap d-none d-lg-flex align-items-center"
        style={{ backgroundImage: `url(${bannerBg.src})` }}
      ></div>
    </div>
  );
}
