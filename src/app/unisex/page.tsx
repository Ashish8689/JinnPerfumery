import type { Metadata } from 'next'
import React from 'react'
import ProductListing from '@/component/ProductListing/ProductListing.component'
import { PRODUCT_LIST } from '@/constant/productList.constant'
import { Category } from '@/constant/common.constant'

export const metadata: Metadata = {
    title: 'Unisex Fragrances | JINN Perfumery',
    description:
        'Gender-free, versatile fragrances for everyone. Long-lasting inspired scents with vegan oils — affordable luxury for all.',
}

export default function UnisexPage(): React.JSX.Element {
    const unisexProducts = PRODUCT_LIST.filter(
        (product) => product.category === Category.Unisex,
    )

    return (
        <ProductListing
            bannerImage="/images/banner/men.webp"
            products={unisexProducts}
            title="For Everyone"
        />
    )
}
