import Link from "next/link";

export default function FaqSectionThree() {
  const faqs = [
    {
      id: "One",
      question: "What flooring services do you offer?",
      answer:
        "We offer laminate, parquet, vinyl, and solid wood flooring installation services. We also provide floor sanding, varnishing, and oiling to ensure durability and aesthetics. Additionally, we remove old coverings, prepare the base for new floors, and ensure everything is completed with precision and quality.",
      expanded: true, // Set the first one to true to be open by default
    },
    {
      id: "Two",
      question: "Do you offer consultations for choosing the right flooring?",
      answer:
        "Yes, we provide professional consultations to help you choose the most suitable flooring for your needs. We evaluate the room's purpose, intensity, humidity level, and aesthetics to ensure the chosen solution is long-lasting and matches your interior.",
    },
    {
      id: "Three",
      question: "How long does it take to complete flooring work?",
      answer:
        "The duration of work depends on the type of flooring, the area size, and the complexity of base preparation. Laminate or vinyl flooring usually takes 1-3 days to install, while parquet installation with sanding and varnishing may take up to a week. We will plan and schedule the work accurately after inspecting the site.",
    },
    {
      id: "Four",
      question: "Do you offer floor renovation services?",
      answer:
        "Yes, we provide floor sanding, varnishing, oiling, and replacement of damaged boards. These services help restore the appearance of your floors and extend their lifespan. We are ready to bring back the original beauty and functionality of your floors.",
    },
    {
      id: "Five",
      question: "Do you work with commercial properties?",
      answer:
        "Yes, we work with both residential and commercial properties, including offices, restaurants, shops, and other spaces. We have experience handling projects of various sizes and can offer solutions tailored to your business needs.",
    },
    {
      id: "Six",
      question: "How can I book your services?",
      answer:
        "Contact us by phone or email listed in our contact information. We will arrange a site inspection to evaluate the scope of work and prepare an individual offer. Everything is done quickly and transparently for your convenience.",
    },
    {
      id: "Seven",
      question: "Do you provide a warranty for your work?",
      answer:
        "Yes, we provide a warranty for our work. The warranty duration depends on the project's complexity and scope, but we always ensure the highest quality of work.",
    },
    {
      id: "Eight",
      question: "What materials do you use for flooring installation?",
      answer:
        "We use only high-quality materials from trusted manufacturers that meet all safety and durability requirements. Materials are chosen according to the client's needs and the room's specifics to ensure the final result is both beautiful and durable.",
    },
    {
      id: "Nine",
      question: "Do you offer old flooring removal services?",
      answer:
        "Yes, we can remove old flooring, whether it is laminate, parquet, or vinyl. We also handle base cleaning and preparation for new flooring to ensure a flawless result.",
    },
    {
      id: "Ten",
      question: "Can I view examples of your work?",
      answer:
        "Yes, you can find examples of our work on our website or social media. If needed, we can provide photos or videos from completed projects to give you a clear idea of our work quality.",
    },
  ];

  return (
    <div className="faq-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="section-title">
              <h6>Common Questions</h6>
              <div className="heading-animation">
                <h2>
                  Your Flooring Questions, <span>Answered</span>
                </h2>
              </div>
            </div>
            <p>
              We've gathered the most common questions our clients ask about
              flooring installation, renovation, and maintenance. If you don't
              find your answer here, please don't hesitate to reach out!
            </p>
            <Link
              href="/contact"
              className="theme-btn mt-30 d-none d-lg-inline-block"
            >
              Contact Us Today
            </Link>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="cp-custom-accordion">
              <div className="accordions" id="accordionExample">
                {faqs.map((faq, index) => (
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
                        {faq.question}
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
                      <div className="accordion-body">{faq.answer}</div>
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
