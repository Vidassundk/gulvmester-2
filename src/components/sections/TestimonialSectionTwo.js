'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import testimonialImg2 from "@/assets/img/testimonial/2-1.jpg";
import testimonialImg1 from "@/assets/img/testimonial/1.jpg";
import testimonialImg22 from "@/assets/img/testimonial/2.jpg";
import testimonialImg3 from "@/assets/img/testimonial/3.jpg";
import testimonialImg4 from "@/assets/img/testimonial/4.jpg";

export default function TestimonialSectionTwo() {
    return (
        <div id="testimonial-2" className="testimonial-section section-padding pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-5">
                        <div className="section-title">
                            <h6>Testimonials</h6>
                            <div className="heading-animation">
                                <h2>Sweet <span>reviews</span> from <br/> our clients</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-30">
                    <div className="testimonial-wrap">
                        <div className="testimonial-thumb">
                            <img src={testimonialImg2.src} alt=""/>
                        </div>
                        <div className="testimonial-content">
                            <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consectetur a magni
                                necessitatibus sit maxime, esse, similique, obcaecati exercitationem nesciunt facilis
                                magnam alias? Sapiente consequatur sequi eos enim sint placeat."</p>
                            <h5>Martin Smith</h5>
                            <h6>Manager, Alfa Inc.</h6>
                        </div>
                    </div>
                </div>
                <div className="row mt-60 testimonial-slider">
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        loop={true}
                        autoplay={false} // Change to `{ delay: 5000 }` if you want autoplay
                        speed={3000}
                        spaceBetween={30}
                        pagination={{clickable: true}}
                        navigation={false}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            600: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1100: {
                                slidesPerView: 3,
                            },
                        }}
                        className=" owl-carousel"
                    >
                        <SwiperSlide className="single-testimonial wow fadeInUp" data-wow-delay=".2s">
                            <div className="testimonial-text">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit magni odit earum iure
                                    exercitationem, ex maiores blanditiis expedita dolorem perferendis fuga voluptatem
                                    possimus quos sequi temporibus numquam natus veniam illo!</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-img">
                                    <img src={testimonialImg1.src} alt=""/>
                                </div>
                                <div className="author-info">
                                    <h5>Scarlet Smith</h5>
                                    <h6>Worker</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="single-testimonial wow fadeInUp" data-wow-delay=".4s">
                            <div className="testimonial-text">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit magni odit earum iure
                                    exercitationem, ex maiores blanditiis expedita dolorem perferendis fuga voluptatem
                                    possimus quos sequi temporibus numquam natus veniam illo!</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-img">
                                    <img src={testimonialImg22.src} alt=""/>
                                </div>
                                <div className="author-info">
                                    <h5>Scarlet Smith</h5>
                                    <h6>Worker</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="single-testimonial wow fadeInUp" data-wow-delay=".6s">
                            <div className="testimonial-text">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit magni odit earum iure
                                    exercitationem, ex maiores blanditiis expedita dolorem perferendis fuga voluptatem
                                    possimus quos sequi temporibus numquam natus veniam illo!</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-img">
                                    <img src={testimonialImg3} alt=""/>
                                </div>
                                <div className="author-info">
                                    <h5>Scarlet Smith</h5>
                                    <h6>Worker</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="single-testimonial">
                            <div className="testimonial-text">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit magni odit earum iure
                                    exercitationem, ex maiores blanditiis expedita dolorem perferendis fuga voluptatem
                                    possimus quos sequi temporibus numquam natus veniam illo!</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-img">
                                    <img src={testimonialImg4.src} alt=""/>
                                </div>
                                <div className="author-info">
                                    <h5>Scarlet Smith</h5>
                                    <h6>Worker</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}