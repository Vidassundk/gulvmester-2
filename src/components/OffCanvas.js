"use client";

import logoWhite from "@/assets/img/logo-white.png";
import offcanvasImg from "@/assets/img/offcanvas-img.jpg";
import Link from "next/link";
import {useAppContext} from "@/context";

export default function OffCanvas() {
    const {isOffcanvasOpen, closeOffcanvas} = useAppContext();

    return (
        <>
            <div className={`extra-info ${isOffcanvasOpen ? 'active' : ''}`}>
            <div className="close-icon menu-close">
                    <button onClick={closeOffcanvas}>
                        <i className="las la-times"></i>
                    </button>
                </div>
                <div className="logo-side">
                    <div className="logo">
                        <img src={logoWhite.src} alt=""/>
                    </div>
                </div>
                <div className="side-info">
                    <div className="contact-list mb-40">
                        <p>Welcome to Carpent, a full service carpentry and wood working firm. We specialize in creating
                            spaces.</p>
                        <img src={offcanvasImg.src} alt=""/>

                        <div className="mt-30 mb-30">
                            <Link href="/contact" className="theme-btn">Get In Touch</Link>
                        </div>
                    </div>
                    <div className="social-area-wrap">
                        <a href="#"><i className="lab la-facebook-f"></i></a>
                        <a href="#"><i className="lab la-instagram"></i></a>
                        <a href="#"><i className="lab la-linkedin-in"></i></a>
                        <a href="#"><i className="lab la-skype"></i></a>
                    </div>
                </div>
            </div>

            <div className={`offcanvas-overlay ${isOffcanvasOpen ? 'active' : ''}`} onClick={closeOffcanvas}></div>
        </>
    )
}