'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay, EffectFade} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import Link from "next/link";
import {useRef} from "react";

import sliderImg1 from "@/assets/img/slider/1.jpg";
import sliderImg2 from "@/assets/img/slider/2.jpg";
import sliderImg3 from "@/assets/img/slider/3.jpg";

export default function HeroSectionThree() {
    const swiperRef = useRef(null);

    const goToNext = () => {
        swiperRef.current.swiper.slideNext(); // Go to the next slide
    };

    const goToPrev = () => {
        swiperRef.current.swiper.slidePrev(); // Go to the previous slide
    };

    return (
        <>
            <div className="homepage-slides">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Autoplay, EffectFade]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    effect="fade"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            navigation: false,
                        },
                        600: {
                            slidesPerView: 1,
                            navigation: false,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1100: {
                            slidesPerView: 1,
                        },
                    }}
                    id="home-3"
                    className=" owl-carousel"
                >
                    <SwiperSlide className="single-slide-item d-flex align-items-center"
                                 style={{backgroundImage: `url(${sliderImg1.src})`}}>
                        <div className="overlay-5"></div>
                        <div className="hero-area-content">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-7 col-lg-8 col-md-8 wow fadeInUp animated" data-wow-delay=".2s">
                                        <div className="section-title">
                                            <h6>Carpentry Solutions</h6>
                                            <h1 className="text-white">Natural Purity from The
                                                Perfect <span>Interior</span> Design</h1>
                                        </div>
                                        <p className="text-white">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien
                                            lacus. Etiam molestie justo neque, in convallis massa tempus in.</p>
                                        <Link href="/about" className="theme-btn mt-40">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-slide-item d-flex align-items-center"
                                 style={{backgroundImage: `url(${sliderImg2.src})`}}>
                        <div className="overlay-5"></div>
                        <div className="hero-area-content">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-7 col-lg-8 col-md-8 wow fadeInUp animated" data-wow-delay=".2s">
                                        <div className="section-title">
                                            <h6>Smart Solutions</h6>
                                            <h1 className="text-white">Navigating Business
                                                Challenge <span>Delivering</span> Results </h1>
                                        </div>
                                        <p className="text-white">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien
                                            lacus. Etiam molestie justo neque, in convallis massa tempus in.</p>
                                        <Link href="/about" className="theme-btn mt-40">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-slide-item d-flex align-items-center"
                                 style={{backgroundImage: `url(${sliderImg3.src})`}}>
                        <div className="overlay-5"></div>
                        <div className="hero-area-content">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-7 col-lg-8 col-md-8 wow fadeInUp animated" data-wow-delay=".2s">
                                        <div className="section-title">
                                            <h6>Smart Solutions</h6>
                                            <h1 className="text-white">Navigating Business
                                                Challenge <span>Delivering</span> Results </h1>
                                        </div>
                                        <p className="text-white">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien
                                            lacus. Etiam molestie justo neque, in convallis massa tempus in.</p>
                                        <Link href="/about" className="theme-btn mt-40">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="owl-nav">
                        <button type="button" role="presentation" className="owl-prev z-99" onClick={goToPrev}><i className="las la-arrow-left"></i></button>
                        <button type="button" role="presentation" className="owl-next z-99" onClick={goToNext}><i className="las la-arrow-right"></i></button>
                    </div>
                </Swiper>
            </div>
        </>
    )
}