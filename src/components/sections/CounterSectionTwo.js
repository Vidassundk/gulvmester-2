// components/sections/CounterSectionTwo.js
"use client";

import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "@/context"; // Corrected import path

export default function CounterSectionTwo() {
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
    <div
      id="counter-3"
      className="counter-section theme-bg section-padding pb-80 pt-200"
      ref={counterRef} // Attach ref to the main div
    >
      <div className="container">
        <div className="row gx-4">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-counter-box">
              <p className="counter-number">
                <span className="purecounter">
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
              <h6>{t("counter_two.projects_completed_label")}</h6>{" "}
              {/* Translated */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-counter-box">
              <p className="counter-number">
                <span className="purecounter">
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
              <h6>{t("counter_two.happy_clients_label")}</h6> {/* Translated */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-counter-box">
              <p className="counter-number">
                <span className="purecounter">
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
              <h6>{t("counter_two.years_in_business_label")}</h6>{" "}
              {/* Translated */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
