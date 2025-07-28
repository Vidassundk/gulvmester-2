// src/components/providers/GlobalClientProviders.js
"use client"; // This component is explicitly a Client Component.

import React from "react";
import PreLoader from "@/components/PreLoader";
import MouseCursor from "@/components/MouseCursor";
import SearchDropdown from "@/components/SearchDropdown";
import OffCanvas from "@/components/OffCanvas";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import FooterBottom from "@/components/footer/FooterBottom";
import BackToTop from "@/components/BackToTop";
import { useAppContext } from "@/context"; // Get the context for isLoadingTranslations

export default function GlobalClientProviders({ children }) {
  const { isLoadingTranslations } = useAppContext(); // Get the loading state for the overlay

  return (
    <>
      {/*-- Pre-Loader --*/}
      <PreLoader />
      {/*-- Mouse Cursor  --*/}
      <MouseCursor />
      {/* Conditional Loading Overlay */}
      {isLoadingTranslations && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.95)", // Semi-transparent white overlay
            zIndex: 9999, // Ensure it's on top of everything
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "opacity 0.1s ease-out", // Very fast fade
            opacity: 1,
            pointerEvents: "none", // Allow clicks/hover through when faded out
          }}
        >
          {/* Optional: Add a simple spinner or text if you want */}
          {/* <div style={{ fontSize: '2em', color: '#333' }}>Loading...</div> */}
        </div>
      )}
      {/* All your main layout content goes inside this client boundary */}
      {/* This content will be covered by the overlay during language switch */}
      {/*-- Header Area  --*/}
      <Header />
      {/*-- Search Dropdown --*/}
      <SearchDropdown />
      {/*-- Off-canvas Area--*/}
      <OffCanvas />
      {children} {/* Your actual page content will be rendered here */}
      {/*-- Footer Area --*/}
      <Footer />
      {/*-- Footer Bottom Area --*/}
      <FooterBottom />
      {/*-- back to top start --*/}
      <BackToTop />
    </>
  );
}
