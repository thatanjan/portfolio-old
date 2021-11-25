import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import ProjectImageSlideShow from 'components/Slides/ImageSlideShow'
import LinkButton from 'components/Buttons/LinkButton'

interface Props {
	title: string
	description: string
}

const ProjectPreview = ({ title, description }: Props) => {
	return (
		<Box sx={{ marginBottom: '5rem' }}>
			<ProjectImageSlideShow images={['/anime_19.jpg', '/anime_19.jpg']} />

			<Typography variant='h2' gutterBottom>
				{title}
			</Typography>
			<Typography>{description}</Typography>

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
