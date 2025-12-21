'use client'

import React, { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import ProductCard from '../ProductCard/ProductCard.component'
import { TableTypeEnum, TabType } from './types'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './BestSeller.css'
import { Product, PRODUCT_LIST } from '@/constant/productList.constant'
import { Category } from '@/constant/common.constant'

const BestSeller: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>(TableTypeEnum.him)

    const productData = useMemo(() => {
        return PRODUCT_LIST.reduce(
            (acc, cv): Record<TableTypeEnum, Product[]> => {
                if (cv.category === Category.Men) {
                    acc[TableTypeEnum.him].push(cv)
                } else if (cv.category === Category.Women) {
                    acc[TableTypeEnum.her].push(cv)
                } else {
                    acc[TableTypeEnum.unisex].push(cv)
                }

                return acc
            },
            {
                [TableTypeEnum.him]: [],
                [TableTypeEnum.her]: [],
                [TableTypeEnum.unisex]: [],
            },
        )
    }, [])

    return (
        <section className="bestseller-section">
            <div className="bestseller-container">
                <h2 className="bestseller-title">OUR BESTSELLERS</h2>

                <div className="tabs-container">
                    {Object.values(TableTypeEnum).map((tab) => (
                        <button
                            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="products-swiper-container">
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
                        {productData[activeTab].map((product) => (
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

export default BestSeller
