'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import './Testimonials.styles.css'
import Image from 'next/image'
import t1 from '@/assets/image/testimonials/t1.png'
import t2 from '@/assets/image/testimonials/t2.png'
import t3 from '@/assets/image/testimonials/t3.png'
import { testimonials } from '@/constant/testimonials.constant'

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                {/* <p className="testimonials-label">TESTIMONIALS</p> */}
                <h2 className="testimonials-title">Voices of Jinn Perfumery</h2>

                <div className="testimonials-badge">
                    <div className="badge-avatars">
                        <Image
                            alt="Customer"
                            className="badge-avatar"
                            height={40}
                            src={t1}
                            width={40}
                        />
                        <Image
                            alt="Customer"
                            className="badge-avatar"
                            height={40}
                            src={t2}
                            width={40}
                        />
                        <Image
                            alt="Customer"
                            className="badge-avatar"
                            height={40}
                            src={t3}
                            width={40}
                        />
                        <span className="badge-count">1L+</span>
                    </div>
                    <div className="badge-text">
                        <p>THEY BELIEVE IN US. ALL</p>
                        <p>100,000 OF THEM.</p>
                    </div>
                </div>

                <div className="testimonials-carousel">
                    <Swiper
                        loop
                        navigation
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        className="testimonials-swiper"
                        modules={[Navigation, Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        slidesPerView={4}
                        spaceBetween={30}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="testimonial-card text-card">
                                    <div className="quote-icon">&ldquo;</div>
                                    <p className="testimonial-content">
                                        {testimonial.content}
                                    </p>
                                    <div className="testimonial-author">
                                        <span>
                                            – {testimonial.customerName},{' '}
                                            {testimonial.location}
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
