import teamImg1 from "@/assets/img/team/team-1.jpg";
import teamImg2 from "@/assets/img/team/team-2.jpg";
import teamImg3 from "@/assets/img/team/team-3.jpg";
import teamImg4 from "@/assets/img/team/team-4.jpg";

export default function TeamSectionOne() {
    return (
        <div className="team-section gray-bg section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 text-center">
                        <div className="section-title">
                            <h6>Our Team</h6>
                            <div className="heading-animation">
                                <h2>Professional Carpenters</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-40">
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="single-team-member">
                            <div className="team-bg">
                                <img src={teamImg1.src} alt=""/>
                            </div>
                            <div className="team-hover-info">
                                <div className="team-title">
                                    <h5>John Lewis</h5>
                                    <span>Carpenter</span>
                                </div>
                            </div>
                            <div className="social-icon">
                                <a href="#"><i className="lab la-facebook-f"></i></a>
                                <a href="#"><i className="lab la-instagram"></i></a>
                                <a href="#"><i className="lab la-linkedin-in"></i></a>
                                <a href="#"><i className="la la-skype"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-team-member">
                            <div className="team-bg">
                                <img src={teamImg2.src} alt=""/>
                            </div>
                            <div className="team-hover-info">
                                <div className="team-title">
                                    <h5>John Lewis</h5>
                                    <span>Carpenter</span>
                                </div>
                            </div>
                            <div className="social-icon">
                                <a href="#"><i className="lab la-facebook-f"></i></a>
                                <a href="#"><i className="lab la-instagram"></i></a>
                                <a href="#"><i className="lab la-linkedin-in"></i></a>
                                <a href="#"><i className="la la-skype"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="single-team-member">
                            <div className="team-bg">
                                <img src={teamImg3.src} alt=""/>
                            </div>
                            <div className="team-hover-info">
                                <div className="team-title">
                                    <h5>John Lewis</h5>
                                    <span>Carpenter</span>
                                </div>
                            </div>
                            <div className="social-icon">
                                <a href="#"><i className="lab la-facebook-f"></i></a>
                                <a href="#"><i className="lab la-instagram"></i></a>
                                <a href="#"><i className="lab la-linkedin-in"></i></a>
                                <a href="#"><i className="la la-skype"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="single-team-member">
                            <div className="team-bg">
                                <img src={teamImg4.src} alt=""/>
                            </div>
                            <div className="team-hover-info">
                                <div className="team-title">
                                    <h5>John Lewis</h5>
                                    <span>Carpenter</span>
                                </div>
                            </div>
                            <div className="social-icon">
                                <a href="#"><i className="lab la-facebook-f"></i></a>
                                <a href="#"><i className="lab la-instagram"></i></a>
                                <a href="#"><i className="lab la-linkedin-in"></i></a>
                                <a href="#"><i className="la la-skype"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}