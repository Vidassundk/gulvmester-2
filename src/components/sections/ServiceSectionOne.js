import serviceBg from "@/assets/img/service-bg.jpg";
import Link from "next/link";

export default function ServiceSectionOne() {
    return (
        <div className="service-section section-padding pb-90" style={{backgroundImage: `url(${serviceBg.src})`}}>
            <div className="overlay-5"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 text-center">
                        <div className="section-title">
                            <h6>Our Services</h6>
                            <div className="heading-animation">
                                <h2 className="text-white">We Craft What You Imagine</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-40">
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <i className="flaticon-sawing"></i>
                            </div>
                            <h5>Wood Furnitures</h5>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Sed euismod.</p>
                            <Link href="/services/details" className="read_more_link">
                                <span className="link_text">Read More</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <i className="flaticon-tree"></i>
                            </div>
                            <h5>Wood Utilities</h5>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Sed euismod.</p>
                            <Link href="/services/details" className="read_more_link">
                                <span className="link_text">Read More</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <i className="flaticon-toolbox"></i>
                            </div>
                            <h5>Custom Works</h5>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Sed euismod.</p>
                            <Link href="/services/details" className="read_more_link">
                                <span className="link_text">Read More</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <i className="flaticon-chisel"></i>
                            </div>
                            <h5>House Renovation</h5>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Sed euismod.</p>
                            <Link href="/services/details" className="read_more_link">
                                <span className="link_text">Read More</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <i className="flaticon-hammer"></i>
                            </div>
                            <h5>Wooden Floor</h5>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Sed euismod.</p>
                            <Link href="/services/details" className="read_more_link">
                                <span className="link_text">Read More</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="single-service-item">
                            <div className="service-icon">
                                <i className="flaticon-toolbox-1"></i>
                            </div>
                            <h5>Custom Cabin</h5>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Sed euismod.</p>
                            <Link href="/services/details" className="read_more_link">
                                <span className="link_text">Read More</span>
                                <span className="link_icon"><i className="las la-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}