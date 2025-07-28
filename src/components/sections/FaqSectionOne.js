// components/sections/FaqSectionOne.js
"use client";

import { useAppContext } from "@/context"; // Adjust path as necessary
import faqBg from "@/assets/img/gulvmestereas/gulv-image22.jpg";

export default function FaqSectionOne() {
  const { t } = useAppContext(); // Get the translation function

  // Array of FAQ items, now using translation keys for question and answer
  const faqs = [
    {
      id: "One",
      questionKey: "faq_section_one.q1",
      answerKey: "faq_section_one.a1",
      expanded: true,
    },
    {
      id: "Two",
      questionKey: "faq_section_one.q2",
      answerKey: "faq_section_one.a2",
    },
    {
      id: "Three",
      questionKey: "faq_section_one.q3",
      answerKey: "faq_section_one.a3",
    },
    {
      id: "Four",
      questionKey: "faq_section_one.q4",
      answerKey: "faq_section_one.a4",
    },
    {
      id: "Five",
      questionKey: "faq_section_one.q5",
      answerKey: "faq_section_one.a5",
    },
    {
      id: "Six",
      questionKey: "faq_section_one.q6",
      answerKey: "faq_section_one.a6",
    },
    {
      id: "Seven",
      questionKey: "faq_section_one.q7",
      answerKey: "faq_section_one.a7",
    },
    {
      id: "Eight",
      questionKey: "faq_section_one.q8",
      answerKey: "faq_section_one.a8",
    },
    {
      id: "Nine",
      questionKey: "faq_section_one.q9",
      answerKey: "faq_section_one.a9",
    },
    {
      id: "Ten",
      questionKey: "faq_section_one.q10",
      answerKey: "faq_section_one.a10",
    },
  ];

  return (
    <div className="faq-section section-padding pb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".8s">
            <div className="faq-img-wrap">
              <img
                src={faqBg.src}
                alt={t("faq_section_one.image_alt")} // Translated alt text
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="faq-content-wrap">
              <div className="section-title">
                <h6>{t("faq_section_one.subtitle")}</h6>{" "}
                {/* Translated "Your Questions, Answered" */}
                <div className="heading-animation">
                  <h2>{t("faq_section_one.title")}</h2>{" "}
                  {/* Translated "Common Questions About Our Flooring Services" */}
                </div>
              </div>
              <div className="cp-custom-accordion">
                <div className="accordions" id="accordionExample">
                  {faqs.map((faq) => (
                    <div className="accordion-items" key={faq.id}>
                      <h2 className="accordion-header" id={`heading${faq.id}`}>
                        <button
                          className={`accordion-buttons ${
                            faq.expanded ? "" : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${faq.id}`}
                          aria-expanded={faq.expanded ? "true" : "false"}
                          aria-controls={`collapse${faq.id}`}
                        >
                          {t(faq.questionKey)} {/* Translate question */}
                        </button>
                      </h2>
                      <div
                        id={`collapse${faq.id}`}
                        className={`accordion-collapse collapse ${
                          faq.expanded ? "show" : ""
                        }`}
                        aria-labelledby={`heading${faq.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {t(faq.answerKey)} {/* Translate answer */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
