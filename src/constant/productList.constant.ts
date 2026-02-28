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
                '/images/products/8ml/ombre-leather.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/ombre-leather.png',
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
        name: 'Boss',
        description: 'Marine, Beastly, Clean, Woody',
        notes: "A potent freshie that's violent like a Tsunami",
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/boss.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/boss.png',
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
            [ProductVolumeSize.EightML]: '/images/products/8ml/althair.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/althair.png',
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
            [ProductVolumeSize.EightML]: '/images/products/8ml/kham-rah.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/kham-rah.png',
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
            [ProductVolumeSize.EightML]: '/images/products/8ml/cool-wave.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/cool-wave.png',
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
            [ProductVolumeSize.EightML]: '/images/products/8ml/eroz.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/eroz.png',
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
            [ProductVolumeSize.EightML]: '/images/products/8ml/floraa.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/floraa.png',
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
        name: 'Tam-Dao',
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/tam-dao.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/tam-dao.png',
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
            [ProductVolumeSize.EightML]: '/images/products/8ml/canel5.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/canel5.png',
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
        name: 'Burry Femme',
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/burry-femme.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/burry-femme.png',
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
                '/images/products/8ml/badee-al-oud.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/badee-al-oud.png',
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
        name: 'Allura sport',
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/allura-sport.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/allura-sport.png',
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
                '/images/products/8ml/blue-by-jinn.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/blue-by-jinn.png',
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
            [ProductVolumeSize.EightML]: '/images/products/8ml/marshmallow.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/marshmallow.png',
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
            [ProductVolumeSize.EightML]: '/images/products/8ml/nine-pm.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/nine-pm.png',
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
                '/images/products/8ml/ombre-nomade.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/ombre-nomade.png',
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
        name: '212 Black',
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/212-black.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/212-black.png',
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
            [ProductVolumeSize.EightML]: '/images/products/8ml/imagination.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/imagination.png',
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
                '/images/products/8ml/prada-paradox.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/prada-paradox.png',
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
            [ProductVolumeSize.EightML]: '/images/products/8ml/rebel9.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/rebel9.png',
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
        name: 'Sheek OUD',
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/sheek-oud.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/sheek-oud.png',
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
            [ProductVolumeSize.EightML]: '/images/products/8ml/oud-malaki.png',
            [ProductVolumeSize.FiftyML]: '/images/products/50ml/oud-malaki.png',
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
