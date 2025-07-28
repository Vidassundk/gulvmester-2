"use client";

import Link from "next/link";
import logoWhite from "@/assets/img/logo-white.png";
import {useAppContext} from "@/context";

export default function SearchDropdown() {
    const {closeSearch} = useAppContext();

    return (
        <div className={`search-popup`}>
            <span className="search-back-drop" onClick={closeSearch}></span>

            <div className="search-inner">
                <div className="container">
                    <div className="logo">
                        <Link className="navbar-brand" href="/">
                            <img src={logoWhite.src} alt=""/>
                        </Link>
                    </div>
                    <button className="close-search" onClick={closeSearch}><span className="la la-times"></span></button>
                    <form method="post" action="#">
                        <div className="form-group">
                            <input type="search" name="search-field" placeholder="Type your keyword"
                                   required=""/>
                            <button type="submit"><i className="fal fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}