// components/sections/ScrollingTextSectionOne.js
"use client";

import { useAppContext } from "@/context";
import asterisk from "@/assets/img/asterisk.png";

export default function ScrollingTextSectionOne() {
  const { t } = useAppContext(); // Get the translation function

  // Define translation keys for the scrolling items
  // This approach allows for easier translation of the whole list.
  const scrollItemKeys = [
    "scrolling_text.skilled_professionals",
    "scrolling_text.proven_track_record",
    "scrolling_text.sustainable_materials",
    "scrolling_text.cost_effective_solutions",
    "scrolling_text.custom_design_services",
    "scrolling_text.client_focused_approach",
    // Repeat keys if you want items to appear multiple times in the scroll
    "scrolling_text.skilled_professionals",
    "scrolling_text.proven_track_record",
    "scrolling_text.sustainable_materials",
  ];

  return (
    <div className="service_slider_wrap overflow-hidden">
      <div className="slider_item">
        {scrollItemKeys.map((key, index) => (
          <h5 key={index}>
            <img src={asterisk.src} alt="" />{" "}
            {/* Alt text can remain empty if purely decorative or handled by CSS */}
            {t(key)} {/* Translate using the key */}
          </h5>
        ))}
      </div>
    </div>
  );
}
