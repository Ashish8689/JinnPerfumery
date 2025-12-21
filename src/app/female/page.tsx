import React from 'react'
import ProductListing from '@/component/ProductListing/ProductListing.component'
import { PRODUCT_LIST } from '@/constant/productList.constant'
import { Category } from '@/constant/common.constant'

export default function FemalePage(): React.JSX.Element {
    const femaleProducts = PRODUCT_LIST.filter(
        (product) => product.category === Category.Women,
    )

    return (
        <ProductListing
            bannerImage="/images/banner/women.webp"
            products={femaleProducts}
            title="For Her"
        />
    )
}
