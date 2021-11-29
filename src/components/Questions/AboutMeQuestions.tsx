import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { nanoid } from 'nanoid'

import AboutMeQuestion from 'classes/aboutMe/AboutMeQuestion'

interface Props {
	data: AboutMeQuestion[]
}

const AboutMeQuestions = ({ data }: Props) => {
	return (
		<>
			{data.map(({ question, answer }) => (
				<Box sx={{ mb: '1rem' }} key={nanoid()}>
					<Typography
						variant='h3'
						gutterBottom
						sx={{ textTransform: 'capitalize' }}
						color='primary'
					>
						{question}
					</Typography>

					{answer}
				</Box>
			))}
		</>
	)
}

export default AboutMeQuestions
