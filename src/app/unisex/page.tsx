import React from 'react'
import ProductListing from '@/component/ProductListing/ProductListing.component'
import { PRODUCT_LIST } from '@/constant/productList.constant'
import { Category } from '@/constant/common.constant'

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
