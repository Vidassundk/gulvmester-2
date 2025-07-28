import blogImg1 from "@/assets/img/blog/1-1.jpg";
import blogImg2 from "@/assets/img/blog/1-2.jpg";
import blogImg3 from "@/assets/img/blog/1-3.jpg";
import Link from "next/link";

export default function BlogRowSection() {
    return (
        <div className="row gx-4 mt-30">
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <Link href="/blog/details" className="single-blog-item">
                    <div className="blog-img">
                        <img src={blogImg1.src} alt=""/>
                    </div>
                    <div className="blog-content">
                        <div className="blog-meta">
                            <span>July 30 2024</span>
                        </div>
                        <div className="blog-title">
                            <h4>Top 10-contemporary trends in wooden furnishings</h4>
                        </div>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <span className="link_icon"><i className="las la-arrow-right"></i></span>
                    </div>
                </Link>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <Link href="/blog/details" className="single-blog-item">
                    <div className="blog-img">
                        <img src={blogImg2.src} alt=""/>
                    </div>
                    <div className="blog-content">
                        <div className="blog-meta">
                            <span>July 14 2024</span>
                        </div>
                        <div className="blog-title">
                            <h4>Custom design of eco-friendly wooden furniture</h4>
                        </div>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <span className="link_icon"><i className="las la-arrow-right"></i></span>
                    </div>
                </Link>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                <Link href="/blog/details" className="single-blog-item">
                    <div className="blog-img">
                        <img src={blogImg3.src} alt=""/>
                    </div>
                    <div className="blog-content">
                        <div className="blog-meta">
                            <span>July 8 2024</span>
                        </div>
                        <div className="blog-title">
                            <h4>From forest to furnishing: the story of solid wood</h4>
                        </div>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <span className="link_icon"><i className="las la-arrow-right"></i></span>
                    </div>
                </Link>
            </div>
        </div>
    )
}