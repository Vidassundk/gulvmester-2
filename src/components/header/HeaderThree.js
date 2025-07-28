"use client";

import Link from "next/link";
import whiteLogo from "@/assets/img/logo-white.png";
import MainMenu from "@/components/header/MainMenu";
import MobileMenu from "@/components/header/MobileMenu";
import {useEffect} from "react";
import headerSticky from "@/lib/helper";
import {useAppContext} from "@/context";

export default function HeaderThree() {
    const {openSearch, openOffcanvas} = useAppContext();

    useEffect(() => {
        headerSticky();
    }, []);

    return (
        <div className="header-area absolute-header">
            <div id="header-sticky">
                <div className="navigation">
                    <div className="container-fluid">
                        <div className="header-inner-box">

                            {/*-- Logo --*/}
                            <div className="logo">
                                <Link className="navbar-brand" href="/">
                                    <img src={whiteLogo.src}
                                         alt=""/>
                                </Link>
                            </div>

                            {/*-- Main Menu  --*/}
                            <MainMenu />

                            <div className="header-right">

                                {/*-- Search Button  --*/}
                                <div className="search-trigger" onClick={openSearch}>
                                    <i className="fal fa-search"></i>
                                </div>
                                <div className="contact-number d-none">
                                    <div className="icon"><i className="las la-phone-volume"></i></div>
                                    <div className="title"><h4>1 800 458 56 97</h4></div>
                                </div>
                                {/*-- Header Button --*/}
                                <div className="header-btn">
                                    <div className="menu-trigger" onClick={openOffcanvas}>
                                        <span className="lines"></span>
                                        <span className="lines"></span>
                                        <span className="lines"></span>
                                    </div>
                                </div>

                            </div>
                            {/*-- Mobile Menu --*/}
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}