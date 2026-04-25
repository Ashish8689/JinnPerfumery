import './HeroCarousel.styles.css'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroCarousel(): React.JSX.Element {
    return (
        <section className="hero-carousel-section">
            <Link href="/combos" style={{ display: 'contents' }}>
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
            </Link>
        </section>
    )
}
