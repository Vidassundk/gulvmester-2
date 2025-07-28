import serviceImg1 from "@/assets/img/services/1.png";
import serviceImg2 from "@/assets/img/services/2.png";
import serviceImg3 from "@/assets/img/services/3.png";
import serviceImg4 from "@/assets/img/services/4.png";
import serviceImg5 from "@/assets/img/services/5.png";
import serviceImg6 from "@/assets/img/services/6.png";
import serviceImg from "@/assets/img/service-img.jpg";

export default function FeatureSectionTwo() {
    return (
        <div id="feature-2" className="feature-section section-padding pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 order-2 order-lg-1">
                        <div className="row feature-wrap">
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-feature-wrap">
                                    <div className="feature-icon">
                                        <img src={serviceImg1.src} alt=""/>
                                    </div>
                                    <h5>Eco Friendly</h5>
                                    <p>Lorem ipsum dolor sit amet consec adipisicing elit</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-feature-wrap">
                                    <div className="feature-icon">
                                        <img src={serviceImg2.src} alt=""/>
                                    </div>
                                    <h5>Designing</h5>
                                    <p>Lorem ipsum dolor sit amet consec adipisicing elit</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="single-feature-wrap">
                                    <div className="feature-icon">
                                        <img src={serviceImg3.src} alt=""/>
                                    </div>
                                    <h5>Residential</h5>
                                    <p>Lorem ipsum dolor sit amet consec adipisicing elit</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-feature-wrap">
                                    <div className="feature-icon">
                                        <img src={serviceImg4.src} alt=""/>
                                    </div>
                                    <h5>Best Material</h5>
                                    <p>Lorem ipsum dolor sit amet consec adipisicing elit</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-feature-wrap">
                                    <div className="feature-icon">
                                        <img src={serviceImg5.src} alt=""/>
                                    </div>
                                    <h5>Maintenance</h5>
                                    <p>Lorem ipsum dolor sit amet consec adipisicing elit</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="single-feature-wrap">
                                    <div className="feature-icon">
                                        <img src={serviceImg6.src} alt=""/>
                                    </div>
                                    <h5>Finishing</h5>
                                    <p>Lorem ipsum dolor sit amet consec adipisicing elit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 order-1 order-lg-2">
                        <div className="feature-intro-wrap">
                            <div className="section-title">
                                <h6>Core Feature</h6>
                                <div className="heading-animation">
                                    <h2>Flooring The <span>Earth</span></h2>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, aliquam
                                similique. Nam quidem laboriosam repellat dolores fuga esse incidunt reiciendis?</p>
                            <div className="feature-img-wrap mt-30 wow fadeInUp" data-wow-delay=".2s">
                                <img src={serviceImg.src} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}