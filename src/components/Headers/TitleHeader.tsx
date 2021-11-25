import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface Props {
	text: string
	description: string
}

const TitleHeader = ({ text, description }: Props) => {
	return (
		<Box
			sx={{
				padding: {
					xs: '5rem 1rem',
				},
				textTransform: 'uppercase',
			}}
		>
			<Typography
				variant='h1'
				align='center'
				color='primary'
				sx={{ fontWeight: 'bold' }}
				gutterBottom
			>
				{text}
			</Typography>

			<Typography align='center'>{description}</Typography>
		</Box>
	)
}

export default TitleHeader
