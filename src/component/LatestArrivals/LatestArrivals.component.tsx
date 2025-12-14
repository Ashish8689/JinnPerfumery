'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './LatestArrivals.styles.css'
import { PRODUCT_LIST } from '@/constant/productList.constant'

const LatestArrivals: React.FC = () => {
    const latestProducts = useMemo(() => {
        return PRODUCT_LIST.filter((product) => product.isLatest)
    }, [])

    const calculateSavings = (original: number, sale: number): number => {
        return original - sale
    }

    const formatPrice = (price: number): string => {
        return `Rs. ${price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }

    return (
        <section className="latest-arrivals">
            <div className="latest-arrivals-container">
                <h2 className="latest-arrivals-title">Latest Arrivals</h2>
                <div className="arrivals-carousel">
                    <Swiper
                        loop
                        navigation
                        autoplay={{
                            delay: 3000,
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
                        className="arrivals-swiper"
                        modules={[Navigation, Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        slidesPerView={4}
                        spaceBetween={30}
                    >
                        {latestProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="arrival-card">
                                    <div className="arrival-image-container">
                                        <Image
                                            fill
                                            alt={product.name}
                                            className="arrival-image"
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                                            src={product.image}
                                        />
                                    </div>
                                    <div className="arrival-details">
                                        <h3 className="arrival-name">
                                            {product.name}
                                        </h3>
                                        <div className="arrival-pricing">
                                            <span className="original-price">
                                                {formatPrice(
                                                    product.originalPrice,
                                                )}
                                            </span>
                                            <span className="sale-price">
                                                {formatPrice(product.salePrice)}
                                            </span>
                                        </div>
                                        <p className="savings">
                                            Save{' '}
                                            {formatPrice(
                                                calculateSavings(
                                                    product.originalPrice,
                                                    product.salePrice,
                                                ),
                                            )}
                                        </p>
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

export default LatestArrivals
