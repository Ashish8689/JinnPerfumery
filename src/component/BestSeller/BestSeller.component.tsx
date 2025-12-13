'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import ProductCard, { Product } from '../ProductCard/ProductCard.component'
import { TabType } from './types'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './BestSeller.css'

const BestSeller: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('FOR HIM')

    // Sample data - replace with your actual data
    const productsData: Record<TabType, Product[]> = {
        'FOR HIM': [
            {
                id: '1',
                name: 'TSUNARA',
                subtitle: 'Extrait De Parfum',
                image: '/images/products/tsunara.jpg',
                description: 'Marine, Beastly, Clean, Woody',
                notes: "A potent freshie that's violent like a Tsunami",
                volume: '50ml',
                price: 'Rs.6090',
                badge: {
                    text: 'ARGUABLY THE\nLONGEST-LASTING\nFRESHIE ON THE PLANET\n-Forbes',
                    position: 'top-left',
                },
            },
            {
                id: '2',
                name: 'MILKY WAY',
                subtitle: 'Extrait De Parfum',
                image: '/images/products/milky-way.jpg',
                description: 'Lactonic, woody, gourmand',
                notes: 'Arguably the longest lasting cardamom perfume',
                volume: '50ml',
                price: 'Rs.6490',
                badge: {
                    text: 'VERY\nLONG\nLASTING',
                    position: 'top-left',
                },
            },
            {
                id: '3',
                name: 'HAUTE TOBACCO',
                subtitle: 'Extrait De Parfum',
                image: '/images/products/haute-tobacco.jpg',
                description: 'Spicy, Woody, Sweet',
                notes: 'A sexy tobacco fragrance for men',
                volume: '50ml',
                price: 'Rs.5490',
                badge: {
                    text: 'Blended by FRAGRANCE FOUNDATION\nAWARD-WINNER',
                    position: 'top-left',
                },
            },
            {
                id: '4',
                name: 'TOBACCO VANILLA',
                subtitle: 'Extrait De Parfum',
                image: '/images/products/tobacco-vanilla.jpg',
                description: 'Rich, Warm, Sophisticated',
                notes: 'An Opulent interplay of sweet & spicy notes',
                volume: '50ml',
                price: 'Rs.5490',
                badge: {
                    text: 'LIMITED\nEDITION',
                    position: 'top-left',
                },
            },
            {
                id: '5',
                name: 'TOBACCO VANILLA',
                subtitle: 'Extrait De Parfum',
                image: '/images/products/tobacco-vanilla.jpg',
                description: 'Rich, Warm, Sophisticated',
                notes: 'An Opulent interplay of sweet & spicy notes',
                volume: '50ml',
                price: 'Rs.5490',
                badge: {
                    text: 'LIMITED\nEDITION',
                    position: 'top-left',
                },
            },
            {
                id: '6',
                name: 'TOBACCO VANILLA',
                subtitle: 'Extrait De Parfum',
                image: '/images/products/tobacco-vanilla.jpg',
                description: 'Rich, Warm, Sophisticated',
                notes: 'An Opulent interplay of sweet & spicy notes',
                volume: '50ml',
                price: 'Rs.5490',
                badge: {
                    text: 'LIMITED\nEDITION',
                    position: 'top-left',
                },
            },
        ],
        'FOR HER': [
            {
                id: '5',
                name: 'ROSE GARDEN',
                subtitle: 'Extrait De Parfum',
                image: '/images/products/rose-garden.jpg',
                description: 'Floral, Fresh, Elegant',
                notes: 'A beautiful blend of roses',
                volume: '50ml',
                price: 'Rs.5990',
            },
        ],
        'GIFT SETS': [
            {
                id: '6',
                name: 'LUXURY COLLECTION',
                subtitle: 'Gift Set',
                image: '/images/products/gift-set.jpg',
                description: 'Premium, Curated, Special',
                notes: 'Perfect gift for loved ones',
                volume: '3x30ml',
                price: 'Rs.12990',
            },
        ],
        SAMPLES: [
            {
                id: '7',
                name: 'DISCOVERY SET',
                subtitle: 'Sample Set',
                image: '/images/products/sample-set.jpg',
                description: 'Variety, Discovery, Trial',
                notes: 'Try before you buy',
                volume: '5x2ml',
                price: 'Rs.999',
            },
        ],
    }

    const tabs: TabType[] = ['FOR HIM', 'FOR HER', 'GIFT SETS', 'SAMPLES']

    return (
        <section className="bestseller-section">
            <div className="container">
                <h2 className="bestseller-title">OUR BESTSELLERS</h2>

                <div className="tabs-container">
                    {tabs.map((tab) => (
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
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        className="bestseller-swiper"
                        modules={[Navigation, Pagination]}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                    >
                        {productsData[activeTab].map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        aria-label="Previous"
                        className="swiper-button-prev-custom carousel-button"
                    >
                        ‹
                    </button>
                    <button
                        aria-label="Next"
                        className="swiper-button-next-custom carousel-button"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    )
}

export default BestSeller
