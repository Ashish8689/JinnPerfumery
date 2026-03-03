'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
    PRODUCT_LIST,
    Product,
    ProductVolumeSize,
} from '@/constant/productList.constant'
import { SOCIAL_LINKS } from '@/constant/links.constant'
import { getFormatPrice } from '@/utils/common.utils'
import './combos.css'
import { MAX_COMBO_SELECTION, COMBO_PRICE } from '@/constant/common.constant'

const COMBO_SIZE = ProductVolumeSize.EightML

export default function CombosPage(): React.JSX.Element {
    const [selected, setSelected] = useState<Product[]>([])

    const toggleProduct = (product: Product): void => {
        const isSelected = selected.some((p) => p.id === product.id)

        if (isSelected) {
            setSelected(selected.filter((p) => p.id !== product.id))
        } else if (selected.length < MAX_COMBO_SELECTION) {
            setSelected([...selected, product])
        }
    }

    const getSelectionIndex = (product: Product): number => {
        return selected.findIndex((p) => p.id === product.id)
    }

    const handleOrder = (): void => {
        const productLines = selected
            .map(
                (p, i) => `${i + 1}. *${p.name}* (${COMBO_SIZE.toUpperCase()})`,
            )
            .join('\n')

        const message =
            `Hi! I'd like to order a combo of ${MAX_COMBO_SELECTION} perfumes (8ml each):\n\n` +
            `${productLines}\n\n` +
            `*Combo Price: ${getFormatPrice(COMBO_PRICE)}*`

        window.open(
            `${SOCIAL_LINKS.WHATSAPP}?text=${encodeURIComponent(message)}`,
            '_blank',
            'noopener,noreferrer',
        )
    }

    const isReady = selected.length === MAX_COMBO_SELECTION

    return (
        <div className="combos-page">
            <div className="container">
                {/* Header */}
                <div className="combos-header">
                    <h1>Build Your Combo for RS 399/-</h1>
                    <p>
                        Pick any {MAX_COMBO_SELECTION} fragrances and place your
                        order
                    </p>
                </div>

                {/* Order Summary */}
                <div className="combos-summary">
                    <div className="combos-summary-slots">
                        {Array.from({ length: MAX_COMBO_SELECTION }).map(
                            (_, i) => {
                                const product = selected[i]

                                return (
                                    <div
                                        className={`summary-slot ${product ? 'filled' : ''}`}
                                        key={`pick-${i + 1}`}
                                    >
                                        {product ? (
                                            <Image
                                                alt={product.name}
                                                className="summary-slot-img"
                                                height={40}
                                                src={product.image[COMBO_SIZE]}
                                                width={40}
                                            />
                                        ) : (
                                            <div className="summary-slot-placeholder">
                                                +
                                            </div>
                                        )}
                                        <div className="summary-slot-info">
                                            <span className="summary-slot-label">
                                                Pick {i + 1}
                                            </span>
                                            {product ? (
                                                <span className="summary-slot-name">
                                                    {product.name}
                                                </span>
                                            ) : (
                                                <span className="summary-slot-empty">
                                                    Not selected
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )
                            },
                        )}
                    </div>

                    <div className="combos-summary-right">
                        {isReady && (
                            <div className="combos-total">
                                <p className="combos-total-label">
                                    Combo Price
                                </p>
                                <p className="combos-total-price">
                                    {getFormatPrice(COMBO_PRICE)}
                                </p>
                            </div>
                        )}

                        <button
                            className="combos-order-btn"
                            disabled={!isReady}
                            type="button"
                            onClick={handleOrder}
                        >
                            Order on WhatsApp
                        </button>
                    </div>
                </div>

                {!isReady && (
                    <p className="combos-hint">
                        {MAX_COMBO_SELECTION - selected.length} more{' '}
                        {MAX_COMBO_SELECTION - selected.length === 1
                            ? 'fragrance'
                            : 'fragrances'}{' '}
                        to go
                    </p>
                )}

                {/* Product Grid */}
                <div className="combos-grid">
                    {PRODUCT_LIST.map((product) => {
                        const idx = getSelectionIndex(product)
                        const isSelected = idx !== -1
                        const isDisabled =
                            !isSelected &&
                            selected.length >= MAX_COMBO_SELECTION

                        return (
                            <button
                                className={`combo-card ${isSelected ? 'selected' : ''}`}
                                disabled={isDisabled}
                                key={product.id}
                                style={{ opacity: isDisabled ? 0.45 : 1 }}
                                type="button"
                                onClick={() => toggleProduct(product)}
                            >
                                {isSelected && (
                                    <div className="combo-card-number">
                                        {idx + 1}
                                    </div>
                                )}

                                {isSelected && (
                                    <div className="combo-card-badge">
                                        <svg
                                            fill="none"
                                            strokeWidth={2.5}
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 13l4 4L19 7"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                )}

                                <div className="combo-image-container">
                                    <Image
                                        fill
                                        alt={product.name}
                                        className="combo-image"
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        src={product.image[COMBO_SIZE]}
                                    />
                                </div>

                                <div className="combo-card-details">
                                    <p className="combo-card-name">
                                        {product.name}
                                    </p>
                                    <p className="combo-card-price">
                                        {getFormatPrice(
                                            product.price[COMBO_SIZE].salePrice,
                                        )}
                                    </p>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
