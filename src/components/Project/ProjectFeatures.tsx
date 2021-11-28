import React from 'react'
import { nanoid } from 'nanoid'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface Props {
	features: string[]
}

interface Feature {
	title: string
	index: number
}

const Feature = ({ title, index }: Feature) => {
	return (
		<>
			<Typography
				sx={{
					border: '6px solid',
					borderColor: 'primary.main',
					borderRadius: '50%',
					display: 'grid',
					placeItems: 'center',
					height: {
						xs: '5rem',
						sm: '6rem',
					},
					width: {
						xs: '5rem',
						sm: '6rem',
					},
					margin: {
						xs: '1rem',
					},
				}}
				variant='h5'
			>
				{index}
			</Typography>

			<Typography variant='h5'>{title}</Typography>
		</>
	)
}

const ProjectFeatures = ({ features }: Props) => {
	return (
		<>
			<Grid
				container
				justifyContent='space-around'
				spacing={4}
				sx={{ mb: '5rem' }}
			>
				{features.map((feature, index) => (
					<Grid
						item
						xs={5}
						sm={4}
						xl={3}
						key={nanoid()}
						sx={{ textAlign: 'center', display: 'grid', placeItems: 'center' }}
					>
						<Feature key={nanoid()} title={feature} index={index + 1} />
					</Grid>
				))}
			</Grid>
		</>
	)
}

export default ProjectFeatures
