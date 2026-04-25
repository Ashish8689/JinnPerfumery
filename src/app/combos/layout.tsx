import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Build Your Combo | JINN Perfumery',
    description:
        'Pick any 3 fragrances and get them as a combo for just ₹399. Mix and match from our full collection of inspired perfumes.',
}

export default function CombosLayout({
    children,
}: {
    children: React.ReactNode
}): React.JSX.Element {
    return <>{children}</>
}
