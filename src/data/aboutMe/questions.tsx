import React from 'react'
import Typography from '@mui/material/Typography'

import TypographyLink from 'components/Links/TypographyLink'
import AboutMeQuestion from 'classes/aboutMe/AboutMeQuestion'

const whoAreYou: AboutMeQuestion = new AboutMeQuestion('Who are you').addAnswer(
	<Typography>
		My name is Anjan. I am a full stack developer, blogger, and Youtuber.
	</Typography>
)

const whatHaveYouDone = new AboutMeQuestion('What have you done').addAnswer(
	<>
		<Typography>
			I have developed and currently maintaining an social media application called{' '}
			<TypographyLink href='https://con-fession.vercel.app/'>
				Confession
			</TypographyLink>{' '}
			to help people overcome their imposter syndrome.
		</Typography>

		<Typography>
			I also run a youtube channel called{' '}
			<TypographyLink href='https://www.culescoding.space/'>
				cules coding
			</TypographyLink>{' '}
			and write blogs on my website{' '}
			<TypographyLink href='https://www.culescoding.space/'>
				culescoding.space
			</TypographyLink>{' '}
			where I teach people full stack web development, data structure, algorithms
			and many more.
		</Typography>

		<Typography>
			I have also created other cool projects.{' '}
			<TypographyLink href='/projects'>See my work from here.</TypographyLink>
		</Typography>
	</>
)

const whatProblemsDoYouSolve = new AboutMeQuestion(
	'What problems do you solve'
).addAnswer(
	<>
		<Typography>
			I can develop complex full stack web applications from UI to backEnd systems
			like social media application, blogging, e-commerce website and many more.
		</Typography>
	</>
)

const whyDoYouDoWhatYouDo = new AboutMeQuestion(
	'Why do you do what you do'
).addAnswer(
	<Typography>
		I love to solve problems, develop new ideas, and apply them in real life. I
		want to contribute to the world for the greater good. I believe science and
		technology will allow me to do that. If I make the web better that will have a
		great impact on people's lives.
	</Typography>
)

const workTogather = new AboutMeQuestion(
	"Let's work together. How can I contact you?"
).addAnswer(
	<>
		<TypographyLink href='/contact'>Feel free to contact me</TypographyLink>
	</>
)

const whatAreYouLookingFor = new AboutMeQuestion(
	'What are you looking for'
).addAnswer(
	<>
		<Typography>
			I am looking for a company where I can prove myself by providing great value
			with my skills and knowledge. Though I lack professional experience. But I am
			hungry to learn more. I want to join a team where I can collaborate with
			intelligent people and learn from them.
		</Typography>
	</>
)

const whereIsYourDegree = new AboutMeQuestion('Where is your degree').addAnswer(
	<>
		<Typography>
			I don't have a college degree. I believe a well-educated person is a
			self-educated person. I taught myself programming through online courses,
			podcasts and books. I didn't let a piece of paper stop me from learning. As a
			self-taught person, I am always learning new things because knowledge is
			power. I don't wait for others to teach me something. I am always looking for
			new ways to improve my skills.
		</Typography>
	</>
)

const allQuestions = [
	whatProblemsDoYouSolve,
	whatHaveYouDone,
	whyDoYouDoWhatYouDo,
	whatAreYouLookingFor,
	whereIsYourDegree,
	whoAreYou,
	workTogather,
]

export default allQuestions
