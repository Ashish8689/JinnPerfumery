'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import './ProductReviews.css'

export interface Review {
    id: number
    rating: number
    reviewerName: string
    title: string
    body: string
}

interface ProductReviewsProps {
    reviews: Review[]
    pageSize?: number
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="pr-stars" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
            <span
                className={i < rating ? 'pr-star filled' : 'pr-star empty'}
                key={i}
            >
                ★
            </span>
        ))}
    </div>
)

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="pr-card">
        <StarRating rating={review.rating} />
        <p className="pr-reviewer">{review.reviewerName}</p>
        <p className="pr-title">{review.title}</p>
        <p className="pr-body">{review.body}</p>
    </div>
)

const ProductReviews: React.FC<ProductReviewsProps> = ({
    reviews,
    pageSize = 6,
}) => {
    const [visibleCount, setVisibleCount] = useState(pageSize)

    if (!reviews || reviews.length === 0) return null

    const visibleReviews = reviews.slice(0, visibleCount)
    const hasMore = visibleCount < reviews.length

    return (
        <section className="pr-section">
            <h2 className="pr-heading">What Our Customers Say</h2>

            {/* Mobile: Swiper carousel */}
            <div className="pr-mobile-carousel">
                <Swiper
                    loop
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    className="pr-swiper"
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    spaceBetween={20}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <ReviewCard review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop: masonry-style grid with load more */}
            <div className="pr-desktop-grid">
                <div className="pr-grid">
                    {visibleReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                {hasMore && (
                    <div className="pr-load-more-wrap">
                        <button
                            className="pr-load-more-btn"
                            onClick={() =>
                                setVisibleCount((prev) => prev + pageSize)
                            }
                        >
                            Load More Reviews
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProductReviews
