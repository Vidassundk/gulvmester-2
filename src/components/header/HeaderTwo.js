"use client";

import HeaderTop from "@/components/header/HeaderTop";
import MainMenu from "@/components/header/MainMenu";
import Link from "next/link";
import MobileMenu from "@/components/header/MobileMenu";
import logo from "@/assets/img/logo.png";
import {useEffect} from "react";
import headerSticky from "@/lib/helper";
import {useAppContext} from "@/context";

export default function HeaderTwo() {
    const {openSearch} = useAppContext();

    useEffect(() => {
        headerSticky();
    }, []);

    return (
        <div id="header-sticky">

            {/*-- Header Top Area --*/}
            <HeaderTop/>

            {/*-- Header Area --*/}
            <div className="header-area header-two">
                <div className="navigation">
                    <div className="container-fluid">
                        <div className="header-inner-box">

                            {/*-- Logo --*/}
                            <div className="logo">
                                <Link className="navbar-brand" href="/">
                                    <img src={logo.src} alt=""/>
                                </Link>
                            </div>

                            {/*-- Main Menu  --*/}
                            <MainMenu/>

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
                                <Link href="/contact" className="theme-btn d-none d-lg-inline-block">Get Started</Link>

                            </div>
                            {/*-- Mobile Menu --*/}
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}