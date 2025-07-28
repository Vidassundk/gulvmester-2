import aboutImg3 from "@/assets/img/about/3.jpg";
import Link from "next/link";

export default function AboutSectionThree({ customClass }) {
    return (
        <div id="about-3" className={`about-section section-padding ${customClass}`}>
            <div className="container">
                <div className="row gx-lg-5">
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="about-img-wrap">
                            <img src={aboutImg3.src} alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-content-wrap">
                            <div className="section-title">
                                <h6>About Carpent</h6>
                                <div className="heading-animation">
                                    <h2>Brighten Every Nook <br/> and <span>Corner</span> of Your House</h2>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi tempor
                                pulvinar porttitor, velit neque iaculis leo, ac tincidunt enim nibh eu eros. Mauris
                                cursus, ex nec convallis sodales.</p>
                            <div className="about-list-item">
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i>Professional Worker</li>
                                    <li><i className="fa-solid fa-circle-check"></i>Trusted Company</li>
                                    <li><i className="fa-solid fa-circle-check"></i>Best Quality Materials</li>
                                    <li><i className="fa-solid fa-circle-check"></i>Affordable Price</li>
                                </ul>
                            </div>
                            <Link href="/about" className="theme-btn mt-20">Learn More</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}