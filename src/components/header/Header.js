"use client";

import {usePathname} from "next/navigation";
import HeaderTwo from "@/components/header/HeaderTwo";
import HeaderThree from "@/components/header/HeaderThree";
import HeaderOne from "@/components/header/HeaderOne";

export default function Header() {
    const pathname = usePathname();

    if (pathname === '/home-2') {
        return <HeaderTwo />;
    }
    if (pathname === '/home-3') {
        return <HeaderThree />;
    }

    // Default to HeaderOne for all other pages including home one
    return <HeaderOne />;
}