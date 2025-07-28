import logoWhite from "@/assets/img/logo-white.png";
import Link from "next/link";

export default function FooterTwo() {
    return (
        <footer className="footer-area footer-two">
            <div className="container">
                <div className="footer-up">
                    <div className="row gy-5">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link href="/" className="logo">
                                <img src={logoWhite.src} alt="carpent-logo"/>
                            </Link>
                            <p className="text-white">We provide the best carpentery services <br/> to deliver wood
                                works. Craftsman services <br/> highly customized.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5>Office</h5>
                            <p className="text-white">Corporate Office- <br/>
                                175 24th Street, OT- 35
                                London, UK 265
                            </p>
                            <div className="company-email">
                                <a href="#">info@carpent.com</a>
                            </div>
                            <div className="phone-number">
                                <p>+18-4675826</p>
                            </div>

                        </div>
                        <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
                            <h5>Links</h5>
                            <ul>
                                <li>
                                    <Link href="/about">About</Link>
                                    <Link href="/services">Services</Link>
                                    <Link href="/project">Projects</Link>
                                    <Link href="/price">Pricing</Link>
                                    <Link href="/faq"> FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h5>Get in Touch</h5>
                            <ul>
                                <li>
                                    <div className="social-area">
                                        <a href="#"><i className="lab la-facebook-f"></i>Facebook</a>
                                        <a href="#"><i className="lab la-instagram"></i>Instagram</a>
                                        <a href="#"><i className="lab la-linkedin-in"></i>linkedin</a>
                                        <a href="#"><i className="la la-skype"></i>Skype</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}