import React from 'react'
import './TopBanner.styles.css'
import ShippingIcon from '../../assets/svg/shipping.svg'
import EasyReturnIcon from '../../assets/svg/easy-return.svg'
import CODIcon from '../../assets/svg/cod.svg'
import SecureIcon from '../../assets/svg/secure-payment.svg'

const TopBanner: React.FC = () => {
    return (
        <div className="top-banner-wrapper">
            {/* Promotional Banner */}
            {/* <div className="promo-banner">
                <p className="promo-text">NO CODE NEEDED. LIMITED TIME ONLY.</p>
            </div> */}

            {/* Features Bar */}
            <div className="features-bar">
                <div className="features-container">
                    <div className="feature-item">
                        <ShippingIcon className="feature-icon" />
                        <span className="feature-text">Free Shipping</span>
                    </div>

                    <div className="feature-item">
                        <EasyReturnIcon className="feature-icon" />
                        <span className="feature-text">Easy Returns</span>
                    </div>

                    <div className="feature-item">
                        <CODIcon className="feature-icon" />
                        <span className="feature-text">COD Available</span>
                    </div>

                    <div className="feature-item">
                        <SecureIcon className="feature-icon" />
                        <span className="feature-text">Secure Payments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBanner
