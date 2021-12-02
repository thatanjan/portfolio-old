import React from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'

interface Props {
	name: string
	image: string
}

const SingleSkill = ({ name, image }: Props) => {
	const dimension = 200

	return (
		<>
			<Image
				alt={name}
				src={image}
				height={dimension}
				width={dimension}
				objectFit='cover'
			/>

			<Typography sx={{ textTransform: 'capitalize' }}>{name}</Typography>
		</>
	)
}

export default SingleSkill
