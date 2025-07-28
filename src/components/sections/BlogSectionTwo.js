import BlogRowSection from "@/components/sections/BlogRowSection";

export default function BlogSectionTwo() {
    return (
        <div className="blog-section section-padding pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 text-center">
                        <div className="section-title">
                            <h6>Blog & News</h6>
                            <div className="heading-animation">
                                <h2>Ideas About <span>Creation</span> & Decoration</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <BlogRowSection />
            </div>
        </div>
    )
}