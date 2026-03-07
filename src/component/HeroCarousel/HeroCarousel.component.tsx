import './HeroCarousel.styles.css'
import Image from 'next/image'

export default function HeroCarousel(): React.JSX.Element {
    return (
        <section className="hero-carousel-section">
            <Image
                fill
                priority
                alt="Hero Banner"
                className="hero-image"
                src="/images/carousel/slider1.png"
            />
        </section>
    )
}
