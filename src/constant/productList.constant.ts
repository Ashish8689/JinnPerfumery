import { Category } from './common.constant'

export enum ProductVolumeSize {
    EightML = '8ml',
    FiftyML = '50ml',
}

export interface ProductPrice {
    originalPrice: number
    salePrice: number
}
export interface Product {
    id: number
    name: string
    description: string
    notes: string
    image: {
        [ProductVolumeSize.EightML]: string
        [ProductVolumeSize.FiftyML]: string
    }
    volume: ProductVolumeSize[]
    price: {
        [ProductVolumeSize.EightML]: ProductPrice
        [ProductVolumeSize.FiftyML]: ProductPrice
    }
    category: Category
    isLatest?: boolean
    isBestSeller?: boolean
}

export const PRODUCT_LIST: Product[] = [
    {
        id: 1,
        name: 'Ombre leather',
        description: 'Marine, Beastly, Clean, Woody',
        notes: "A potent freshie that's violent like a Tsunami",
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/ombre-leather-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/ombre-leather-50ml.png',
        },
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 2,
        name: 'Spice Bomb',
        description: 'Marine, Beastly, Clean, Woody',
        notes: "A potent freshie that's violent like a Tsunami",
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/spice-bomb-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/spice-bomb-50ml.png',
        },
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 3500,
                salePrice: 2550,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 3500,
                salePrice: 2550,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 3,
        name: 'Althair',
        description: 'Marine, Beastly, Clean, Woody',
        notes: "A potent freshie that's violent like a Tsunami",
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/althair-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/althair-50ml.png',
        },
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 3550,
                salePrice: 2550,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 3550,
                salePrice: 2550,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 4,
        name: 'Kham-Rah',
        description: 'Marine, Beastly, Clean, Woody',
        notes: "A potent freshie that's violent like a Tsunami",
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/kham-rah-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/kham-rah-50ml.png',
        },
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 3500,
                salePrice: 2350,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 3500,
                salePrice: 2350,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Unisex,
    },
    {
        id: 5,
        name: 'Cool Wave',
        description: 'Marine, Beastly, Clean, Woody',
        notes: "A potent freshie that's violent like a Tsunami",
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/cool-wave-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/cool-wave-50ml.png',
        },
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 3650,
                salePrice: 3250,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 3650,
                salePrice: 3250,
            },
        },
        isLatest: true,
        isBestSeller: false,
        category: Category.Men,
    },
    {
        id: 6,
        name: 'Eroz',
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/eroz-8ml.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/eroz-50ml.png',
        },
        description: 'Marine, Beastly, Clean, Woody',
        notes: "A potent freshie that's violent like a Tsunami",
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 7,
        name: 'Floraa',
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/floraa-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/floraa-50ml.png',
        },
        description: 'Lactonic, woody, gourmand',
        notes: 'Arguably the longest lasting cardamom perfume',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Women,
    },
    {
        id: 8,
        name: 'Tam Dao',
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/tam-dao-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/tam-dao-50ml.png',
        },
        description: 'Spicy, Woody, Sweet',
        notes: 'A sexy tobacco fragrance for men',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Unisex,
    },
    {
        id: 9,
        name: 'Canel 5',
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/canel5-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/canel5-50ml.png',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Women,
    },
    {
        id: 10,
        name: 'Berry Femme',
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/berry-femme-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/berry-femme-50ml.png',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Women,
    },
    {
        id: 11,
        name: 'Badee-al-oud',
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/badee-al-oud-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/badee-al-oud-50ml.png',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Unisex,
    },
    {
        id: 12,
        name: 'Purple',
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/purple-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/purple-50ml.png',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 13,
        name: 'Blue by Jinn',
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/blue-by-jinn-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/blue-by-jinn-50ml.png',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 14,
        name: 'Marshmallow',
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/marshmallow-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/marshmallow-50ml.png',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Women,
    },
    {
        id: 15,
        name: 'Nine PM',
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/nine-pm-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/nine-pm-50ml.png',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 16,
        name: 'Ombre Nomade',
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/ombre-nomade-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/ombre-nomade-50ml.png',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 17,
        name: 'Bin Shaikh (Premium)',
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/bin-shaikh-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/bin-shaikh-50ml.jpg',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 18,
        name: 'Imagination',
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/imagination-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/imagination-50ml.png',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 19,
        name: 'Prada Paradox',
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/prada-paradox-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/prada-paradox-50ml.png',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Women,
    },
    {
        id: 20,
        name: 'Rebel 9',
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/rebel9-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/rebel9-50ml.png',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Unisex,
    },
    {
        id: 21,
        name: 'Marj (Premium)',
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/marj-8ml.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/marj-50ml.jpg',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 22,
        name: 'OUD Malaki',
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/oud-malaki-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/oud-malaki-50ml.png',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 23,
        name: 'Ultra Code (Premium)',
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/ultra-code-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/ultra-code-50ml.jpg',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 23,
        name: 'Juicy Apple',
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/juicy-apple-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/juicy-apple-50ml.png',
        },
        description: 'Rich, Warm, Sophisticated',
        notes: 'An Opulent interplay of sweet & spicy notes',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 8950,
                salePrice: 4990,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
]
