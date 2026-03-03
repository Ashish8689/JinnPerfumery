'use client'

import React, { useState } from 'react'
import { SOCIAL_LINK_OPTIONS, SOCIAL_LINKS } from '@/constant/links.constant'
import './contact.css'

export default function ContactPage(): React.JSX.Element {
    const [form, setForm] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (): void => {
        const text =
            `*New Contact Enquiry*%0A` +
            `Name: ${form.name}%0A` +
            `Email: ${form.email}%0A` +
            `Mobile: ${form.mobile}%0A` +
            `Message: ${form.message}`

        const phone = SOCIAL_LINKS.WHATSAPP.replace('https://wa.me/', '')
        window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
    }

    return (
        <div className="contact-page">
            <div className="container">
                <div className="contact-wrapper">
                    {/* Left - Info */}
                    <div className="contact-info">
                        <h1>Contact Us</h1>
                        <p>
                            Get in touch with us! Your satisfaction is our
                            priority, and we&apos;re just a message away.
                        </p>

                        <div className="contact-details">
                            <a href="tel:+918885978692">
                                <svg
                                    className="contact-icon"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                +91 8885978692
                            </a>
                            <a href="mailto:info@jinnperfumery.com">
                                <svg
                                    className="contact-icon"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                info@jinnperfumery.com
                            </a>
                        </div>

                        <div className="contact-socials">
                            {SOCIAL_LINK_OPTIONS.map(({ icon, link }) => {
                                const Icon = icon

                                return (
                                    <a
                                        href={link}
                                        key={link}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <Icon className="social-icon" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="contact-form-wrapper">
                        <input
                            className="contact-input"
                            name="name"
                            placeholder="Name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                        />
                        <input
                            className="contact-input"
                            name="email"
                            placeholder="E-mail"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        <input
                            className="contact-input"
                            name="mobile"
                            placeholder="Mobile Number"
                            type="tel"
                            value={form.mobile}
                            onChange={handleChange}
                        />
                        <textarea
                            className="contact-textarea"
                            name="message"
                            placeholder="Message"
                            value={form.message}
                            onChange={handleChange}
                        />
                        <button
                            className="contact-submit"
                            type="button"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
