'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import './navbar.css'
import Image from 'next/image'
import { NAVBAR_MENU_ITEMS } from '@/constant/navbar.constant'

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = (): void => setIsScrolled(window.scrollY > 10)

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            {/* <div className="discount-banner">
                <p className="discount-banner__text">Extra Discount On Upi Payments</p>
            </div> */}
            <nav className={`navbar${isScrolled ? ' navbar--scrolled' : ''}`}>
                <div className="navbar-container">
                    <button
                        aria-label="Toggle menu"
                        className="menu-toggle"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <svg
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <line x1="18" x2="6" y1="6" y2="18" />
                                <line x1="6" x2="18" y1="6" y2="18" />
                            </svg>
                        ) : (
                            <svg
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                        )}
                        <span className="menu-label">Menu</span>
                    </button>

                    <div className="logo-container">
                        <Link className="navbar-logo" href="/">
                            <Image
                                fill
                                priority
                                alt="Jinn Perfumery"
                                objectFit="contain"
                                src="/images/logo.png"
                            />
                        </Link>
                    </div>

                    <ul className="desktop-menu">
                        {NAVBAR_MENU_ITEMS.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href || '#'}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Sidebar Menu */}
            <button
                aria-label="Close menu"
                className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`}
                type="button"
                onClick={toggleMenu}
            />
            <div className={`sidebar ${isMenuOpen ? 'active' : ''}`}>
                <div className="sidebar-content">
                    <button
                        aria-label="Close menu"
                        className="sidebar-close"
                        onClick={toggleMenu}
                    >
                        <svg
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                        >
                            <line x1="18" x2="6" y1="6" y2="18" />
                            <line x1="6" x2="18" y1="6" y2="18" />
                        </svg>
                    </button>
                    <div className="menu-panel">
                        <ul className="menu-list">
                            {NAVBAR_MENU_ITEMS.map((item) => (
                                <li className="menu-item" key={item.label}>
                                    <Link
                                        className="menu-link"
                                        href={item.href || '#'}
                                        onClick={toggleMenu}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
