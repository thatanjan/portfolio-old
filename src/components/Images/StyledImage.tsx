import React from 'react'
import Image from 'next/image'

interface Props {
	styleClass: string
}

const StyledImage = ({ styleClass }: Props) => {
	return (
		<Image
			className={styleClass}
			src='/myImage.jpg'
			height={0}
			width={0}
			layout='responsive'
			objectFit='cover'
		/>
	)
}

export default StyledImage
