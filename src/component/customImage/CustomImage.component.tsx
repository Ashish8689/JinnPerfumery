import Image from 'next/image'
import React from 'react'
import { CustomImageProps } from './customImage.interface'

const CustomImage = ({
    priority = false,
    src,
    alt = 'Jinn Perfumery',
}: CustomImageProps): React.JSX.Element => {
    return (
        <Image
            alt={alt}
            height={0}
            priority={priority}
            sizes="100vw"
            src={src}
            style={{ width: '100%', height: 'auto' }}
            width={0}
        />
    )
}

export default CustomImage
