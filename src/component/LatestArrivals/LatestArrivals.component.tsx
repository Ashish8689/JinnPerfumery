import React from 'react'
import './LatestArrivals.styles.css'

interface ArrivalProduct {
    id: string
    name: string
    brand: string
    image: string
    originalPrice: number
    salePrice: number
    onSale?: boolean
}

const latestProducts: ArrivalProduct[] = [
    {
        id: '1',
        name: 'Soul of Bali Extrait De Parfum For Unisex',
        brand: 'Swiss Arabian',
        image: '/products/soul-of-bali.jpg',
        originalPrice: 8950.0,
        salePrice: 4990.0,
        onSale: true,
    },
    {
        id: '2',
        name: 'Granada Eau De Parfum For Men',
        brand: 'Rayhaan',
        image: '/products/granada.jpg',
        originalPrice: 3500.0,
        salePrice: 2550.0,
        onSale: true,
    },
    {
        id: '3',
        name: 'Seville Eau De Parfum For Men',
        brand: 'Rayhaan',
        image: '/products/seville.jpg',
        originalPrice: 3550.0,
        salePrice: 2550.0,
        onSale: true,
    },
    {
        id: '4',
        name: 'Cadiz Eau De Parfum For Men',
        brand: 'Rayhaan',
        image: '/products/cadiz.jpg',
        originalPrice: 3500.0,
        salePrice: 2350.0,
        onSale: true,
    },
    {
        id: '5',
        name: 'Odyssey BAHAMAS Eau De Parfum For Unisex',
        brand: 'Armaf',
        image: '/products/odyssey-bahamas.jpg',
        originalPrice: 3650.0,
        salePrice: 3250.0,
        onSale: true,
    },
]

const LatestArrivals: React.FC = () => {
    const calculateSavings = (original: number, sale: number): number => {
        return original - sale
    }

    const formatPrice = (price: number): string => {
        return `Rs. ${price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }

    return (
        <section className="latest-arrivals">
            <div className="latest-arrivals-container">
                <h2 className="latest-arrivals-title">Latest Arrivals</h2>
                <button className="view-all-button">VIEW ALL</button>

                <div className="arrivals-grid">
                    {latestProducts.map((product) => (
                        <div className="arrival-card" key={product.id}>
                            <div className="arrival-image-container">
                                {product.onSale && (
                                    <div className="sale-badge">Sale</div>
                                )}
                                <img
                                    alt={product.name}
                                    className="arrival-image"
                                    src={product.image}
                                />
                            </div>
                            <div className="arrival-details">
                                <h3 className="arrival-name">
                                    {product.brand} {product.name}
                                </h3>
                                <div className="arrival-pricing">
                                    <span className="original-price">
                                        {formatPrice(product.originalPrice)}
                                    </span>
                                    <span className="sale-price">
                                        {formatPrice(product.salePrice)}
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LatestArrivals
