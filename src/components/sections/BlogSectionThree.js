import blogImg1 from "@/assets/img/blog/1-1.jpg";
import blogImg2 from "@/assets/img/blog/1-2.jpg";
import blogImg3 from "@/assets/img/blog/1-3.jpg";
import blogImg4 from "@/assets/img/blog/1-4.jpg";
import blogImg5 from "@/assets/img/blog/1-5.jpg";
import blogImg6 from "@/assets/img/blog/1-6.jpg";
import Link from "next/link";

export default function BlogSectionThree() {
    return (
        <div className="blog-section section-padding  pb-90">
            <div className="container">
                <div className="row gx-4">
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <Link href="/blog/details" className="single-blog-item">
                            <div className="blog-img">
                                <img src={blogImg1.src} alt=""/>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span>November 30 2023</span>
                                </div>
                                <div className="blog-title">
                                    <h4>How to start a metal fabrication business</h4>
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
                                    <span>November 14 2023</span>
                                </div>
                                <div className="blog-title">
                                    <h4>The most profitable metal business ideas</h4>
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
                                    <span>November 8 2023</span>
                                </div>
                                <div className="blog-title">
                                    <h4>What metal is a good investment right now?</h4>
                                </div>
                                <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <Link href="/blog/details" className="single-blog-item">
                            <div className="blog-img">
                                <img src={blogImg4.src} alt=""/>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span>November 30 2023</span>
                                </div>
                                <div className="blog-title">
                                    <h4>How to start a metal fabrication business</h4>
                                </div>
                                <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <Link href="/blog/details" className="single-blog-item">
                            <div className="blog-img">
                                <img src={blogImg5.src} alt=""/>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span>November 14 2023</span>
                                </div>
                                <div className="blog-title">
                                    <h4>The most profitable metal business ideas</h4>
                                </div>
                                <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </div>
                        </Link>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <Link href="/blog/details" className="single-blog-item">
                            <div className="blog-img">
                                <img src={blogImg6.src} alt=""/>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span>November 8 2023</span>
                                </div>
                                <div className="blog-title">
                                    <h4>What metal is a good investment right now?</h4>
                                </div>
                                <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <ul className="pagination d-flex justify-content-center">
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item" aria-current="page"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#"><i
                            className="las la-angle-right"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}