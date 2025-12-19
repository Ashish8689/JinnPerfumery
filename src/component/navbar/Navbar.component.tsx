'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import './navbar.css'

interface MenuItem {
    label: string
    href?: string
    submenu?: MenuItem[]
}

const menuItems: MenuItem[] = [
    {
        label: 'Shop by Collection',
        submenu: [
            { label: 'Bureau Collection', href: '/collection/bureau' },
            { label: 'Luxe Collection', href: '/collection/luxe' },
            { label: 'Haute Collection', href: '/collection/haute' },
            { label: 'Miss Neesh Collection', href: '/collection/miss-neesh' },
        ],
    },
    { label: 'Pour Homme', href: '/pour-homme' },
    { label: 'Pour Femme', href: '/pour-femme' },
    {
        label: 'Trial Sets',
        submenu: [
            { label: 'Starter Set', href: '/trial-sets/starter' },
            { label: 'Premium Set', href: '/trial-sets/premium' },
            { label: 'Deluxe Set', href: '/trial-sets/deluxe' },
        ],
    },
    { label: 'My Closet (Customizable)', href: '/my-closet' },
    { label: 'NEESH Gift Sets', href: '/gift-sets' },
    { label: 'Our Story', href: '/our-story' },
]

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen)
        setActiveSubmenu(null)
    }

    const handleSubmenuClick = (label: string): void => {
        setActiveSubmenu(activeSubmenu === label ? null : label)
    }

    const handleBackClick = (): void => {
        setActiveSubmenu(null)
    }

    return (
        <>
            <nav className="navbar">
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

                    <Link className="navbar-logo" href="/">
                        <span className="logo-icon">JN</span>
                        <span className="logo-text">
                            JINN
                            <br />
                            PERFUMES
                        </span>
                    </Link>
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
                    {/* Main Menu */}
                    <div
                        className={`menu-panel ${activeSubmenu ? 'slide-out' : ''}`}
                    >
                        <ul className="menu-list">
                            {menuItems.map((item) => (
                                <li className="menu-item" key={item.label}>
                                    {item.submenu ? (
                                        <button
                                            className="menu-link submenu-trigger"
                                            onClick={() =>
                                                handleSubmenuClick(item.label)
                                            }
                                        >
                                            {item.label}
                                            <svg
                                                className="arrow-icon"
                                                fill="none"
                                                height="20"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                width="20"
                                            >
                                                <path d="M9 18l6-6-6-6" />
                                            </svg>
                                        </button>
                                    ) : (
                                        <Link
                                            className="menu-link"
                                            href={item.href || '#'}
                                            onClick={toggleMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Submenu Panels */}
                    {menuItems.map(
                        (item) =>
                            item.submenu && (
                                <div
                                    className={`submenu-panel ${activeSubmenu === item.label ? 'active' : ''}`}
                                    key={item.label}
                                >
                                    <button
                                        className="submenu-back"
                                        onClick={handleBackClick}
                                    >
                                        <svg
                                            fill="none"
                                            height="20"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            width="20"
                                        >
                                            <path d="M15 18l-6-6 6-6" />
                                        </svg>
                                        {item.label}
                                    </button>
                                    <ul className="submenu-list">
                                        {item.submenu.map((subitem) => (
                                            <li
                                                className="submenu-item"
                                                key={subitem.label}
                                            >
                                                <Link
                                                    className="submenu-link"
                                                    href={subitem.href || '#'}
                                                    onClick={toggleMenu}
                                                >
                                                    {subitem.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ),
                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar
