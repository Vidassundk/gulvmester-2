import Link from "next/link";
import BlogRowSection from "@/components/sections/BlogRowSection";

export default function BlogSectionOne() {
    return (
        <div className="blog-section section-padding  pb-90">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="section-title">
                            <h6>Blog & News</h6>
                            <div className="heading-animation">
                                <h2>Our Latest Articles</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 text-lg-end">
                        <Link href="/blog" className="theme-btn d-none d-lg-inline-block">View More</Link>
                    </div>
                </div>
                <BlogRowSection />
            </div>
        </div>
    )
}