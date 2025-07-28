"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import testimonial1 from "@/assets/img/testimonial/1.jpg";
import testimonial2 from "@/assets/img/testimonial/2.jpg";
import testimonial3 from "@/assets/img/testimonial/3.jpg";
import {useRef} from "react";

export default function TestimonialSectionOne() {
    const swiperRef = useRef(null);

    const goToNext = () => {
        swiperRef.current.swiper.slideNext(); // Go to the next slide
    };

    const goToPrev = () => {
        swiperRef.current.swiper.slidePrev(); // Go to the previous slide
    };

    return (
        <div id="testimonial-1" className="testimonial-section dark-bg section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-8 text-center">
                        <div className="section-title">
                            <h6>Testimonial</h6>
                            <div className="heading-animation">
                                <h2 className="text-white">We convince clients trust and loyalty</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-30">
                    <div className="col-xl-7 col-lg-7 text-center testimonial-wrapper">
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            speed={3000} // similar to smartSpeed
                            className="owl-carousel"
                        >
                            <SwiperSlide className="single-testimonial-item">
                                <div className="testimonial-content">
                                    <p className="text-white">Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                        voluptatem quia voluptas aspernatur aut odit aut fugit, sed. Beatae vitae dicta.
                                        Adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="testimonial-author">
                                    <img src={testimonial1.src} alt=""/>
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
                                    <img src={testimonial2.src} alt=""/>
                                    <h6 className="text-white">Jason Cambel <span>New York, USA</span></h6>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-testimonial-item">
                                <div className="testimonial-content">
                                    <p className="text-white">Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                        voluptatem quia voluptas aspernatur aut odit aut fugit, sed. Beatae vitae dicta.
                                        Adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="testimonial-author">
                                    <img src={testimonial3.src} alt=""/>
                                    <h6 className="text-white">Lisa Ray <span>New York, USA</span></h6>
                                </div>
                            </SwiperSlide>

                            <div className="owl-nav">
                                <button type="button" className="owl-prev position-unset z-99" onClick={goToPrev}>
                                    <i className="las la-arrow-left"></i>
                                </button>
                                <button type="button" className="owl-next position-unset z-99" onClick={goToNext}>
                                    <i className="las la-arrow-right"></i>
                                </button>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}