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
    topNotes?: string[]
    middleNotes?: string[]
    baseNotes?: string[]
    story?: string
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
        name: 'Ombre Leather',
        description: 'Leather, Floral, Woody',
        notes: 'A bold and sensual leather fragrance with a floral heart and smoky dry-down',
        topNotes: ['Cardamom'],
        middleNotes: ['Jasmine Sambac', 'Leather'],
        baseNotes: ['Amber', 'Moss', 'Patchouli'],
        story: 'Bold and magnetic. A rich leather scent softened with floral touches — made for confident personalities who leave a strong trail.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/ombre-leather-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/ombre-leather-50ml.png',
        },
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Unisex,
    },
    {
        id: 2,
        name: 'Spice Bomb',
        description: 'Spicy, Woody, Oriental',
        notes: 'An explosive blend of pepper and cinnamon with a warm tobacco base',
        topNotes: ['Pink Pepper', 'Bergamot', 'Grapefruit'],
        middleNotes: ['Cinnamon', 'Saffron', 'Elemi'],
        baseNotes: ['Tobacco', 'Vetiver', 'Leather'],
        story: "Explosive and irresistible. A weapon of mass seduction — warm spices ignite into a smoky tobacco trail that lingers long after you've left the room.",
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/spice-bomb-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/spice-bomb-50ml.png',
        },
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 3,
        name: 'Althair',
        description: 'Fresh, Aromatic, Woody',
        notes: 'A crisp aromatic fresh scent with cedar and citrus that commands attention',
        topNotes: ['Bergamot', 'Lemon', 'Grapefruit'],
        middleNotes: ['Sage', 'Geranium', 'Cardamom'],
        baseNotes: ['Cedar', 'Vetiver', 'Musk'],
        story: 'Clean, sharp and confident. An aromatic powerhouse for the man who walks into a room and owns it without saying a word.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        image: {
            [ProductVolumeSize.EightML]: '/images/products/8ml/althair-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/althair-50ml.png',
        },
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 4,
        name: 'Kham-Rah',
        description: 'Oud, Amber, Woody',
        notes: 'A rich Middle Eastern oud accord with amber warmth and woody depth',
        topNotes: ['Saffron', 'Cinnamon', 'Rose'],
        middleNotes: ['Oud', 'Sandalwood', 'Patchouli'],
        baseNotes: ['Amber', 'Musk', 'Vanilla'],
        story: 'An ode to the Arabian night. Warm, hypnotic and deeply opulent — a scent that wraps you in luxury from the first spray to the last trace.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/kham-rah-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/kham-rah-50ml.png',
        },
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Unisex,
    },
    {
        id: 5,
        name: 'Cool Wave',
        description: 'Marine, Aquatic, Fresh',
        notes: 'A clean aquatic wave of mint and sea breeze — refreshing and effortlessly cool',
        topNotes: ['Mint', 'Rosemary', 'Lavender'],
        middleNotes: ['Geranium', 'Oakmoss', 'Sea Notes'],
        baseNotes: ['Musk', 'Cedar', 'Amber'],
        story: 'Dive in. A rush of cold ocean air and fresh mint that feels like a wave breaking — endlessly clean, effortlessly masculine.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/cool-wave-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/cool-wave-50ml.png',
        },
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
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
        description: 'Fresh, Citrus, Musky',
        notes: 'A magnetic green apple and lemon burst that dries down to sensual musk',
        topNotes: ['Lemon', 'Green Apple', 'Mint'],
        middleNotes: ['Ambroxan', 'Geranium', 'Rose'],
        baseNotes: ['Musk', 'Vetiver', 'Oakwood'],
        story: 'Magnetic and primal. A burst of crisp citrus that melts into a skin-close musky warmth — the scent of raw confidence.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
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
        description: 'Floral, Fruity, Musky',
        notes: 'A lush garden bouquet of peony and jasmine with a soft powdery dry-down',
        topNotes: ['Mandarin', 'Red Berries', 'Peach'],
        middleNotes: ['Peony', 'Jasmine', 'Rose'],
        baseNotes: ['Sandalwood', 'Musk', 'Patchouli'],
        story: 'Feminine and free. A sun-drenched floral walk through a blooming garden — light, joyful and impossible to forget.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
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
        description: 'Woody, Creamy, Sandalwood',
        notes: 'A serene woody fragrance of sandalwood and cedar with a creamy smooth finish',
        topNotes: ['Pink Pepper', 'Cypress', 'Rosewood'],
        middleNotes: ['Sandalwood', 'Cedar', 'Rosewood'],
        baseNotes: ['Musk', 'Civet', 'Vetiver'],
        story: 'Quiet luxury. A meditative woody calm that speaks softly but stays forever — for those who let their presence do the talking.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
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
        description: 'Floral, Classic, Powdery',
        notes: 'The timeless icon — rose and jasmine over warm sandalwood and vanilla',
        topNotes: ['Aldehydes', 'Neroli', 'Ylang Ylang'],
        middleNotes: ['Rose', 'Jasmine', 'Iris'],
        baseNotes: ['Sandalwood', 'Vanilla', 'Musk'],
        story: 'Timeless and untouchable. The fragrance that defined a century — a powdery floral icon worn by legends, now yours.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
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
        description: 'Fruity, Floral, Sweet',
        notes: 'A juicy berry opening with raspberry and blackcurrant over a warm amber base',
        topNotes: ['Raspberry', 'Blackcurrant', 'Peach'],
        middleNotes: ['Rose', 'Jasmine', 'Lily'],
        baseNotes: ['Amber', 'Musk', 'Sandalwood'],
        story: 'Bold and feminine. A confident burst of wild berries that blooms into a warm floral heart — for the woman who is both sweet and fierce.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
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
        description: 'Oud, Rose, Oriental',
        notes: 'A majestic oud and rose accord with sweet amber and saffron undertones',
        topNotes: ['Saffron', 'Bergamot', 'Cardamom'],
        middleNotes: ['Rose', 'Oud', 'Geranium'],
        baseNotes: ['Amber', 'Musk', 'Sandalwood'],
        story: 'Majestic and rare. A precious oud entwined with the finest rose — a scent that carries the soul of the Orient in every drop.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
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
        description: 'Oud, Smoky, Resinous',
        notes: 'A deep smoky oud with resinous warmth and a rich incense heart',
        topNotes: ['Saffron', 'Incense', 'Black Pepper'],
        middleNotes: ['Oud', 'Rose', 'Leather'],
        baseNotes: ['Benzoin', 'Amber', 'Musk'],
        story: 'Dark and enigmatic. A smoky oud veil that demands attention — mysterious, powerful and deeply unforgettable.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Unisex,
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
        description: 'Fresh, Citrus, Woody',
        notes: 'A refined citrus and grapefruit opening with a clean cedar and vetiver finish',
        topNotes: ['Grapefruit', 'Lemon', 'Pink Pepper'],
        middleNotes: ['Ginger', 'Nutmeg', 'Jasmine'],
        baseNotes: ['Cedar', 'Vetiver', 'Sandalwood'],
        story: 'Effortlessly refined. A clean citrus spark that settles into a sophisticated woody base — the scent of a man who always looks put together.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
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
        description: 'Sweet, Gourmand, Vanilla',
        notes: 'A soft and cozy blend of vanilla, musk and sugar — like a warm hug in a bottle',
        topNotes: ['Bergamot', 'Peach', 'Cotton Candy'],
        middleNotes: ['Marshmallow', 'Jasmine', 'Rose'],
        baseNotes: ['Vanilla', 'Musk', 'Sandalwood'],
        story: 'Soft, sweet and utterly addictive. A gourmand cloud of marshmallow and vanilla that wraps around you like your favourite comfort blanket.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
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
        description: 'Sweet, Spicy, Amber',
        notes: 'A seductive nighttime scent of cinnamon and vanilla with a dark amber base',
        topNotes: ['Bergamot', 'Cardamom', 'Apple'],
        middleNotes: ['Cinnamon', 'Lavender', 'Jasmine'],
        baseNotes: ['Amber', 'Vanilla', 'Musk'],
        story: 'Made for after dark. A warming spiced amber that draws people closer — seductive, smooth and impossible to ignore past 9 PM.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
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
        description: 'Oud, Rose, Smoky',
        notes: 'A luxurious oud and rose journey with birch smoke and warm resinous woods',
        topNotes: ['Bergamot', 'Juniper', 'Pink Pepper'],
        middleNotes: ['Oud', 'Rose', 'Birch'],
        baseNotes: ['Labdanum', 'Vetiver', 'Musk'],
        story: 'A nomadic soul in a bottle. Smoky birch and precious oud travel together across deserts and dusk — for those who wander boldly.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Unisex,
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
        description: 'Oud, Amber, Musky',
        notes: 'A premium Arabian blend of aged oud, amber and musk with royal warmth',
        topNotes: ['Saffron', 'Rose', 'Cinnamon'],
        middleNotes: ['Oud', 'Patchouli', 'Leather'],
        baseNotes: ['Amber', 'Musk', 'Benzoin'],
        story: 'Born of royalty. An aged oud of the highest order, layered with saffron and amber — a premium tribute to Arabian luxury.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 1499,
                salePrice: 899,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Unisex,
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
        description: 'Woody, Amber, Warm',
        notes: 'A sophisticated woody amber with vetiver and patchouli — understated luxury',
        topNotes: ['Bergamot', 'Cardamom', 'Pink Pepper'],
        middleNotes: ['Cedarwood', 'Vetiver', 'Patchouli'],
        baseNotes: ['Amber', 'Musk', 'Sandalwood'],
        story: 'Understated power. A woody amber that does not shout — it resonates. For the man who knows exactly who he is.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
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
        description: 'Floral, Musky, Warm',
        notes: 'A modern floral paradox — orange blossom and white musk that evolves throughout the day',
        topNotes: ['Neroli', 'Mandarin', 'Bergamot'],
        middleNotes: ['Orange Blossom', 'Iris', 'Rose'],
        baseNotes: ['White Musk', 'Amber', 'Benzoin'],
        story: 'A living contradiction. Fresh yet warm, simple yet complex — a floral that transforms on your skin and reveals a new side every hour.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
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
        description: 'Sweet, Spicy, Amber',
        notes: 'A daring spiced rum and vanilla rebellion with a warm caramel dry-down',
        topNotes: ['Bergamot', 'Grapefruit', 'Black Pepper'],
        middleNotes: ['Rum', 'Cinnamon', 'Jasmine'],
        baseNotes: ['Caramel', 'Vanilla', 'Musk'],
        story: 'Rules are made to be broken. A wild spiced rum heart wrapped in dark caramel — for the one who plays by their own game.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
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
        description: 'Floral, Green, Musky',
        notes: 'A lush green floral with dewy freshness and a soft musk trail',
        topNotes: ['Bergamot', 'Green Leaves', 'Peach'],
        middleNotes: ['Rose', 'Jasmine', 'Lily of the Valley'],
        baseNotes: ['Musk', 'Cedar', 'Amber'],
        story: 'Pure and effortless. A dewy green garden at first light — fresh, feminine and quietly captivating.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 1499,
                salePrice: 899,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Unisex,
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
        description: 'Oud, Spicy, Woody',
        notes: 'A regal dark oud with saffron and spice over a deep sandalwood base',
        topNotes: ['Saffron', 'Black Pepper', 'Cardamom'],
        middleNotes: ['Oud', 'Rose', 'Leather'],
        baseNotes: ['Sandalwood', 'Amber', 'Musk'],
        story: 'Regal and commanding. A dark oud fit for kings — rich with saffron and spice, it announces your presence before you even speak.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
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
        description: 'Fresh, Aromatic, Woody',
        notes: 'A premium aromatic code of bergamot and cedarwood with a clean masculine finish',
        topNotes: ['Bergamot', 'Lemon', 'Cardamom'],
        middleNotes: ['Geranium', 'Lavender', 'Cedar'],
        baseNotes: ['Sandalwood', 'Amber', 'Musk'],
        story: 'The code of a gentleman. A crisp aromatic blend that speaks of discipline and elegance — premium by nature, powerful by design.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 1499,
                salePrice: 899,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Men,
    },
    {
        id: 24,
        name: 'Juicy Apple',
        image: {
            [ProductVolumeSize.EightML]:
                '/images/products/8ml/juicy-apple-8ml.png',
            [ProductVolumeSize.FiftyML]:
                '/images/products/50ml/juicy-apple-50ml.png',
        },
        description: 'Fruity, Sweet, Fresh',
        notes: 'A crisp and playful burst of green apple and peach with a light floral finish',
        topNotes: ['Green Apple', 'Peach', 'Pear'],
        middleNotes: ['Rose', 'Lily', 'Jasmine'],
        baseNotes: ['Musk', 'Cedar', 'Vanilla'],
        story: 'Fresh, fun and unapologetically sweet. A juicy fruit explosion that blooms into a light floral — the scent of carefree confidence.',
        volume: [ProductVolumeSize.EightML, ProductVolumeSize.FiftyML],
        price: {
            [ProductVolumeSize.EightML]: {
                originalPrice: 149,
                salePrice: 99,
            },
            [ProductVolumeSize.FiftyML]: {
                originalPrice: 999,
                salePrice: 699,
            },
        },
        isLatest: true,
        isBestSeller: true,
        category: Category.Unisex,
    },
]
