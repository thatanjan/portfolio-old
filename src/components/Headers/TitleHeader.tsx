import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface Props {
	text: string
}

const TitleHeader = ({ text }: Props) => {
	return (
		<Box
			sx={{
				padding: {
					xs: '5rem 0',
				},
			}}
		>
			<Typography
				variant='h1'
				align='center'
				color='primary'
				sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
			>
				{text}
			</Typography>
		</Box>
	)
}

export default TitleHeader
