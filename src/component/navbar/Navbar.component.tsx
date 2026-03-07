'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import './navbar.css'
import Image from 'next/image'
import { NAVBAR_MENU_ITEMS } from '@/constant/navbar.constant'
import { PRODUCT_LIST } from '@/constant/productList.constant'
import type { Product } from '@/constant/productList.constant'

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const searchInputRef = useRef<HTMLInputElement>(null)
    const mobileSearchInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isSearchOpen) {
            setTimeout(() => mobileSearchInputRef.current?.focus(), 50)
        }
    }, [isSearchOpen])
    const router = useRouter()

    useEffect(() => {
        const handleScroll = (): void => setIsScrolled(window.scrollY > 10)

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                setIsSearchOpen(false)
                setSearchQuery('')
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen)
    }

    const filteredProducts: Product[] = searchQuery.trim()
        ? PRODUCT_LIST.filter(
              (p) =>
                  p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  p.description
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()),
          )
        : []

    const handleProductSelect = (id: number): void => {
        setSearchQuery('')
        setIsSearchOpen(false)
        router.push(`/product/${id}`)
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
                    </button>

                    <div className="logo-container">
                        <Link className="navbar-logo" href="/">
                            <Image
                                fill
                                priority
                                alt="Jinn Perfumery"
                                objectFit="contain"
                                src="/images/logo-no-bg.png"
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

                    {/* Inline Search Bar */}
                    <div
                        className={`navbar-search${isSearchOpen ? ' navbar-search--active' : ''}`}
                        tabIndex={-1}
                        onBlur={(e) => {
                            if (
                                !e.currentTarget.contains(
                                    e.relatedTarget as Node,
                                )
                            ) {
                                setIsSearchOpen(false)
                                setSearchQuery('')
                            }
                        }}
                    >
                        <div className="navbar-search-inner">
                            <svg
                                className="navbar-search-icon"
                                fill="none"
                                height="18"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="18"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" x2="16.65" y1="21" y2="16.65" />
                            </svg>
                            <input
                                aria-label="Search products"
                                className="navbar-search-input"
                                placeholder="Search perfumes..."
                                ref={searchInputRef}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setIsSearchOpen(true)
                                    setSearchQuery(e.target.value)
                                }}
                                onFocus={() => setIsSearchOpen(true)}
                            />
                            <button
                                aria-label="Clear search"
                                className={`navbar-search-clear${searchQuery ? '' : ' navbar-search-clear--hidden'}`}
                                tabIndex={searchQuery ? 0 : -1}
                                onClick={() => {
                                    setSearchQuery('')
                                    searchInputRef.current?.focus()
                                }}
                            >
                                &times;
                            </button>
                        </div>

                        {isSearchOpen && searchQuery.trim() && (
                            <div className="search-dropdown">
                                {filteredProducts.length > 0 ? (
                                    <ul className="search-results">
                                        {filteredProducts.map((product) => (
                                            <li
                                                className="search-result-item"
                                                key={product.id}
                                            >
                                                <button
                                                    className="search-result-btn"
                                                    onMouseDown={(e) => {
                                                        e.preventDefault()
                                                        handleProductSelect(
                                                            product.id,
                                                        )
                                                    }}
                                                >
                                                    <div className="search-result-image">
                                                        <Image
                                                            alt={product.name}
                                                            height={56}
                                                            src={
                                                                product.image[
                                                                    '50ml'
                                                                ]
                                                            }
                                                            style={{
                                                                objectFit:
                                                                    'contain',
                                                            }}
                                                            width={56}
                                                        />
                                                    </div>
                                                    <div className="search-result-info">
                                                        <span className="search-result-name">
                                                            {product.name}
                                                        </span>
                                                        <span className="search-result-desc">
                                                            {
                                                                product.description
                                                            }
                                                        </span>
                                                    </div>
                                                    <svg
                                                        className="search-result-arrow"
                                                        fill="none"
                                                        height="16"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        viewBox="0 0 24 24"
                                                        width="16"
                                                    >
                                                        <polyline points="9 18 15 12 9 6" />
                                                    </svg>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="search-no-results">
                                        No products found
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Mobile search toggle */}
                    <button
                        aria-label="Open search"
                        className="search-toggle"
                        onClick={() => {
                            setIsSearchOpen(!isSearchOpen)
                            setTimeout(
                                () => searchInputRef.current?.focus(),
                                50,
                            )
                        }}
                    >
                        <svg
                            fill="none"
                            height="20"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="20"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" x2="16.65" y1="21" y2="16.65" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Search Overlay */}
            <div
                className={`mobile-search-overlay${isSearchOpen ? ' mobile-search-overlay--active' : ''}`}
            >
                <div className="mobile-search-header">
                    <div className="mobile-search-inner">
                        <svg
                            fill="none"
                            height="18"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="18"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" x2="16.65" y1="21" y2="16.65" />
                        </svg>
                        <input
                            aria-label="Search products"
                            className="mobile-search-input"
                            placeholder="Search perfumes..."
                            ref={mobileSearchInputRef}
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            aria-label="Close search"
                            className="mobile-search-close"
                            onClick={() => {
                                setIsSearchOpen(false)
                                setSearchQuery('')
                            }}
                        >
                            &times;
                        </button>
                    </div>
                    {searchQuery.trim() && (
                        <div className="mobile-search-results">
                            {filteredProducts.length > 0 ? (
                                <ul className="search-results">
                                    {filteredProducts.map((product) => (
                                        <li
                                            className="search-result-item"
                                            key={product.id}
                                        >
                                            <button
                                                className="search-result-btn"
                                                onMouseDown={(e) => {
                                                    e.preventDefault()
                                                    handleProductSelect(
                                                        product.id,
                                                    )
                                                }}
                                            >
                                                <div className="search-result-image">
                                                    <Image
                                                        alt={product.name}
                                                        height={56}
                                                        src={
                                                            product.image[
                                                                '50ml'
                                                            ]
                                                        }
                                                        style={{
                                                            objectFit:
                                                                'contain',
                                                        }}
                                                        width={56}
                                                    />
                                                </div>
                                                <div className="search-result-info">
                                                    <span className="search-result-name">
                                                        {product.name}
                                                    </span>
                                                    <span className="search-result-desc">
                                                        {product.description}
                                                    </span>
                                                </div>
                                                <svg
                                                    className="search-result-arrow"
                                                    fill="none"
                                                    height="16"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    width="16"
                                                >
                                                    <polyline points="9 18 15 12 9 6" />
                                                </svg>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="search-no-results">
                                    No products found
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>

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
