import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface Props {
	text: string
	description: string
}

const TitleHeader = ({ text, description }: Props) => {
	const marginForDescriptionBars = '1rem'
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

			<Typography
				align='center'
				sx={{
					'&:after, &:before': {
						content: `''`,
						height: '.2rem',
						width: {
							md: '9%',
							lg: '11%',
						},
						display: {
							xs: 'none',
							md: 'inline-block',
						},
						backgroundColor: 'primary.main',
						mb: '0.6%',
					},
					'&:after': {
						ml: marginForDescriptionBars,
					},
					'&:before': {
						mr: marginForDescriptionBars,
					},
				}}
			>
				{description}
			</Typography>
		</Box>
	)
}

export default TitleHeader
