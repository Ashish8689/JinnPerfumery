'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import './HeroCarousel.styles.css'
import Image from 'next/image'
import { HERO_SLIDES } from '@/constant/banner.constant'

export default function HeroCarousel(): React.JSX.Element {
    return (
        <section className="hero-carousel-section">
            <Swiper
                loop
                navigation
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="hero-swiper"
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                pagination={{ clickable: true }}
                speed={1000}
            >
                {HERO_SLIDES.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="hero-slide">
                            <div className="hero-image-container">
                                <Image
                                    fill
                                    priority
                                    alt={slide.title}
                                    className="hero-image"
                                    src={slide.image}
                                />
                                <div className="hero-overlay" />
                            </div>
                            {/* <div className="hero-content">
                                <h1 className="hero-title">{slide.title}</h1>
                                {slide.subtitle && (
                                    <h2 className="hero-subtitle">
                                        {slide.subtitle}
                                    </h2>
                                )}
                                {slide.description && (
                                    <p className="hero-description">
                                        {slide.description}
                                    </p>
                                )}
                                {slide.buttonText && (
                                    <a
                                        className="hero-button"
                                        href={slide.buttonLink}
                                    >
                                        {slide.buttonText}
                                    </a>
                                )}
                            </div> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
