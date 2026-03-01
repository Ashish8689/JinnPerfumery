'use client'

import React, { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import './LatestArrivals.styles.css'
import { PRODUCT_LIST } from '@/constant/productList.constant'
import ProductCard from '../ProductCard/ProductCard.component'

const LatestArrivals: React.FC = () => {
    const latestProducts = useMemo(() => {
        return PRODUCT_LIST.filter((product) => product.isLatest)
    }, [])

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
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default LatestArrivals
