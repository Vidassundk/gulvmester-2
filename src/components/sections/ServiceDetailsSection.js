import serviceFeatImg from "@/assets/img/services/service-feat-img.jpg";
import serviceDetailsImg1 from "@/assets/img/services/service-details-img-1.jpg";
import serviceDetailsImg2 from "@/assets/img/services/service-details-img-2.jpg";
import serviceDetailsImg3 from "@/assets/img/services/service-details-img-3.jpg";

export default function ServiceDetailsSection() {
    return (
        <div className="service-details-area section-padding">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-xl-8 col-lg-8">
                        <div className="service-details-wrap">
                            <div className="feature-img">
                                <img src={serviceFeatImg.src} alt=""/>
                            </div>
                            <p>Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse
                                id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit
                                volutpat, turpis enim volutpSectetur adipiscing elit, sed do eiusm onsectetur adipiscing
                                elit, sed do eiusm od tempor incididunt ut labore. Ut vel placerat eros, eu tincidunt
                                velit. Consectetur adipiscing elit, adipiscing elit, sed do.</p>
                            <h5>Sed ut perspiciatis unde omnis iste natus et</h5>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet.</p>
                            <p>Aliquam laoreet sed neque ac vehicula. Cras congue eros nec quam laoreet, in viverra erat
                                bibendum. Cras turpis urna, vulputate at est vitae, posuere lobortis erat.</p>
                            <div className="service-details-img">
                                <div className="row gy-5">
                                    <div className="col-md-6">
                                        <img src={serviceDetailsImg1.src} alt=""/>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={serviceDetailsImg2.src} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet.</p>
                            <h5>Aliquam quis lobortis quam</h5>
                            <p>Curabitur pellentesque odio magna, id malesuada arcu sodales ut. Sed sed quam ut ex
                                bibendum commodo id id magna. Aliquam sed ligula sed ante blandit volutpat. Ut bibendum,
                                nisi et mattis vulputate, odio arcu aliquet metus, nec dapibus risus risus quis
                                lectus.</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet.</p>
                            <div className="service-details-img">
                                <img src={serviceDetailsImg3.src} alt=""/>
                            </div>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="sidebar-wrap white-bg">
                            <div className="contact-form">
                                <h5>Get in Touch</h5>
                                <form action="#">
                                    <input type="text" placeholder="Name"/>
                                    <input type="email" placeholder="Email"/>
                                    <textarea name="message" id="message" cols="10" rows="10"
                                              placeholder="Message"></textarea>
                                    <input type="submit" value="Get In Touch"/>
                                </form>
                            </div>
                            <div className="contact-info">
                                <h5>Contact Info</h5>
                                <ul className="contact-list-item">

                                    <li><i className="las la-map-marker"></i>
                                        Germany — <br/>
                                        785 15h Street, Office 478 <br/>
                                        Berlin, De 81566
                                    </li>
                                    <li><i className="las la-envelope"></i>
                                        info@email.com
                                    </li>
                                    <li><i className="las la-phone"></i>
                                        +1 840 841 25 39
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}