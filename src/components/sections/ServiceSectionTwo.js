import Link from "next/link";
import serviceImg1 from "@/assets/img/services/1.jpg";
import serviceImg2 from "@/assets/img/services/2.jpg";
import serviceImg3 from "@/assets/img/services/3.jpg";

export default function ServiceSectionTwo() {
    return (
        <div id="service-2" className="service-section section-padding pt-0 pb-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 text-center">
                        <div className="section-title">
                            <h6>Our Service</h6>
                            <div className="heading-animation">
                                <h2>We Offer Cost Efficient <br/>
                                    <span>Carpentry</span> Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-40">
                    <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".2s">
                        <div className="single-serv-item">
                            <div className="service-bg">
                                <div className="service-icon">
                                    <i className="flaticon-carpenter"></i>
                                </div>
                                <img src={serviceImg1.src} alt=""/>
                            </div>
                            <div className="service-info">
                                <h5>House Renovation</h5>
                                <Link href="/services" className="details-icon"><i
                                    className="fa-light fa-arrow-right-long"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-serv-item">
                            <div className="service-bg">
                                <div className="service-icon">
                                    <i className="flaticon-pencil"></i>
                                </div>
                                <img src={serviceImg2.src} alt=""/>
                            </div>
                            <div className="service-info">
                                <h5>Furniture Remodeling</h5>
                                <Link href="/services/details" className="details-icon"><i
                                    className="fa-light fa-arrow-right-long"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                        <div className="single-serv-item">
                            <div className="service-bg">
                                <div className="service-icon">
                                    <i className="flaticon-tree"></i>
                                </div>
                                <img src={serviceImg3.src} alt=""/>
                            </div>
                            <div className="service-info">
                                <h5>General Carpentry</h5>
                                <Link href="/services" className="details-icon"><i
                                    className="fa-light fa-arrow-right-long"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}