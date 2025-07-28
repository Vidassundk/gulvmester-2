// app/contact/page.js
"use client";

import ContactSection from "@/components/sections/ContactSection";
import Breadcrumb from "@/components/sections/Breadcrumb";
import bgImage from "@/assets/img/gulvmestereas/contact-bg.jpg"; // Background image for breadcrumb

import { useAppContext } from "@/context"; // Corrected import path

export default function Contact() {
  const { t } = useAppContext(); // Get the translation function

  const menus = [
    {
      label: t("common.contact_page_breadcrumb_label"), // Translated label for "Contact"
      link: "", // Empty link for the current page
    },
  ];

  return (
    <>
      {/*-- Breadcrumb Area  --*/}
      <Breadcrumb
        title={t("common.contact_page_title")}
        menus={menus}
        bgImage={bgImage.src}
      />{" "}
      {/* Translated title */}
      {/*-- Contact Section --*/}
      <ContactSection />
      {/*-- Google Map Start--*/}
      <div className="contact-page google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d266832.9180766456!2d5.130295980175322!3d58.50071029787425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a3f97ab5780f7%3A0xc15ef593027ab3e7!2sGulv%20Mestere%20AS!5e0!3m2!1slt!2slt!4v1753442811928!5m2!1slt!2slt" /* Ensure this is your correct Google Maps embed URL */
          width="600"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
