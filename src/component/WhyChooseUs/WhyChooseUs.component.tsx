import React from 'react'
import './WhyChooseUs.styles.css'
import CrueltyIcon from '../../assets/svg/cruelty.svg'
import FragranceForwardIcon from '../../assets/svg/fragranceForward.svg'
import AffordableLuxuryIcon from '../../assets/svg/affordable.svg'
import GenderNeutralIcon from '../../assets/svg/genderNeutral.svg'

interface Feature {
    id: number
    icon: React.ReactNode
    title: string
    description: string
}

const features: Feature[] = [
    {
        id: 1,
        icon: <CrueltyIcon className="feature-svg-icon" />,
        title: 'CRUELTY FREE',
        description:
            'Kindness in every bottle: Our commitment to cruelty-free Products.',
    },
    {
        id: 2,
        icon: <FragranceForwardIcon className="feature-svg-icon" />,
        title: 'FRAGRANCE FORWARD',
        description: 'Luxurious & imported perfume oils in every product',
    },
    {
        id: 3,
        icon: <AffordableLuxuryIcon className="feature-svg-icon" />,
        title: 'AFFORDABLE LUXURY',
        description:
            'Offering Premium Quality and Elegance at a Reasonable Price',
    },
    {
        id: 4,
        icon: <GenderNeutralIcon className="feature-svg-icon" />,
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
                        <div
                            className={`feature-card ${feature.id === 3 ? 'active' : ''}`}
                            key={feature.id}
                        >
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
