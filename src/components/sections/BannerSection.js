import Link from "next/link";
import bannerBg from "@/assets/img/banner.jpg";

export default function BannerSection() {
    return (
        <div className="banner-section">
            <div className="banner-bg" style={{ backgroundImage: `url(${bannerBg.src})`}}></div>
            <div className="banner-content-wrap">
                <p>Welcome to Carpent, a full service carpentry work and craftmans firm. We specialize
                    in creating beautiful, functional spaces that reflect your unique style and personality. Let
                    us help you transform your space into a work of art.</p>
                <Link href="/services" className="white-btn mt-20">Our Services</Link>
            </div>
        </div>
    )
}