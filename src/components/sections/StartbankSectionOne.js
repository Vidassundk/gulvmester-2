"use client";

import { useAppContext } from "@/context";
import startbankLogo from "@/assets/img/Startbank-logo.png";

export default function StartbankSectionOne() {
  const { t } = useAppContext();

  return (
    <div className="counter-section counter-two white-bg section-padding">
      <div className="container">
        <div className="row gx-5 align-items-center">
          <div className="col-xl-7 col-lg-7 wow fadeInUp" data-wow-delay=".2s">
            <div className="counter-intro-wrap">
              <div className="section-title">
                <h6>{t("startbank_section.subtitle")}</h6>
                <div className="heading-animation">
                  <h2>{t("startbank_section.title")}</h2>
                </div>
              </div>
              <p className="mb-0">{t("startbank_section.description")}</p>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 wow fadeInUp" data-wow-delay=".4s">
            <div className="text-center text-lg-end mt-40 mt-lg-0">
              <img
                src={startbankLogo.src}
                alt={t("startbank_section.logo_alt")}
                style={{ maxWidth: "260px", width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
