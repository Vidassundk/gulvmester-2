import Link from "next/link";

export default function FaqSectionTwo() {
    return (
        <div className="faq-section section-padding pb-100 border-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-intro-wrap pr-60">
                            <div className="section-title">
                                <h6>FAQS</h6>
                                <div className="heading-animation">
                                    <h2>Frequently <span>Asked</span> Questions</h2>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor voluptatem ut assumenda
                                doloribus totam, corrupti nobis ea a inventore debitis maiores sed eum natus
                                consequuntur rerum nisi quos! Dolorum, consequuntur?</p>
                            <Link href="/contact" className="theme-btn mt-30 d-none d-lg-inline-block">Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="cp-custom-accordion">
                            <div className="accordions" id="accordionExample">
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-buttons" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            How do I order a custom product at Reywood?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                         aria-labelledby="headingOne"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi
                                            tempor pulvinar porttitor, velit neque iaculis leo, ac tincidunt enim nibh
                                            eu eros.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false"
                                                aria-controls="collapseTwo">
                                            What types of wood are available at Reywood?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwo"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi
                                            tempor pulvinar porttitor, velit neque iaculis leo, ac tincidunt enim nibh
                                            eu eros.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false"
                                                aria-controls="collapseThree">
                                            Do you accept orders for furniture in large quantities?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi
                                            tempor pulvinar porttitor, velit neque iaculis leo, ac tincidunt enim nibh
                                            eu eros.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour" aria-expanded="false"
                                                aria-controls="collapseFour">
                                            What payment methods do you provide?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                         aria-labelledby="headingFour"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi
                                            tempor pulvinar porttitor, velit neque iaculis leo, ac tincidunt enim nibh
                                            eu eros.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}