import aboutImage21 from "@/assets/img/about/2-1.jpg";
import Link from "next/link";

export default function AboutSectionTwo() {
    return (
        <div id="about-2" className="about-section dark-bg section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-img-wrap">
                            <img src={aboutImage21.src} alt=""/>
                            <div className="about-desc">
                                <h4>We make wood floors for you</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-content-wrap">
                            <div className="section-title">
                                <h6>About Us</h6>
                                <div className="heading-animation">
                                    <h2 className="text-white">Good <span>Flooring</span>, Thats What is Needed</h2>
                                </div>
                            </div>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                                consectetur voluptas, iusto natus animi non, doloremque quidem totam dolorum soluta
                                magnam consequuntur illo praesentium labore architecto rem maxime id est?</p>
                            <div className="about-feature">
                                <h4><span>#</span>General Carpentry</h4>
                                <h4><span>#</span>Flooring Service</h4>
                            </div>
                            <Link className="theme-btn mt-20" href="/about">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}