'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
    NAV_LINKS,
    REGEX_SCROLL,
    SOCIAL_LINKS,
} from '@/constant/links.constant'
import GithubIcon from '../../assets/svg/github.svg'
import './navbar.css'

import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
    const [isPageScrolling, setIsPageScrolling] = useState(false)
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

    const pathname = usePathname()

    const isLandingPage = useMemo(() => pathname === '/', [pathname])

    const changeBackground = useCallback((): void => {
        if (window.scrollY >= 100) {
            setIsPageScrolling(true)
        } else {
            setIsPageScrolling(false)
        }
    }, [])

    const handleHamburger = (): void => setIsHamburgerOpen(!isHamburgerOpen)

    const handleNavLinkClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ): void => {
        setIsHamburgerOpen(false)

        if (isLandingPage) {
            // first prevent the default behavior
            e.preventDefault()
            // get the href and remove everything before the hash (#)
            const href = e.currentTarget.href
            const targetId = href.replace(REGEX_SCROLL, '')
            // get the element by id and use scrollIntoView
            const elem = document.getElementById(targetId)
            elem?.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    }, [changeBackground])

    return (
        <div className={isPageScrolling ? 'nav active' : 'nav'}>
            <div className="container">
                <div className="logo-block">
                    <Link href="/">
                        <h1 className="logo">Ashish</h1>
                    </Link>
                </div>

                <div className="side-menu">
                    <ul
                        className={
                            isHamburgerOpen ? 'nav-list active' : 'nav-list'
                        }
                    >
                        {NAV_LINKS.map(({ page, link }) => (
                            <Link
                                className="nav-link"
                                href={isLandingPage ? link : ''}
                                key={page}
                                onClick={handleNavLinkClick}
                            >
                                {page}
                            </Link>
                        ))}

                        <Link
                            className="nav-link"
                            href="open-source"
                            prefetch={false}
                        >
                            OpenSource
                        </Link>

                        <Link
                            className="nav-link"
                            href={SOCIAL_LINKS.GITHUB}
                            target="_blank"
                        >
                            <GithubIcon className="github" />
                        </Link>
                    </ul>
                </div>

                <div className="hamburger" onClick={handleHamburger}>
                    <span
                        className={
                            isHamburgerOpen ? 'span span1 active' : 'span span1'
                        }
                    />
                    <span
                        className={
                            isHamburgerOpen ? 'span span2 active' : 'span span2'
                        }
                    />
                </div>
                <div className="box-bar" />
                <div className="circle-round" />
            </div>
        </div>
    )
}

export default Navbar
