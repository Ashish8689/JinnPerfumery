'use client'

import React, { useEffect, useState } from 'react'
import Arrow from '../../assets/svg/Arrow'
import './scrollTop.css'

const ScrollTop: React.FC = () => {
    const [hasScrollHeight, setHasScrollHeight] = useState(false)

    const scrollFunction = (): void => {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            setHasScrollHeight(true)
        } else {
            setHasScrollHeight(false)
        }
    }

    // When the user click the button,scroll to the top of document
    const scrollToTop = (): void => {
        document.body.scrollTop = 0 // for Safari
        document.documentElement.scrollTop = 0 // for chrome,firefox,and other
    }

    useEffect(() => {
        // When the user scrolls down 20px from top of the document,button will appear
        window.onscroll = () => {
            scrollFunction()
        }
    }, [])

    return (
        <div className="scroll-top">
            <div
                className={`scroll-button ${
                    hasScrollHeight ? 'd-block' : 'd-none'
                }`}
                id="scrollButton"
                onClick={scrollToTop}
            >
                <Arrow className="i" />
            </div>
        </div>
    )
}

export default ScrollTop
