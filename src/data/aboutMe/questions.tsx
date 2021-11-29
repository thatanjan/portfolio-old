import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import TypographyLink from 'components/Links/TypographyLink'
import AboutMeQuestion from 'classes/aboutMe/AboutMeQuestion'

const whoAmI: AboutMeQuestion = new AboutMeQuestion('who am I').addAnswer(
	<Box>
		<Typography>
			My name is anjan. I am a Full stack developer. I also write Blogs on{' '}
			<TypographyLink href='https://www.culescoding.space/'>
				culescoding.space
			</TypographyLink>
			{'. '}I run a youtube channel called{' '}
			<TypographyLink href='https://www.youtube.com/channel/UCBaGowNYTUsm3IDaHbLRMYw?sub_confirmation=1'>
				{' '}
				Cules Coding{' '}
			</TypographyLink>{' '}
			where I teach people full stack web development, data structure, alghorithms
			and many more.
		</Typography>
	</Box>
)

const whatHaveIDone = new AboutMeQuestion('what have i done').addAnswer(
	<>
		<Typography>
			I have developed and currently maintaining an social media application called{' '}
			<TypographyLink href='https://con-fession.vercel.app/'>
				Confession
			</TypographyLink>{' '}
			to help people overcome their imposter syndrome. I have also created other
			cool projects.{' '}
		</Typography>

		<TypographyLink href='/projects'>See my work from here.</TypographyLink>
	</>
)

const allQuestions = [whoAmI, whatHaveIDone]

export default allQuestions
