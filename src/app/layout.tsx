import type { Metadata } from 'next'
import { Montserrat, Rouge_Script } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/navbar/Navbar.component'
import Footer from '@/component/footer/Footer.component'
import ScrollTop from '@/component/scrollTop/ScrollTop.component'
import React from 'react'

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
})

const rougeScript = Rouge_Script({
    variable: '--font-alex-brush',
    subsets: ['latin'],
    weight: ['400'],
})

export const metadata: Metadata = {
    metadataBase: new URL('https://jinnperfumery.com'),
    title: {
        default: 'JINN Perfumery | Luxury Fragrances at Affordable Prices',
        template: '%s | JINN Perfumery',
    },
    description:
        'JINN Perfumery offers premium, long-lasting inspired fragrances crafted with vegan, skin-safe oils from Switzerland, Spain, France, and the UAE. Smell rich without the luxury price tag.',
    keywords: [
        'perfume',
        'fragrance',
        'luxury perfume',
        'affordable perfume',
        'inspired fragrance',
        'JINN Perfumery',
        'long-lasting perfume',
        'designer inspired',
    ],
    openGraph: {
        title: 'JINN Perfumery | Luxury Fragrances at Affordable Prices',
        description:
            'Premium, long-lasting inspired fragrances crafted with vegan, skin-safe oils. Smell confident, refined, and unforgettable.',
        siteName: 'JINN Perfumery',
        type: 'website',
        url: 'https://jinnperfumery.com',
    },
    alternates: {
        canonical: 'https://jinnperfumery.com',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>): React.JSX.Element {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} ${rougeScript.variable}`}>
                <Navbar />
                {children}
                <Footer />
                <ScrollTop />
            </body>
        </html>
    )
}
