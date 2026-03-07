'use client'

import React from 'react'
import IconLoader from '@/assets/svg/loading.svg'

const Loading: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="loading-inner-container">
                <IconLoader />
            </div>
        </div>
    )
}

export default Loading
