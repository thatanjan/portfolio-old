import React from 'react'
import Image from 'next/image'

interface Props {
	styleClass: string
	imagePath: string
}

const StyledImage = ({ styleClass, imagePath }: Props) => {
	return (
		<Image
			className={styleClass}
			height={0}
			width={0}
			layout='responsive'
			objectFit='cover'
			src={imagePath}
		/>
	)
}

export default StyledImage
