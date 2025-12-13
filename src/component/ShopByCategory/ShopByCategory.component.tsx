'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './ShopByCategory.css'

interface Category {
    id: string
    title: string
    subtitle: string
    image: string
    link: string
}

const ShopByCategory: React.FC = () => {
    const categories: Category[] = [
        {
            id: '1',
            title: 'FOR HIM',
            subtitle: 'Discover masculine fragrances',
            image: '/images/category/for-him.jpg',
            link: '/category/for-him',
        },
        {
            id: '2',
            title: 'FOR HER',
            subtitle: 'Explore feminine fragrances',
            image: '/images/category/for-her.jpg',
            link: '/category/for-her',
        },
    ]

    return (
        <section className="shop-by-category-section">
            <div className="container">
                <h2 className="category-main-title">SHOP BY CATEGORY</h2>
                <div className="categories-grid">
                    {categories.map((category) => (
                        <Link
                            className="category-card"
                            href={category.link}
                            key={category.id}
                        >
                            <div className="category-image-container">
                                <Image
                                    fill
                                    alt={category.title}
                                    className="category-image"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    src={category.image}
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="category-overlay" />
                            </div>
                            <div className="category-content">
                                <h3 className="category-title">{category.title}</h3>
                                <p className="category-subtitle">{category.subtitle}</p>
                                <span className="category-arrow">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ShopByCategory
