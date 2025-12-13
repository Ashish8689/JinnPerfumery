import React from 'react'
import './TopBanner.styles.css'

const TopBanner: React.FC = () => {
    return (
        <div className="top-banner-wrapper">
            {/* Promotional Banner */}
            <div className="promo-banner">
                <p className="promo-text">
                    NO CODE NEEDED. LIMITED TIME ONLY.
                </p>
            </div>

            {/* Features Bar */}
            <div className="features-bar">
                <div className="features-container">
                    <div className="feature-item">
                        <svg
                            className="feature-icon"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <rect x="1" y="3" width="15" height="13" rx="2" />
                            <path d="M16 8V13H22V11L16 8Z" />
                            <circle cx="5.5" cy="15.5" r="2.5" />
                            <circle cx="12.5" cy="15.5" r="2.5" />
                        </svg>
                        <span className="feature-text">Free Shipping</span>
                    </div>

                    <div className="feature-item">
                        <svg
                            className="feature-icon"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                            <path d="M3 3v5h5" />
                        </svg>
                        <span className="feature-text">Easy Returns</span>
                    </div>

                    <div className="feature-item">
                        <svg
                            className="feature-icon"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <rect x="2" y="5" width="20" height="14" rx="2" />
                            <path d="M2 10h20" />
                            <circle cx="8" cy="15" r="1" />
                            <circle cx="12" cy="15" r="1" />
                            <circle cx="16" cy="15" r="1" />
                        </svg>
                        <span className="feature-text">COD Available</span>
                    </div>

                    <div className="feature-item">
                        <svg
                            className="feature-icon"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <rect x="1" y="3" width="15" height="13" rx="2" />
                            <path d="M16 8V13H22V11L16 8Z" />
                            <circle cx="5.5" cy="15.5" r="2.5" />
                            <circle cx="12.5" cy="15.5" r="2.5" />
                            <path d="M6 8h6M6 11h4" strokeLinecap="round" />
                        </svg>
                        <span className="feature-text">Secure Payments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBanner
