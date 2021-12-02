import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import CenterLayout from 'components/Layouts/CenterLayout'
import TitleHeader from 'components/Headers/TitleHeader'
import ProfileImage from 'components/Images/ProfileImage'
import AboutMeQuestions from 'components/Questions/AboutMeQuestions'
import Profession from 'components/Skills/Profession'

import allQuestions from 'data/aboutMe/questions'

const About = () => {
	return (
		<CenterLayout>
			<TitleHeader
				text='ABOUT ME'
				description='I develop full stack web applications, AND I LOVE WHAT I DO'
			/>

			<Grid
				container
				justifyContent='center'
				alignItems='center'
				sx={{
					'&:before': {
						content: '""',
						display: 'block',
						height: '100%',
						width: '100%',
						backgroundColor: 'rgba(0,0,0,0.1)',
						position: 'absolute',
						top: 0,
						left: 0,
						zIndex: -1,
					},
				}}
			>
				<Grid item sx={{ position: 'relative' }}>
					<Box
						sx={{
							position: 'absolute',
							top: '0',
							left: '0',
							border: '6px solid',
							borderColor: 'primary.main',
							transform: 'translate3d(26px, 26px, -26px)',
							height: '100%',
							width: '100%',
						}}
					/>
					<ProfileImage />
				</Grid>

				<Grid item xs={12} sx={{ display: 'grid', placeItems: 'center' }}>
					<Typography align='center' variant='h4' sx={{ mt: '3rem' }}>
						Anjan Shomodder
					</Typography>

					<Typography
						variant='h3'
						color='primary'
						sx={{ mt: '1rem', textTransform: 'uppercase' }}
						align='center'
					>
						<Profession />
					</Typography>
				</Grid>
			</Grid>

			<Divider sx={{ margin: '3rem 0' }} />

			<Typography
				align='center'
				variant='h3'
				color='primary'
				sx={{ textTransform: 'capitalize', mb: '2rem' }}
			>
				Your questions about me
			</Typography>

			<AboutMeQuestions data={allQuestions} />
		</CenterLayout>
	)
}

export default About
