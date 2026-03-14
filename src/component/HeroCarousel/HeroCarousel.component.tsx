import './HeroCarousel.styles.css'
import Image from 'next/image'

export default function HeroCarousel(): React.JSX.Element {
    return (
        <section className="hero-carousel-section">
            <Image
                fill
                priority
                alt="Hero Banner"
                className="hero-image hero-image-desktop"
                src="/images/carousel/slider4.png"
            />
            <Image
                fill
                priority
                alt="Hero Banner"
                className="hero-image hero-image-mobile"
                src="/images/carousel/slider4-mobile.png"
            />
        </section>
    )
}
