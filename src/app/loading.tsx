import CustomImage from '@/component/customImage/CustomImage.component'
import React from 'react'

const Loading: React.FC = () => {
    return (
        <div className="open-source-loading">
            <div className="loading">
                <CustomImage src="/image/loading.gif" />
            </div>
        </div>
    )
}

export default Loading
