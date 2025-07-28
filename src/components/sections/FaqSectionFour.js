// components/sections/FaqSectionFour.js
"use client";

import { useAppContext } from "@/context"; // Corrected import path

export default function FaqSectionFour() {
  const { t } = useAppContext(); // Get the translation function

  // Array of FAQ items, now using translation keys for question and answer
  // These keys map to the content already defined in faq_section_one in en.json
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
    <div className="faq-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 mb-50">
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
                      <div className="accordion-body">{t(faq.answerKey)}</div>{" "}
                      {/* Translate answer */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
