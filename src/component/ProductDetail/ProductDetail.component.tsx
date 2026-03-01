'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product, ProductVolumeSize } from '@/constant/productList.constant'
import { SOCIAL_LINKS } from '@/constant/links.constant'
import ProductCard from '@/component/ProductCard/ProductCard.component'
import ProductReviews, {
    Review,
} from '@/component/ProductReviews/ProductReviews.component'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import './ProductDetail.css'

interface ProductDetailProps {
    product: Product
    related?: Product[]
    reviews?: Review[]
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, related, reviews }) => {
    const defaultSize = product.volume.includes(ProductVolumeSize.FiftyML)
        ? ProductVolumeSize.FiftyML
        : product.volume[0]

    const [selectedSize, setSelectedSize] =
        useState<ProductVolumeSize>(defaultSize)

    const { originalPrice, salePrice } =
        product.price[selectedSize as '8ml' | '50ml']

    const savings = originalPrice - salePrice
    const discountPercent = Math.round((savings / originalPrice) * 100)

    const formatPrice = (price: number): string =>
        `Rs. ${price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

    const handleBuyNow = (): void => {
        const message = `Hi, I'm interested in purchasing:\n\n*${product.name}* (${selectedSize.toUpperCase()})\n\nSale Price: ${formatPrice(salePrice)}`
        const whatsappUrl = `${SOCIAL_LINKS.WHATSAPP}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    }

    const categoryLabelMap: Record<string, string> = {
        men: 'For Him',
        women: 'For Her',
        unisex: 'For Everyone',
    }
    const categoryLabel = categoryLabelMap[product.category] ?? 'For Everyone'

    const categoryPathMap: Record<string, string> = {
        men: '/male',
        women: '/female',
        unisex: '/unisex',
    }
    const categoryPath = categoryPathMap[product.category] ?? '/unisex'

    return (
        <div className="product-detail-page">
            <div className="container">
                {/* Breadcrumb */}
                <nav className="product-breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="breadcrumb-separator">/</span>
                    <Link href={categoryPath}>{categoryLabel}</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{product.name}</span>
                </nav>

                {/* Main Product Section */}
                <div className="product-detail-grid">
                    {/* Left — Image */}
                    <div className="product-image-section">
                        <div className="product-main-image-wrapper">
                            {discountPercent > 0 && (
                                <span className="product-badge">
                                    -{discountPercent}%
                                </span>
                            )}
                            <Image
                                fill
                                priority
                                alt={product.name}
                                className="product-main-image"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                src={
                                    product.image[
                                        selectedSize as '8ml' | '50ml'
                                    ]
                                }
                            />
                        </div>
                    </div>

                    {/* Right — Info */}
                    <div className="product-info-section">
                        {/* Tags */}
                        <div className="product-tags">
                            {product.isBestSeller && (
                                <span className="product-tag bestseller">
                                    Best Seller
                                </span>
                            )}
                            {product.isLatest && (
                                <span className="product-tag latest">
                                    New Arrival
                                </span>
                            )}
                            <span className="product-tag category">
                                {categoryLabel}
                            </span>
                        </div>

                        <h1 className="product-title">{product.name}</h1>
                        <p className="product-description">
                            {product.description}
                        </p>

                        {/* Pricing */}
                        <div className="product-pricing-block">
                            <span className="product-sale-price">
                                {formatPrice(salePrice)}
                            </span>
                            {savings > 0 && (
                                <>
                                    <span className="product-original-price">
                                        {formatPrice(originalPrice)}
                                    </span>
                                    <span className="product-savings-badge">
                                        Save {formatPrice(savings)}
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Volume Thumbnail Selector */}
                        {product.volume.length > 1 && (
                            <div className="product-volume-thumbnails">
                                <p className="product-volume-label">
                                    Size:{' '}
                                    <strong>
                                        {selectedSize.toUpperCase()}
                                    </strong>
                                </p>
                                <div className="product-thumbnails">
                                    {product.volume.map((vol) => (
                                        <button
                                            className={`product-thumbnail-btn${selectedSize === vol ? ' active' : ''}`}
                                            key={vol}
                                            onClick={() => setSelectedSize(vol)}
                                        >
                                            <div className="product-thumbnail-image-wrapper">
                                                <Image
                                                    fill
                                                    alt={`${product.name} ${vol}`}
                                                    className="product-thumbnail-image"
                                                    sizes="100px"
                                                    src={
                                                        product.image[
                                                            vol as
                                                                | '8ml'
                                                                | '50ml'
                                                        ]
                                                    }
                                                />
                                            </div>
                                            <span>{vol.toUpperCase()}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CTA */}
                        <div className="product-cta">
                            <button
                                className="product-buy-now-btn"
                                onClick={handleBuyNow}
                            >
                                Buy Now via WhatsApp
                            </button>
                        </div>

                        {/* Notes */}
                        {product.notes && (
                            <div className="product-notes-block">
                                <h3 className="product-notes-title">
                                    About this fragrance
                                </h3>
                                <p className="product-notes-text">
                                    {product.notes}
                                </p>
                            </div>
                        )}

                        {/* Perks strip */}
                        <div className="product-perks">
                            <div className="product-perk-item">
                                <span className="perk-icon">&#10003;</span>
                                <span>Genuine Long-lasting Fragrance</span>
                            </div>
                            <div className="product-perk-item">
                                <span className="perk-icon">&#10003;</span>
                                <span>Fast Delivery</span>
                            </div>
                            <div className="product-perk-item">
                                <span className="perk-icon">&#10003;</span>
                                <span>Easy WhatsApp Order</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* You May Also Like */}
                {related && related.length > 0 && (
                    <div className="product-related-section">
                        <h2 className="product-related-title">
                            You May Also Like
                        </h2>
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
                            className="product-related-swiper"
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            slidesPerView={4}
                            spaceBetween={30}
                        >
                            {related.map((p) => (
                                <SwiperSlide key={p.id}>
                                    <ProductCard product={p} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}

                <ProductReviews reviews={reviews ?? []} />
            </div>
        </div>
    )
}

export default ProductDetail
