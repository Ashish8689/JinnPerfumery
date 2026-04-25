import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Contact Us | JINN Perfumery',
    description:
        'Get in touch with JINN Perfumery. Reach us on WhatsApp, phone, or email — we\'re happy to help with orders, queries, or customisations.',
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}): React.JSX.Element {
    return <>{children}</>
}
