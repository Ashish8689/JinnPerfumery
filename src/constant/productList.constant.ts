export interface Product {
    id: string
    name: string
    image: string
    originalPrice: number
    salePrice: number
    isLatest?: boolean
    isBestSeller?: boolean
}

export const PRODUCT_LIST: Product[] = [
    {
        id: '1',
        name: 'Soul of Bali Extrait De Parfum For Unisex',
        image: '/images/products/p1.webp',
        originalPrice: 8950,
        salePrice: 4990,
        isLatest: true,
    },
    {
        id: '2',
        name: 'Granada Eau De Parfum For Men',
        image: '/images/products/p2.webp',
        originalPrice: 3500,
        salePrice: 2550,
        isLatest: true,
    },
    {
        id: '3',
        name: 'Seville Eau De Parfum For Men',
        image: '/images/products/p3.webp',
        originalPrice: 3550,
        salePrice: 2550,
        isLatest: true,
    },
    {
        id: '4',
        name: 'Cadiz Eau De Parfum For Men',
        image: '/images/products/p4.webp',
        originalPrice: 3500,
        salePrice: 2350,
        isLatest: true,
    },
    {
        id: '5',
        name: 'Odyssey BAHAMAS Eau De Parfum For Unisex',
        image: '/images/products/p5.webp',
        originalPrice: 3650,
        salePrice: 3250,
        isLatest: true,
    },
]
