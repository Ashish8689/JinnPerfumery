import React from 'react'
import './ProductCard.css'

export interface Product {
    id: string
    name: string
    subtitle: string
    image: string
    description: string
    notes: string
    volume: string
    price: string
    badge?: {
        text: string
        position: 'top-left' | 'top-right'
    }
}

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                {product.badge && (
                    <div className={`product-badge ${product.badge.position}`}>
                        {product.badge.text}
                    </div>
                )}
                <img
                    alt={product.name}
                    className="product-image"
                    src={product.image}
                />
            </div>
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-subtitle">{product.subtitle}</p>
                <p className="product-description">{product.description}</p>
                <p className="product-notes">{product.notes}</p>
                <p className="product-volume">{product.volume}</p>
                <p className="product-price">{product.price}</p>
            </div>
            <button className="product-check-button">
                CHECK
                <span className="button-arrow">→</span>
                <span className="button-icon">
                    <svg
                        fill="none"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="20"
                    >
                        <path d="M3 3h18v18" />
                        <path d="M3 21L21 3" />
                    </svg>
                </span>
            </button>
        </div>
    )
}

export default ProductCard
