import React from 'react'
import Image from 'next/image'

interface Props {
	styleClass: string
source: string
}

const StyledImage = ({ styleClass, source }: Props) => {
	return (
		<Image
			className={styleClass}
			src={source}
			height={0}
			width={0}
			layout='responsive'
			objectFit='cover'
		/>
	)
}

export default StyledImage
