"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import clientImg1 from "@/assets/img/client/1.jpg";
import clientImg2 from "@/assets/img/client/2.jpg";
import clientImg3 from "@/assets/img/client/3.jpg";
import clientImg4 from "@/assets/img/client/4.jpg";
import clientImg5 from "@/assets/img/client/5.jpg";
import clientImg6 from "@/assets/img/client/6.jpg";

export default function ClientsSectionOne({customClass}) {
    return (
        <div className={`client-section pb-60 ${customClass}`}>
            <div className="container">
                <div className="row mt-40">
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        spaceBetween={30}
                        speed={500}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={5}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1100: {
                                slidesPerView: 5,
                            },
                        }}
                        grabCursor={true}
                        className="client-wrap owl-carousel"
                    >
                        <SwiperSlide className="clients-img-inner">
                            <img src={clientImg1.src} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="clients-img-inner">
                            <img src={clientImg2.src} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="clients-img-inner">
                            <img src={clientImg3.src} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="clients-img-inner">
                            <img src={clientImg4.src} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="clients-img-inner">
                            <img src={clientImg5.src} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide className="clients-img-inner">
                            <img src={clientImg6.src} alt=""/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}