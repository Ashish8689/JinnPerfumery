import React from 'react'
import './Testimonials.styles.css'

interface Testimonial {
    id: number
    type: 'text' | 'image'
    content?: string
    customerName: string
    location: string
    verified?: boolean
    image?: string
    backgroundColor?: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        type: 'text',
        content:
            "I wore this on my wedding day and now every time I spray it, I'm right back in that moment. It's not just perfume, it's pure nostalgia.",
        customerName: 'Megha R.',
        location: 'Delhi',
        verified: true,
        backgroundColor: '#4a5568',
    },
    {
        id: 2,
        type: 'image',
        customerName: 'Priya S.',
        location: 'Mumbai',
        image: '/testimonials/customer1.jpg',
    },
    {
        id: 3,
        type: 'text',
        content:
            "I recently tried Summer Afternoon and it's very light, breezy scent that keeps me feeling fresh all day",
        customerName: 'Ayeshkant',
        location: 'Chennai',
        verified: true,
        backgroundColor: '#4a5568',
    },
    {
        id: 4,
        type: 'image',
        customerName: 'Rahul K.',
        location: 'Bangalore',
        image: '/testimonials/customer2.jpg',
    },
]

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <p className="testimonials-label">TESTIMONIALS</p>
                <h2 className="testimonials-title">Voices of HIRA</h2>

                <div className="testimonials-badge">
                    <div className="badge-avatars">
                        <img
                            src="/testimonials/avatar1.jpg"
                            alt="Customer"
                            className="badge-avatar"
                        />
                        <img
                            src="/testimonials/avatar2.jpg"
                            alt="Customer"
                            className="badge-avatar"
                        />
                        <img
                            src="/testimonials/avatar3.jpg"
                            alt="Customer"
                            className="badge-avatar"
                        />
                        <span className="badge-count">1L+</span>
                    </div>
                    <div className="badge-text">
                        <p>THEY BELIEVE IN US. ALL</p>
                        <p>100,000 OF THEM.</p>
                    </div>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className={`testimonial-card ${testimonial.type === 'text' ? 'text-card' : 'image-card'}`}
                            style={
                                testimonial.backgroundColor
                                    ? {
                                          backgroundColor:
                                              testimonial.backgroundColor,
                                      }
                                    : {}
                            }
                        >
                            {testimonial.type === 'text' ? (
                                <>
                                    <div className="quote-icon">"</div>
                                    <p className="testimonial-content">
                                        {testimonial.content}
                                    </p>
                                    <div className="testimonial-author">
                                        <span>
                                            – {testimonial.customerName},{' '}
                                            {testimonial.location}
                                        </span>
                                        {testimonial.verified && (
                                            <svg
                                                className="verified-icon"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="#3b82f6"
                                            >
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                <path
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    fill="none"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="image-card-content">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.customerName}
                                        className="testimonial-image"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
