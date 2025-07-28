"use client"; // This component needs to be a client component for useEffect and Fancybox

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";
// Link is not directly used for image clicks here, but kept if other links exist in the component or future use
// import Link from "next/link";

// Dynamically import all 24 images
import projectImg1 from "@/assets/img/gulvmestereas/gulv-image1.jpg";
import projectImg2 from "@/assets/img/gulvmestereas/gulv-image2.jpg";
import projectImg3 from "@/assets/img/gulvmestereas/gulv-image3.jpg";
import projectImg4 from "@/assets/img/gulvmestereas/gulv-image4.jpg";
import projectImg5 from "@/assets/img/gulvmestereas/gulv-image5.jpg";
import projectImg6 from "@/assets/img/gulvmestereas/gulv-image6.jpg";
import projectImg7 from "@/assets/img/gulvmestereas/gulv-image7.jpg";
import projectImg8 from "@/assets/img/gulvmestereas/gulv-image8.jpg";
import projectImg9 from "@/assets/img/gulvmestereas/gulv-image9.jpg";
import projectImg10 from "@/assets/img/gulvmestereas/gulv-image10.jpg";
import projectImg11 from "@/assets/img/gulvmestereas/gulv-image11.jpg";
import projectImg12 from "@/assets/img/gulvmestereas/gulv-image12.jpg";
import projectImg13 from "@/assets/img/gulvmestereas/gulv-image13.jpg";
import projectImg14 from "@/assets/img/gulvmestereas/gulv-image14.jpg";
import projectImg15 from "@/assets/img/gulvmestereas/gulv-image15.jpg";
import projectImg16 from "@/assets/img/gulvmestereas/gulv-image16.jpg";
import projectImg17 from "@/assets/img/gulvmestereas/gulv-image17.jpg";
import projectImg18 from "@/assets/img/gulvmestereas/gulv-image18.jpg";
import projectImg19 from "@/assets/img/gulvmestereas/gulv-image19.jpg";
import projectImg20 from "@/assets/img/gulvmestereas/gulv-image20.jpg";
import projectImg21 from "@/assets/img/gulvmestereas/gulv-image21.jpg";
import projectImg22 from "@/assets/img/gulvmestereas/gulv-image22.jpg";
import projectImg23 from "@/assets/img/gulvmestereas/gulv-image23.jpg";
import projectImg24 from "@/assets/img/gulvmestereas/gulv-image24.jpg";

export default function ProjectSectionFour() {
  const allProjectImages = [
    projectImg1,
    projectImg2,
    projectImg3,
    projectImg4,
    projectImg5,
    projectImg6,
    projectImg7,
    projectImg8,
    projectImg9,
    projectImg10,
    projectImg11,
    projectImg12,
    projectImg13,
    projectImg14,
    projectImg15,
    projectImg16,
    projectImg17,
    projectImg18,
    projectImg19,
    projectImg20,
    projectImg21,
    projectImg22,
    projectImg23,
    projectImg24,
  ];

  // Assign delays dynamically to cycle through .2s, .4s, .6s, .8s
  const projects = allProjectImages.map((img, index) => ({
    imgSrc: img.src,
    delay: `.${((index % 4) + 1) * 2}s`, // Cycles .2s, .4s, .6s, .8s
  }));

  useEffect(() => {
    Fancybox.bind('[data-fancybox="project-gallery-four"]', {
      Thumbs: {
        autoStart: false,
      },
      Toolbar: true,
      // Optional: Add captions if you decide to add titles later
      // caption: function (fancybox, carousel, slide) {
      //   return (
      //     `${slide.index + 1} / ${carousel.slides.length}<br />` +
      //     (slide.data.caption || '')
      //   );
      // },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="project-section project-three section-padding">
      <div className="container">
        <div className="row gy-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`col-xl-3 col-lg-3 col-md-6 wow fadeInUp ${
                // Adjusted d-none d-lg-block logic for 8 columns.
                // If there are more than 4, the 5th, 6th, 7th, 8th etc. might be hidden on smaller screens.
                // Review this if your responsive layout isn't as desired for 8+ images.
                // For 8 total images, `index >= 4` hides on md,
                // for 24 images this might need a different media query logic if columns are reduced.
                // Keeping original template's "d-none d-lg-block" class for simplicity.
                index >= 4 ? "d-none d-lg-block" : ""
              }`}
              data-wow-delay={project.delay}
            >
              <a
                href={project.imgSrc}
                data-fancybox="project-gallery-four" // Unique gallery name for this section
                className="single-project-wrapper"
              >
                <div className="project-bg">
                  <img
                    src={project.imgSrc}
                    alt={`Completed flooring project image ${index + 1}`}
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
