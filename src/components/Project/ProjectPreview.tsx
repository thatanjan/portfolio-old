import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import ProjectImageSlideShow from 'components/Slides/ImageSlideShow'
import LinkButton from 'components/Buttons/LinkButton'

import { convertDashToSpace } from 'utils/convertString'

interface Props {
	title: string
	subtitle: string
	images: string[]
}

const ProjectPreview = ({ title, subtitle, images }: Props) => {
	return (
		<Box sx={{ marginBottom: '5rem' }}>
			<ProjectImageSlideShow images={images} />

			<Typography variant='h2' gutterBottom sx={{ textTransform: 'capitalize' }}>
				{convertDashToSpace(title)}
			</Typography>
			<Typography>{subtitle}</Typography>

			<Grid
				container
				sx={{
					mt: '2rem',
				}}
				columns={12}
			>
				<Grid item xs={12}>
					<LinkButton
						href='/'
						variant='contained'
						sx={{
							width: {
								xs: '100%',
							},
						}}
					>
						View Project
					</LinkButton>
				</Grid>
			</Grid>
		</Box>
	)
}

export default ProjectPreview
