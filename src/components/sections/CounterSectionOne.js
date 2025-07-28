// components/sections/CounterSectionOne.js
"use client";

import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useAppContext } from "@/context";

export default function CounterSectionOne() {
  const { t } = useAppContext(); // Get the translation function
  const [startCount, setStartCount] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true); // Start counting when in viewport
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className="counter-section counter-two dark-bg section-padding">
      <div className="container">
        <div className="row gx-5 wow fadeInUp" ref={counterRef}>
          <div className="col-xl-6 col-lg-6">
            <div className="counter-intro-wrap">
              <div className="section-title">
                <h6>{t("counter_one.subtitle")}</h6> {/* Translated */}
                <div className="heading-animation">
                  <h2 className="text-white">
                    <span>{t("counter_one.heading_highlight")}</span>{" "}
                    {/* Translated */}
                    {t("counter_one.heading_rest")} {/* Translated */}
                  </h2>
                </div>
              </div>
              <p className="text-white">
                {t("counter_one.description")} {/* Translated */}
              </p>
              <Link
                href="/services"
                className="white-btn mt-20 d-none d-md-inline-block"
              >
                {t("counter_one.get_a_quote_button")} {/* Translated */}
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 align-content-end">
            <div className="counter-item-wrap">
              {/* This section was commented out in your provided code, keeping it as is */}
              {/* <div className="single-counter-box">
                <p className="counter-number">
                  <span
                    className="purecounter"
                    data-purecounter-duration="1"
                    data-purecounter-end="125"
                  >
                    <CountUp
                      end={125}
                      duration={3}
                      startOnMount={false}
                      redraw={true}
                      delay={0}
                      useEasing={true}
                      start={startCount ? 0 : null}
                    />
                  </span>
                </p>
                <span>+</span>
                <h6>{t('counter_one.materials_available')}</h6>
              </div> */}
              <div className="single-counter-box">
                <p className="counter-number">
                  <span
                    className="purecounter"
                    data-purecounter-duration="1"
                    data-purecounter-end={97}
                  >
                    <CountUp
                      end={97}
                      duration={3}
                      startOnMount={false}
                      redraw={true}
                      delay={0}
                      useEasing={true}
                      start={startCount ? 0 : null}
                    />
                  </span>
                </p>
                <span>+</span>
                <h6>{t("counter_one.projects_completed")}</h6>{" "}
                {/* Translated */}
              </div>
              <div className="single-counter-box">
                <p className="counter-number">
                  <span
                    className="purecounter"
                    data-purecounter-duration="1"
                    data-purecounter-end={137}
                  >
                    <CountUp
                      end={137}
                      duration={3}
                      startOnMount={false}
                      redraw={true}
                      delay={0}
                      useEasing={true}
                      start={startCount ? 0 : null}
                    />
                  </span>
                </p>
                <span>+</span>
                <h6>{t("counter_one.satisfied_customers")}</h6>{" "}
                {/* Translated */}
              </div>
              <div className="single-counter-box">
                <p className="counter-number">
                  <span
                    className="purecounter"
                    data-purecounter-duration="1"
                    data-purecounter-end={10}
                  >
                    <CountUp
                      end={10}
                      duration={3}
                      startOnMount={false}
                      redraw={true}
                      delay={0}
                      useEasing={true}
                      start={startCount ? 0 : null}
                    />
                  </span>
                </p>
                <span>+</span>
                <h6>{t("counter_one.years_of_experience")}</h6>{" "}
                {/* Translated */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
