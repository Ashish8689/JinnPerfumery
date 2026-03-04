'use client'

import React from 'react'
// import Image from 'next/image'
import ProductCard from '../ProductCard/ProductCard.component'
import { Product } from '@/constant/productList.constant'
import './ProductListing.css'

interface ProductListingProps {
    title: string
    bannerImage: string
    products: Product[]
}

const ProductListing: React.FC<ProductListingProps> = ({
    title,
    bannerImage,
    products,
}) => {
    return (
        <div className="product-listing-page">
            {/* <div className="banner-container">
                <Image
                    fill
                    priority
                    alt={`${title} Banner`}
                    className="banner-image"
                    sizes="100vw"
                    src={bannerImage}
                />
                <div className="banner-overlay" />
            </div> */}

            <section className="products-section">
                <div className="products-container">
                    <div className="products-grid">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductListing
