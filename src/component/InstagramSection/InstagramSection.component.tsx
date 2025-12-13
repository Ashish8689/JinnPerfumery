'use client'

import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import './InstagramSection.styles.css'

const instagramPosts = [
    {
        id: 1,
        image: '/instagram/post1.jpg',
        alt: 'Perfume Post 1',
    },
    {
        id: 2,
        image: '/instagram/post2.jpg',
        alt: 'Perfume Post 2',
    },
    {
        id: 3,
        image: '/instagram/post3.jpg',
        alt: 'Perfume Post 3',
    },
    {
        id: 4,
        image: '/instagram/post4.jpg',
        alt: 'Perfume Post 4',
    },
    {
        id: 5,
        image: '/instagram/post5.jpg',
        alt: 'Perfume Post 5',
    },
    {
        id: 6,
        image: '/instagram/post1.jpg',
        alt: 'Perfume Post 1',
    },
    {
        id: 7,
        image: '/instagram/post2.jpg',
        alt: 'Perfume Post 2',
    },
    {
        id: 8,
        image: '/instagram/post3.jpg',
        alt: 'Perfume Post 3',
    },
    {
        id: 9,
        image: '/instagram/post4.jpg',
        alt: 'Perfume Post 4',
    },
    {
        id: 10,
        image: '/instagram/post5.jpg',
        alt: 'Perfume Post 5',
    },
]

export default function InstagramSection(): React.JSX.Element {
    const [open, setOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const slides = instagramPosts.map((post) => ({
        src: post.image,
        alt: post.alt,
    }))

    return (
        <section className="instagram-section">
            <div className="instagram-container">
                <h2 className="instagram-title">Follow us on Instagram</h2>
                <p className="instagram-subtitle">
                    Join our community for daily inspiration and a closer look
                    at our creations
                </p>

                <div className="instagram-grid">
                    {instagramPosts.map((post, index) => (
                        <div
                            className="instagram-post"
                            key={post.id}
                            onClick={() => {
                                setPhotoIndex(index)
                                setOpen(true)
                            }}
                        >
                            <img alt={post.alt} src={post.image} />
                            <div className="instagram-overlay">
                                <svg
                                    fill="none"
                                    height="40"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="40"
                                >
                                    <rect
                                        height="20"
                                        rx="5"
                                        ry="5"
                                        width="20"
                                        x="2"
                                        y="2"
                                    />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line
                                        x1="17.5"
                                        x2="17.51"
                                        y1="6.5"
                                        y2="6.5"
                                    />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Lightbox
                close={() => setOpen(false)}
                index={photoIndex}
                on={{
                    view: ({ index }) => setPhotoIndex(index),
                }}
                open={open}
                slides={slides}
            />
        </section>
    )
}
