// components/sections/MissionSection.js
"use client";

import { useAppContext } from "@/context";

export default function MissionSection() {
  const { t } = useAppContext();

  return (
    <div
      className="mission-section pt-90 pb-90"
      data-background="assets/img/mission-bg.jpg"
    >
      <div className="overlay-5"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-8 text-center">
            <div className="section-title">
              <h6 className="text-white">{t("mission_section.subtitle")}</h6>
              <h2
                className="text-white" // Keep text-white on the H2
                dangerouslySetInnerHTML={{
                  __html: t("mission_section.main_heading"),
                }}
              ></h2>{" "}
              {/* Use dangerouslySetInnerHTML */}
            </div>
            <div className="author-info">
              <h5 className="text-white">{t("mission_section.team_name")}</h5>
              <h6 className="text-white">
                {t("mission_section.specialists_role")}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
