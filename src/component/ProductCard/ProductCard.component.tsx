import React from 'react'
import './ProductCard.css'
import Image from 'next/image'
import { Product } from '@/constant/productList.constant'

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const calculateSavings = (original: number, sale: number): number => {
        return original - sale
    }

    const formatPrice = (price: number): string => {
        return `Rs. ${price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }

    return (
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
                    {product.name} ( {product.volume[0]}
                    ML )
                </h3>
                <div className="arrival-pricing">
                    <span className="sale-price">
                        {formatPrice(product.salePrice)}
                    </span>
                    <span className="original-price">
                        {formatPrice(product.originalPrice)}
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

                <button className="arrival-buy-now-button">Buy now</button>
            </div>
        </div>
    )
}

export default ProductCard
