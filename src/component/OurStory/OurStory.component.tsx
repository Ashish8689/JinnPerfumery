import React from 'react'
import Image from 'next/image'
import './OurStory.styles.css'

export default function OurStory(): React.JSX.Element {
    return (
        <section className="our-story">
            <div className="our-story__text-block">
                <h2 className="our-story__title">OUR STORY</h2>
                <p className="our-story__description">
                    At JINN Perfumery, our journey began with a simple yet
                    powerful vision: to make luxury fragrance accessible to
                    everyone. We believe that smelling rich isn’t about the
                    price tag — it’s about the feeling, the confidence, and the
                    unforgettable presence you leave behind.
                    <br /> <br />
                    JINN was created for those who desire premium, high-quality
                    inspired fragrances without overpaying. We craft
                    long-lasting perfumes inspired by designer and niche scents,
                    delivering the richness, elegance, and performance of luxury
                    at an affordable price. <br /> <br />
                    Every bottle is made using vegan, skin-safe oils sourced
                    from leading suppliers in Switzerland, Spain, France, and
                    the UAE. This careful selection ensures exceptional quality,
                    depth, and lasting power — so your fragrance lingers as
                    beautifully as your impression. <br /> <br />
                    Like an invisible signature, JINN enhances your aura and
                    defines your presence. Our perfumes are designed to make you
                    feel confident, refined, and unforgettable. <br /> <br />
                    Because true luxury isn’t about what you spend — it’s about
                    how you feel when you walk into a room.
                </p>
            </div>
            <div className="our-story__image-wrapper">
                <Image
                    fill
                    alt="The Gift of Indian Royalty — Neesh Est. India 1904"
                    className="our-story__image"
                    src="/images/banner/our-story-banner.webp"
                />
            </div>
        </section>
    )
}
