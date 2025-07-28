"use client";

import { useEffect, useRef, useState } from "react";

export default function BackToTop() {
    const pathRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        const totalLength = path.getTotalLength();

        // Initial setup for the SVG path
        path.style.transition = "none";
        path.style.strokeDasharray = `${totalLength} ${totalLength}`;
        path.style.strokeDashoffset = totalLength;
        path.getBoundingClientRect(); // Trigger layout
        path.style.transition = "stroke-dashoffset 10ms linear";

        // Scroll event to update stroke offset
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalLength - (scrollTop * totalLength) / docHeight;
            path.style.strokeDashoffset = progress;

            // Toggle "active-progress" class based on scroll position
            setIsActive(scrollTop > 50);
        };

        window.addEventListener("scroll", updateProgress);
        updateProgress();

        return () => {
            window.removeEventListener("scroll", updateProgress);
        };
    }, []);

    // Scroll to top behavior
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div
                className={`progress-wrap ${isActive ? "active-progress" : ""}`}
                onClick={scrollToTop}
            >
                <svg
                    className="progress-circle svg-content"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                >
                    <path
                        ref={pathRef}
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    />
                </svg>
            </div>
        </>
    );
}
