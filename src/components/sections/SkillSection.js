import Link from "next/link";
import ProgressBarComponent from "@/components/ProgressBarComponent";

export default function SkillSection() {
    return (
        <div className="skill-section gray-bg section-padding">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xl-6 col-lg-6 col-md-7">
                        <div className="skill-content-wrap">
                            <div className="section-title">
                                <h6>Our Skills</h6>
                                <div className="heading-animation">
                                    <h2>Solutions to Every Wood Product</h2>
                                </div>
                            </div>
                            <p>Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad
                                minim veniam, quisq wiusmod ut tempor incididunt ut labore et dolore sed do magna
                                aliqua.</p>
                            <Link href="/contact" className="theme-btn mt-30">Get Started</Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-5">
                        <div className="progress-bar-area">
                            <ProgressBarComponent title="Furnitures" percentage={90} barColor="#C5853A" />
                            <ProgressBarComponent title="Crafting" percentage={70} barColor="#C5853A" />
                            <ProgressBarComponent title="Renovation" percentage={80} barColor="#C5853A" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}