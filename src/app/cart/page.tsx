import type { Metadata } from 'next'
import React from 'react'
import Cart from '@/component/Cart/Cart.component'

export const metadata: Metadata = {
    title: 'Your Cart',
    description:
        'Review your selected fragrances and place your order via WhatsApp.',
}

export default function CartPage(): React.JSX.Element {
    return <Cart />
}
