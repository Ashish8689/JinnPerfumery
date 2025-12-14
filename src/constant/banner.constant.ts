export interface HeroSlide {
    id: number
    image: string
    title: string
    subtitle?: string
    description?: string
    buttonText?: string
    buttonLink?: string
}

export const HERO_SLIDES: HeroSlide[] = [
    {
        id: 1,
        image: '/images/carousel/slider1.webp',
        title: 'SKINN',
        subtitle: 'HOLIDAY SALE',
        description: 'Flat 20% OFF*',
        buttonText: 'SHOP NOW',
        buttonLink: '#',
    },
    {
        id: 2,
        image: '/images/carousel/slider3.webp',
        title: 'NEW ARRIVALS',
        subtitle: 'Discover Your Signature Scent',
        description: 'Exclusive Premium Perfumes',
        buttonText: 'EXPLORE NOW',
        buttonLink: '#',
    },
    {
        id: 3,
        image: '/images/carousel/slider3.webp',
        title: 'LUXURY COLLECTION',
        subtitle: 'Experience Elegance',
        description: 'Curated Selection of Finest Fragrances',
        buttonText: 'VIEW COLLECTION',
        buttonLink: '#',
    },
]
