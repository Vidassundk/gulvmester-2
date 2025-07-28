import Link from "next/link";
import projectImg31 from "@/assets/img/project/3-1.jpg";
import projectImg32 from "@/assets/img/project/3-2.jpg";
import projectImg33 from "@/assets/img/project/3-3.jpg";
import projectImg34 from "@/assets/img/project/3-4.jpg";
import projectImg35 from "@/assets/img/project/3-5.jpg";
import projectImg36 from "@/assets/img/project/3-6.jpg";

export default function ProjectSectionThree() {
    return (
        <div className="project-section section-padding pb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-8">
                        <div className="section-title">
                            <h6>Recent Project</h6>
                            <div className="heading-animation">
                                <h2>All Types of Traditional <br/> Woodwork for Interiors</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-4 text-md-end">
                        <Link href="/project" className="theme-btn d-none d-md-inline-block">More Project</Link>
                    </div>
                </div>
                <div className="row mt-20">
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <Link href="/project/details" className="single-project-item">
                            <div className="project-img">
                                <img src={projectImg31.src} alt=""/>
                            </div>
                            <div className="project-content">
                                <h5>Wood Furnitures</h5>
                                <p>Sed eiusmod tempor incididunt </p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <Link href="/project/details" className="single-project-item">
                            <div className="project-img">
                                <img src={projectImg32.src} alt=""/>
                            </div>
                            <div className="project-content">
                                <h5>House Renovation</h5>
                                <p>Sed eiusmod tempor incididunt </p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <Link href="/project/details" className="single-project-item">
                            <div className="project-img">
                                <img src={projectImg33.src} alt=""/>
                            </div>
                            <div className="project-content">
                                <h5>Wooden Floor</h5>
                                <p>Sed eiusmod tempor incididunt </p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <Link href="/project/details" className="single-project-item">
                            <div className="project-img">
                                <img src={projectImg34.src} alt=""/>
                            </div>
                            <div className="project-content">
                                <h5>Wooden Furnitures</h5>
                                <p>Sed eiusmod tempor incididunt </p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <Link href="/project/details" className="single-project-item">
                            <div className="project-img">
                                <img src={projectImg35.src} alt=""/>
                            </div>
                            <div className="project-content">
                                <h5>General Carpentry</h5>
                                <p>Sed eiusmod tempor incididunt </p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <Link href="/project/details" className="single-project-item">
                            <div className="project-img">
                                <img src={projectImg36.src} alt=""/>
                            </div>
                            <div className="project-content">
                                <h5>Floor Installation</h5>
                                <p>Sed eiusmod tempor incididunt </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}