import type { Metadata } from 'next'
import React from 'react'
import ProductListing from '@/component/ProductListing/ProductListing.component'
import { PRODUCT_LIST } from '@/constant/productList.constant'
import { Category } from '@/constant/common.constant'

export const metadata: Metadata = {
    title: 'Perfumes For Him | JINN Perfumery',
    description:
        'Explore our collection of bold, long-lasting inspired fragrances for men. Premium vegan oils at affordable prices — order on WhatsApp.',
}

export default function MalePage(): React.JSX.Element {
    const maleProducts = PRODUCT_LIST.filter(
        (product) => product.category === Category.Men,
    )

    return (
        <ProductListing
            bannerImage="/images/banner/men.webp"
            products={maleProducts}
            title="For Him"
        />
    )
}
