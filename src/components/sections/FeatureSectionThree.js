import Link from "next/link";

export default function FeatureSectionThree() {
    return (
        <div className="feature-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".2s">
                        <div className="single-feature-wrap">
                            <div className="feat-num">
                                <span>01</span>
                            </div>
                            <h5>Planning</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nostrum ad animi natus
                                consequatur.</p>
                            <Link href="/services">Read More</Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-feature-wrap">
                            <div className="feat-num">
                                <span>02</span>
                            </div>
                            <h5>Exhibitions</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nostrum ad animi natus
                                consequatur.</p>
                            <Link href="/services">Read More</Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                        <div className="single-feature-wrap">
                            <div className="feat-num">
                                <span>03</span>
                            </div>
                            <h5>Realization</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nostrum ad animi natus
                                consequatur.</p>
                            <Link href="/services">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}