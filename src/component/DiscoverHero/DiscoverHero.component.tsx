import React from 'react'
import './DiscoverHero.styles.css'

export default function DiscoverHero(): React.JSX.Element {
    return (
        <section className="discover-hero">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="discover-hero__video"
            >
                <source src="/videos/discover.mp4" type="video/mp4" />
            </video>
            <div className="discover-hero__overlay">
                <div className="discover-hero__content">
                    <h1 className="discover-hero__title">
                        DISCOVER THE ART OF PERFUMERY
                    </h1>
                    <p className="discover-hero__subtitle">
                        Our formulations have proven efficacy,
                        <br />
                        contain certified ingredients only and are
                        <br />
                        100% cruelty free
                    </p>
                    <button className="discover-hero__button">
                        FRAGRANCES
                    </button>
                </div>
            </div>
        </section>
    )
}
