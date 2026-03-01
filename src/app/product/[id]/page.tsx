import { notFound } from 'next/navigation'
import { PRODUCT_LIST } from '@/constant/productList.constant'
import { PRODUCT_REVIEWS } from '@/constant/reviews.constant'
import ProductDetail from '@/component/ProductDetail/ProductDetail.component'

interface ProductPageProps {
    params: Promise<{ id: string }>
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
    return PRODUCT_LIST.map((product) => ({
        id: String(product.id),
    }))
}

export default async function ProductPage({
    params,
}: ProductPageProps): Promise<React.JSX.Element> {
    const { id } = await params
    const product = PRODUCT_LIST.find((p) => String(p.id) === id)

    if (!product) {
        notFound()
    }

    const others = PRODUCT_LIST.filter((p) => p.id !== product.id)
    // Deterministic shuffle seeded on product id to avoid Math.random in render
    const related = others
        .map((p) => ({ p, sort: (p.id * 2654435761) % PRODUCT_LIST.length }))
        .sort((a, b) => a.sort - b.sort)
        .slice(0, 4)
        .map(({ p }) => p)

    const reviews = PRODUCT_REVIEWS[product.id] ?? []

    return (
        <ProductDetail product={product} related={related} reviews={reviews} />
    )
}
