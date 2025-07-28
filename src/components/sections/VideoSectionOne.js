"use client";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {useEffect} from "react";

export default function VideoSectionOne() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox2]", {
            Thumbs: false, // Disable thumbnails
            Toolbar: true, // Show toolbar
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <div className="video-section">
            <div className="overlay"></div>
            <div className="video-inner-box">
                <div className="play-btn">
                    <a data-fancybox2 href="https://www.youtube.com/watch?v=ENSjcy3eh8U" className="video-play-btn mfp-iframe"><i
                        className="fa-solid fa-play"></i></a>
                </div>
            </div>
        </div>
    )
}