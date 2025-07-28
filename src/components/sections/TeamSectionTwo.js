import teamImg21 from "@/assets/img/team/2-1.jpg";
import teamImg22 from "@/assets/img/team/2-2.jpg";
import teamImg23 from "@/assets/img/team/2-3.jpg";
import teamImg24 from "@/assets/img/team/2-4.jpg";

export default function TeamSectionTwo() {
    return (
        <div className="team-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 text-center">
                        <div className="section-title">
                            <h6>Our Team</h6>
                            <div className="heading-animation">
                                <h2>Meet our designers</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-40">
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="single-team-wrap">
                            <div className="team-img">
                                <img src={teamImg21.src} alt=""/>
                            </div>
                            <div className="team-info">
                                <h5>Mark Hussain</h5>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-team-wrap">
                            <div className="team-img">
                                <img src={teamImg22.src} alt=""/>
                            </div>
                            <div className="team-info">
                                <h5>Collin Williams</h5>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="single-team-wrap">
                            <div className="team-img">
                                <img src={teamImg23.src} alt=""/>
                            </div>
                            <div className="team-info">
                                <h5>Justin Trudu</h5>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="single-team-wrap">
                            <div className="team-img">
                                <img src={teamImg24.src} alt=""/>
                            </div>
                            <div className="team-info">
                                <h5>Thomas Tuchel</h5>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}