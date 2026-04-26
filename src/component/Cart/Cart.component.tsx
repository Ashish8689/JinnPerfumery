'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { SOCIAL_LINKS } from '@/constant/links.constant'
import { getFormatPrice } from '@/utils/common.utils'
import './Cart.css'

const Cart: React.FC = () => {
    const { items, totalCount, totalPrice, removeItem, updateQty, clearCart } =
        useCart()

    const handleBuyNow = (): void => {
        const lines = items.map(
            (i) =>
                `• *${i.product.name}* (${i.size.toUpperCase()}) × ${i.quantity} — ${getFormatPrice(i.product.price[i.size as '8ml' | '50ml'].salePrice * i.quantity)}`,
        )
        const message = `Hi! I'd like to order the following:\n\n${lines.join('\n')}\n\n*Total: ${getFormatPrice(totalPrice)}*`
        const url = `${SOCIAL_LINKS.WHATSAPP}?text=${encodeURIComponent(message)}`
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    if (items.length === 0) {
        return (
            <div className="cart-page">
                <div className="container">
                    <div className="cart-empty">
                        <svg
                            fill="none"
                            height="64"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width="64"
                        >
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <path d="M16 10a4 4 0 01-8 0" />
                        </svg>
                        <h2>Your cart is empty</h2>
                        <p>
                            Discover our fragrances and add something you love.
                        </p>
                        <Link className="cart-shop-btn" href="/">
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="cart-page">
            <div className="container">
                <div className="cart-header">
                    <h1 className="cart-title">Your Cart</h1>
                    <span className="cart-count">
                        {totalCount} {totalCount === 1 ? 'item' : 'items'}
                    </span>
                </div>

                <div className="cart-layout">
                    {/* Items list */}
                    <div className="cart-items">
                        {items.map((item) => {
                            const { salePrice, originalPrice } =
                                item.product.price[item.size as '8ml' | '50ml']
                            const lineTotal = salePrice * item.quantity

                            return (
                                <div
                                    className="cart-item"
                                    key={`${item.product.id}-${item.size}`}
                                >
                                    <div className="cart-item-top">
                                        <div className="cart-item-image-wrap">
                                            <Image
                                                alt={item.product.name}
                                                className="cart-item-image"
                                                height={110}
                                                src={
                                                    item.product.image[
                                                        item.size as
                                                            | '8ml'
                                                            | '50ml'
                                                    ]
                                                }
                                                width={88}
                                            />
                                        </div>

                                        <div className="cart-item-info">
                                            <Link
                                                className="cart-item-name"
                                                href={`/product/${item.product.id}`}
                                            >
                                                {item.product.name}
                                            </Link>
                                            <span className="cart-item-size">
                                                {item.size.toUpperCase()}
                                            </span>
                                            <div className="cart-item-price-row">
                                                <span className="cart-item-sale">
                                                    {getFormatPrice(salePrice)}
                                                </span>
                                                {originalPrice > salePrice && (
                                                    <span className="cart-item-original">
                                                        {getFormatPrice(
                                                            originalPrice,
                                                        )}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cart-item-actions">
                                        <div className="cart-qty">
                                            <button
                                                aria-label="Decrease quantity"
                                                className="cart-qty-btn"
                                                onClick={() =>
                                                    updateQty(
                                                        item.product.id,
                                                        item.size,
                                                        item.quantity - 1,
                                                    )
                                                }
                                            >
                                                −
                                            </button>
                                            <span className="cart-qty-value">
                                                {item.quantity}
                                            </span>
                                            <button
                                                aria-label="Increase quantity"
                                                className="cart-qty-btn"
                                                onClick={() =>
                                                    updateQty(
                                                        item.product.id,
                                                        item.size,
                                                        item.quantity + 1,
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                        <span className="cart-item-line-total">
                                            {getFormatPrice(lineTotal)}
                                        </span>
                                        <button
                                            aria-label="Remove item"
                                            className="cart-remove-btn"
                                            onClick={() =>
                                                removeItem(
                                                    item.product.id,
                                                    item.size,
                                                )
                                            }
                                        >
                                            <svg
                                                fill="none"
                                                height="18"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="18"
                                            >
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                                                <path d="M10 11v6M14 11v6" />
                                                <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )
                        })}

                        <button className="cart-clear-btn" onClick={clearCart}>
                            Clear cart
                        </button>
                    </div>

                    {/* Order summary */}
                    <div className="cart-summary">
                        <h2 className="cart-summary-title">Order Summary</h2>

                        <div className="cart-summary-rows">
                            {items.map((item) => (
                                <div
                                    className="cart-summary-row"
                                    key={`${item.product.id}-${item.size}`}
                                >
                                    <span className="cart-summary-label">
                                        {item.product.name}{' '}
                                        <span className="cart-summary-size">
                                            ({item.size.toUpperCase()} ×{' '}
                                            {item.quantity})
                                        </span>
                                    </span>
                                    <span className="cart-summary-value">
                                        {getFormatPrice(
                                            item.product.price[
                                                item.size as '8ml' | '50ml'
                                            ].salePrice * item.quantity,
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary-divider" />

                        <div className="cart-summary-total-row">
                            <span>Total</span>
                            <span className="cart-summary-total">
                                {getFormatPrice(totalPrice)}
                            </span>
                        </div>

                        <p className="cart-summary-note">
                            Shipping calculated at checkout via WhatsApp.
                        </p>

                        <button
                            className="cart-whatsapp-btn"
                            onClick={handleBuyNow}
                        >
                            <svg
                                fill="currentColor"
                                height="20"
                                viewBox="0 0 24 24"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Buy Now via WhatsApp
                        </button>

                        <Link className="cart-continue-link" href="/">
                            ← Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
