'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import ctaImgBg from "@/assets/img/cta-bg.jpg";
import testimonialImg1 from "@/assets/img/testimonial/1.jpg";
import testimonialImg2 from "@/assets/img/testimonial/2.jpg";

export default function TestimonialSectionThree() {
    return (
        <div id="testimonial-3" className="testimonial-section" style={{backgroundImage: `url(${ctaImgBg.src})`}}>
            <div className="row">
                <div className="col-xl-7 col-lg-7">
                    <div className="testimonial-wrap dark-bg">
                        <div className="section-title">
                            <h6 className="text-white">Testimonial</h6>
                            <div className="heading-animation">
                                <h2 className="text-white">What People Say</h2>
                            </div>
                        </div>
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={1}
                            loop={true}
                            autoplay={false}
                            speed={3000} // smartSpeed equivalent
                            spaceBetween={30}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            className="testimonial-wrapper owl-carousel"
                        >
                            <SwiperSlide className="single-testimonial-item">

                                <div className="testimonial-content">
                                    <p className="text-white">Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                        voluptatem quia voluptas aspernatur aut odit aut fugit, sed. Beatae vitae dicta.
                                        Adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="testimonial-author">
                                    <img src={testimonialImg1.src} alt=""/>
                                    <h6 className="text-white">Paul Scholes <span>Manchester, UK</span></h6>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className="single-testimonial-item">
                                <div className="testimonial-content">
                                    <p className="text-white">Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                        voluptatem quia voluptas aspernatur aut odit aut fugit, sed. Beatae vitae dicta.
                                        Adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="testimonial-author">
                                    <img src={testimonialImg2.src} alt=""/>
                                    <h6 className="text-white">Lisa Ray <span>New York, USA</span></h6>
                                </div>

                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}