import React from 'react'
import './WhyTrustUs.styles.css'
import PremiumQualityIcon from '../../assets/svg/quality.svg'
import CrueltyIcon from '../../assets/svg/cruelty.svg'
import LongLastingIcon from '../../assets/svg/longLasting.svg'
import VarietyFragrances from '../../assets/svg/variety.svg'
import TestedIcon from '../../assets/svg/tested.svg'
import VeganIcon from '../../assets/svg/vegan.svg'

const WhyTrustUs: React.FC = () => {
    const features = [
        {
            icon: <PremiumQualityIcon className="feature-icon" />,
            title: 'Premium',
            subtitle: 'Quality',
        },
        {
            icon: <CrueltyIcon className="feature-icon" />,
            title: 'Cruelty',
            subtitle: 'Free',
        },
        {
            icon: <LongLastingIcon className="feature-icon" />,
            title: 'Long',
            subtitle: 'Lasting',
        },
        {
            icon: <VarietyFragrances className="feature-icon" />,
            title: 'Variety of',
            subtitle: 'Fragrances',
        },
        {
            icon: <TestedIcon className="feature-icon" />,
            title: 'Derma',
            subtitle: 'Tested',
        },
        {
            icon: <VeganIcon className="feature-icon" />,
            title: '100%',
            subtitle: 'Vegan',
        },
    ]

    return (
        <section className="why-trust-us">
            <h2 className="why-trust-us-title">Why Trust Us?</h2>
            <div className="features-grid">
                {features.map((feature) => (
                    <div className="feature-item" key={feature.title}>
                        <div className="icon-wrapper">{feature.icon}</div>
                        <div className="feature-text">
                            <div className="feature-title">{feature.title}</div>
                            <div className="feature-subtitle">
                                {feature.subtitle}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyTrustUs
