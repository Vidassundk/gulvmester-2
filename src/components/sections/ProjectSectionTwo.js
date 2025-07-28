import projectImg21 from "@/assets/img/project/2-1.jpg";
import projectImg22 from "@/assets/img/project/2-2.jpg";
import projectImg23 from "@/assets/img/project/2-3.jpg";
import projectImg24 from "@/assets/img/project/2-4.jpg";
import Link from "next/link";

export default function ProjectSectionTwo() {
    return (
        <div className="project-section">
            <div className="row gx-0">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <Link href="/project/details" className="single-project-wrap big">
                        <img src={projectImg21.src} alt=""/>
                        <div className="details">
                            <div className="info">
                                <h5>Side Table</h5>
                                <h6>Shop Now</h6>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="row gx-0">
                        <div className="col-lg-6">
                            <Link href="/project/details" className="single-project-wrap small">
                                <img src={projectImg22.src} alt=""/>
                                <div className="details">
                                    <div className="info">
                                        <h5>Cozy Sofa</h5>
                                        <h6>Show Now</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link href="/project/details" className="single-project-wrap small">
                                <img src={projectImg23.src} alt=""/>
                                <div className="details">
                                    <div className="info">
                                        <h5>Loft Chair</h5>
                                        <h6>Shop Now</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-12 d-none d-lg-block">
                            <Link href="/project/details" className="single-project-wrap wide">
                                <img src={projectImg24.src} alt=""/>
                                <div className="details">
                                    <div className="info">
                                        <h5>Dinning Table</h5>
                                        <h6>Shop Now</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}