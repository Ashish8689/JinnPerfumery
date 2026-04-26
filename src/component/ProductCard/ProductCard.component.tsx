'use client'

import React from 'react'
import './ProductCard.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Product, ProductVolumeSize } from '@/constant/productList.constant'
import { SOCIAL_LINKS } from '@/constant/links.constant'
import { getFormatPrice } from '@/utils/common.utils'
import { useCart } from '@/context/CartContext'

interface ProductCardProps {
    product: Product
    size?: ProductVolumeSize
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    size = ProductVolumeSize.FiftyML,
}) => {
    const { addItem, items } = useCart()
    const router = useRouter()

    const calculateSavings = (original: number, sale: number): number => {
        return original - sale
    }

    const { originalPrice, salePrice } = product.price[size as '8ml' | '50ml']

    const isInCart = items.some(
        (i) => i.product.id === product.id && i.size === size,
    )

    const handleAddToCart = (e: React.MouseEvent): void => {
        e.preventDefault()
        if (isInCart) {
            router.push('/cart')
        } else {
            addItem(product, size)
        }
    }

    const handleBuyNow = (e: React.MouseEvent): void => {
        e.preventDefault()
        const message = `Hi, I'm interested in purchasing:\n\n*${product.name}* (${size.toUpperCase()})`
        const whatsappUrl = `${SOCIAL_LINKS.WHATSAPP}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="arrival-card">
            <Link href={`/product/${product.id}`}>
                <div className="arrival-image-container">
                    <Image
                        fill
                        alt={product.name}
                        className="arrival-image"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                        src={product.image[size as '8ml' | '50ml']}
                    />
                </div>
            </Link>
            <div className="arrival-details">
                <Link href={`/product/${product.id}`}>
                    <h3 className="arrival-name">
                        {product.name} ( {size.toUpperCase()} )
                    </h3>
                </Link>
                <div className="arrival-pricing">
                    <span className="sale-price">
                        {getFormatPrice(salePrice)}
                    </span>
                    <span className="original-price">
                        {getFormatPrice(originalPrice)}
                    </span>
                </div>
                <p className="savings">
                    Save{' '}
                    {getFormatPrice(calculateSavings(originalPrice, salePrice))}
                </p>

                <div className="arrival-card-cta">
                    <button
                        className={`arrival-add-to-cart-button${isInCart ? ' in-cart' : ''}`}
                        onClick={handleAddToCart}
                    >
                        {isInCart ? 'Go to Cart' : 'Add to Cart'}
                    </button>
                    <button
                        className="arrival-buy-now-button"
                        onClick={handleBuyNow}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
