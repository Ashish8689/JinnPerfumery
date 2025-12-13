import React from 'react'
import './WhyChooseUs.styles.css'

interface Feature {
    id: number
    icon: React.ReactNode
    title: string
    description: string
}

const features: Feature[] = [
    {
        id: 1,
        icon: (
            <svg
                width="60"
                height="60"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M20 28c0-8 6-12 12-12s12 4 12 12c0 4-2 8-6 10v6h-12v-6c-4-2-6-6-6-10z" />
                <circle cx="32" cy="20" r="4" />
                <path d="M26 44h12" />
                <path d="M28 48h8" />
            </svg>
        ),
        title: 'CRUELTY FREE',
        description:
            'Kindness in every bottle: Our commitment to cruelty-free Products.',
    },
    {
        id: 2,
        icon: (
            <svg
                width="60"
                height="60"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <circle cx="32" cy="32" r="20" />
                <circle cx="32" cy="32" r="12" />
                <circle cx="32" cy="32" r="4" />
                <path d="M32 12v8M32 44v8M12 32h8M44 32h8" />
                <path d="M19 19l5.66 5.66M39.34 39.34L45 45M45 19l-5.66 5.66M19 45l5.66-5.66" />
            </svg>
        ),
        title: 'FRAGRANCE FORWARD',
        description:
            'Luxurious & imported perfume oils in every product',
    },
    {
        id: 3,
        icon: (
            <svg
                width="60"
                height="60"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <rect x="12" y="16" width="40" height="32" rx="4" />
                <path d="M12 24h40" />
                <rect x="18" y="30" width="12" height="8" />
                <path d="M36 34h10" />
            </svg>
        ),
        title: 'AFFORDABLE LUXURY',
        description:
            'Offering Premium Quality and Elegance at a Reasonable Price',
    },
    {
        id: 4,
        icon: (
            <svg
                width="60"
                height="60"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <circle cx="32" cy="24" r="12" />
                <path d="M32 36v8" />
                <path d="M24 44h16" />
                <path d="M26 50h12" />
                <path d="M38 30l8 8M26 30l-8 8" />
            </svg>
        ),
        title: 'GENDER NEUTRAL',
        description:
            'Elevate your self-care routine with bath, body and personal care for all',
    },
]

const WhyChooseUs: React.FC = () => {
    return (
        <section className="why-choose-us-section">
            <div className="why-choose-us-container">
                <h2 className="why-choose-us-title">WHY JINN PERFUMERY?</h2>

                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
