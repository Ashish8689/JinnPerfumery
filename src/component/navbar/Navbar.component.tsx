'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import './navbar.css'
import Image from 'next/image'
import { NAVBAR_MENU_ITEMS } from '@/constant/navbar.constant'
import { PRODUCT_LIST } from '@/constant/productList.constant'
import type { Product } from '@/constant/productList.constant'
import { useCart } from '@/context/CartContext'

const Navbar: React.FC = () => {
    const { totalCount } = useCart()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const desktopSearchRef = useRef<HTMLInputElement>(null)
    const sidebarSearchRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    useEffect(() => {
        if (isMenuOpen) {
            setTimeout(() => sidebarSearchRef.current?.focus(), 100)
        }
    }, [isMenuOpen])

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
                setIsMenuOpen(false)
            }
        }
        document.addEventListener('keydown', handleKeyDown)

        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    const toggleMenu = (): void => {
        setIsMenuOpen((v) => {
            if (v) {
                setSearchQuery('')
            }

            return !v
        })
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
        setIsMenuOpen(false)
        router.push(`/product/${id}`)
    }

    const searchResultsJSX = (
        <>
            {filteredProducts.length > 0 ? (
                <ul className="search-results">
                    {filteredProducts.map((product) => (
                        <li className="search-result-item" key={product.id}>
                            <button
                                className="search-result-btn"
                                onMouseDown={(e) => {
                                    e.preventDefault()
                                    handleProductSelect(product.id)
                                }}
                            >
                                <div className="search-result-image">
                                    <Image
                                        alt={product.name}
                                        height={56}
                                        src={product.image['50ml']}
                                        style={{ objectFit: 'contain' }}
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
                <p className="search-no-results">No products found</p>
            )}
        </>
    )

    return (
        <>
            <nav className={`navbar${isScrolled ? ' navbar--scrolled' : ''}`}>
                <div className="navbar-container">
                    {/* Hamburger — mobile only */}
                    <button
                        aria-label="Toggle menu"
                        className="menu-toggle"
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
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line x1="3" x2="21" y1="18" y2="18" />
                        </svg>
                    </button>

                    {/* Logo */}
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

                    {/* Desktop inline search */}
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
                                ref={desktopSearchRef}
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
                                    desktopSearchRef.current?.focus()
                                }}
                            >
                                &times;
                            </button>
                        </div>

                        {isSearchOpen && searchQuery.trim() && (
                            <div className="search-dropdown">
                                {searchResultsJSX}
                            </div>
                        )}
                    </div>

                    {/* Desktop nav links */}
                    <ul className="desktop-menu">
                        {NAVBAR_MENU_ITEMS.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href || '#'}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Cart icon — always visible */}
                    <Link
                        aria-label="View cart"
                        className="navbar-cart-btn"
                        href="/cart"
                    >
                        <svg
                            fill="none"
                            height="22"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="22"
                        >
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <path d="M16 10a4 4 0 01-8 0" />
                        </svg>
                        {totalCount > 0 && (
                            <span className="navbar-cart-badge">
                                {totalCount}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>

            {/* Sidebar overlay */}
            <button
                aria-label="Close menu"
                className={`sidebar-overlay${isMenuOpen ? ' active' : ''}`}
                type="button"
                onClick={toggleMenu}
            />

            {/* Sidebar */}
            <div className={`sidebar${isMenuOpen ? ' active' : ''}`}>
                <div className="sidebar-content">
                    {/* Header row */}
                    <div className="sidebar-header">
                        <span className="sidebar-header-title">Menu</span>
                        <button
                            aria-label="Close menu"
                            className="sidebar-close"
                            onClick={toggleMenu}
                        >
                            <svg
                                fill="none"
                                height="20"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="20"
                            >
                                <line x1="18" x2="6" y1="6" y2="18" />
                                <line x1="6" x2="18" y1="6" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {/* Search inside sidebar */}
                    <div className="sidebar-search-wrap">
                        <div className="sidebar-search-inner">
                            <svg
                                fill="none"
                                height="16"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="16"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" x2="16.65" y1="21" y2="16.65" />
                            </svg>
                            <input
                                aria-label="Search products"
                                className="sidebar-search-input"
                                placeholder="Search perfumes..."
                                ref={sidebarSearchRef}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button
                                    aria-label="Clear"
                                    className="sidebar-search-clear"
                                    onClick={() => setSearchQuery('')}
                                >
                                    &times;
                                </button>
                            )}
                        </div>
                        {searchQuery.trim() && (
                            <div className="sidebar-search-results">
                                {searchResultsJSX}
                            </div>
                        )}
                    </div>

                    {/* Nav links */}
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
