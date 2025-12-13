'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './HeroCarousel.styles.css'

interface HeroSlide {
    id: number
    image: string
    title: string
    subtitle?: string
    description?: string
    buttonText?: string
    buttonLink?: string
}

const heroSlides: HeroSlide[] = [
    {
        id: 1,
        image: '/carousel/slide1.jpg',
        title: 'SKINN',
        subtitle: 'HOLIDAY SALE',
        description: 'Flat 20% OFF*',
        buttonText: 'SHOP NOW',
        buttonLink: '#',
    },
    {
        id: 2,
        image: '/carousel/slide2.jpg',
        title: 'NEW ARRIVALS',
        subtitle: 'Discover Your Signature Scent',
        description: 'Exclusive Premium Perfumes',
        buttonText: 'EXPLORE NOW',
        buttonLink: '#',
    },
    {
        id: 3,
        image: '/carousel/slide3.jpg',
        title: 'LUXURY COLLECTION',
        subtitle: 'Experience Elegance',
        description: 'Curated Selection of Finest Fragrances',
        buttonText: 'VIEW COLLECTION',
        buttonLink: '#',
    },
    {
        id: 4,
        image: '/carousel/slide4.jpg',
        title: 'SPECIAL OFFER',
        subtitle: 'Limited Time Only',
        description: 'Get Up to 30% Off on Selected Items',
        buttonText: 'GRAB DEAL',
        buttonLink: '#',
    },
]

export default function HeroCarousel(): React.JSX.Element {
    return (
        <section className="hero-carousel-section">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                loop={true}
                speed={1000}
                className="hero-swiper"
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="hero-slide">
                            <div className="hero-image-container">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="hero-image"
                                />
                                <div className="hero-overlay" />
                            </div>
                            <div className="hero-content">
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
                                        href={slide.buttonLink}
                                        className="hero-button"
                                    >
                                        {slide.buttonText}
                                    </a>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
