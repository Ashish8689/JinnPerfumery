import React from 'react'
import './ProductCard.css'
import Image from 'next/image'
import Link from 'next/link'
import { Product, ProductVolumeSize } from '@/constant/productList.constant'
import { SOCIAL_LINKS } from '@/constant/links.constant'
import { getFormatPrice } from '@/utils/common.utils'

interface ProductCardProps {
    product: Product
    size?: ProductVolumeSize
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    size = ProductVolumeSize.FiftyML,
}) => {
    const calculateSavings = (original: number, sale: number): number => {
        return original - sale
    }

    const { originalPrice, salePrice } = product.price[size as '8ml' | '50ml']

    const handleBuyNow = (): void => {
        const message = `Hi, I'm interested in purchasing:\n\n*${product.name}* (${size.toUpperCase()})\n\nSale Price: ${getFormatPrice(salePrice)}`

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

                <button
                    className="arrival-buy-now-button"
                    onClick={handleBuyNow}
                >
                    Buy now
                </button>
            </div>
        </div>
    )
}

export default ProductCard
