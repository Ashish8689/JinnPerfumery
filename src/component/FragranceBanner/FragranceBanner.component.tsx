import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './FragranceBanner.styles.css'

export default function FragranceBanner(): React.JSX.Element {
    return (
        <section className="fragrance-banner">
            <div className="fragrance-banner__inner">
                <div className="fragrance-banner__content">
                    <h2 className="fragrance-banner__title">
                        The
                        <br />
                        fragrance
                        <br />
                        larger than{' '}
                        <span className="fragrance-banner__script">life</span>
                    </h2>
                    <Link className="fragrance-banner__cta" href="/male">
                        Explore the range
                        <svg
                            fill="none"
                            height="18"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="18"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 8 16 12 12 16" />
                            <line x1="8" x2="16" y1="12" y2="12" />
                        </svg>
                    </Link>
                </div>
                <div className="fragrance-banner__image-wrap">
                    <Image
                        fill
                        alt="Luxury perfume collection"
                        className="fragrance-banner__image"
                        src="/images/banner/men.webp"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                </div>
            </div>
        </section>
    )
}
