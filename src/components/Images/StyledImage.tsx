import React from 'react'
import Image from 'next/image'

interface Props {
	styleClass: string
}

const StyledImage = ({ styleClass }: Props) => {
	return (
		<Image
			className={styleClass}
			src='/ww.jpg'
			height={0}
			width={0}
			layout='responsive'
		/>
	)
}

export default StyledImage
