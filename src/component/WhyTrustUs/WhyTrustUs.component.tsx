import React from 'react'
import './WhyTrustUs.styles.css'

const WhyTrustUs: React.FC = () => {
    const features = [
        {
            icon: (
                <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="feature-icon"
                >
                    <path
                        d="M32 8L24 16L8 16L16 24L8 32L16 40L8 48L24 48L32 56L40 48L56 48L48 40L56 32L48 24L56 16L40 16L32 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M32 20L28 24L20 24L24 28L20 32L24 36L20 40L28 40L32 44L36 40L44 40L40 36L44 32L40 28L44 24L36 24L32 20Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: 'Premium',
            subtitle: 'Quality',
        },
        {
            icon: (
                <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="feature-icon"
                >
                    <ellipse
                        cx="23"
                        cy="18"
                        rx="4"
                        ry="5"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <ellipse
                        cx="41"
                        cy="18"
                        rx="4"
                        ry="5"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <ellipse
                        cx="50"
                        cy="25"
                        rx="4"
                        ry="5"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <ellipse
                        cx="14"
                        cy="25"
                        rx="4"
                        ry="5"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        d="M32 52C42 52 48 44 48 36C48 28 44 24 32 24C20 24 16 28 16 36C16 44 22 52 32 52Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: 'Cruelty',
            subtitle: 'Free',
        },
        {
            icon: (
                <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="feature-icon"
                >
                    <path
                        d="M38 12L42 8L46 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M42 8V18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M52 20L56 16L60 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M56 16V24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M28 28C28 24 30 20 36 20C42 20 44 24 44 28V48C44 52 40 56 36 56C32 56 28 52 28 48V28Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M28 40H44"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            ),
            title: 'Long',
            subtitle: 'Lasting',
        },
        {
            icon: (
                <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="feature-icon"
                >
                    <path
                        d="M32 8L28 14H24L26 18L32 16L38 18L40 14H36L32 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="26"
                        y="18"
                        width="12"
                        height="8"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        d="M26 26C26 26 24 30 24 36C24 42 26 52 32 52C38 52 40 42 40 36C40 30 38 26 38 26"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: 'Variety of',
            subtitle: 'Fragrances',
        },
        {
            icon: (
                <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="feature-icon"
                >
                    <path
                        d="M32 8C32 8 20 20 20 32C20 40 25 48 32 48C39 48 44 40 44 32C44 20 32 8 32 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M38 36L42 40L52 30"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: 'Derma',
            subtitle: 'Tested',
        },
        {
            icon: (
                <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="feature-icon"
                >
                    <path
                        d="M32 48C32 48 20 40 20 28C20 20 24 12 32 12C40 12 44 20 44 28C44 40 32 48 32 48Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M32 12C32 12 28 16 24 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M32 12C32 12 36 16 40 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M28 28C28 28 30 32 32 32C34 32 36 28 36 28"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: '100%',
            subtitle: 'Vegan',
        },
    ]

    return (
        <section className="why-trust-us">
            <h2 className="why-trust-us-title">Why Trust Us?</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
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
