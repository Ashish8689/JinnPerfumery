import React from 'react'
import ProductListing from '@/component/ProductListing/ProductListing.component'
import { PRODUCT_LIST } from '@/constant/productList.constant'
import { Category } from '@/constant/common.constant'

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
