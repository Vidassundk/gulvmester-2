"use client";

import {usePathname} from "next/navigation";
import FooterTwo from "@/components/footer/FooterTwo";
import FooterOne from "@/components/footer/FooterOne";

export default function Footer() {
    const pathname = usePathname();

    if (pathname === '/home-2') {
        return <FooterTwo />;
    }

    // Default to FooterOne for all other pages including home one
    return <FooterOne />;
}