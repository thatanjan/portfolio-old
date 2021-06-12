import { ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'
import MuiLink from 'components/Links/MuiLink'
import Button from '@material-ui/core/Button'

import makeFirstLetterUpperCase from 'utils/firstLetterUpperCase'

export class AboutMeData {
	question: string

	answer: string | ReactNode

	constructor(question: string, answer: string) {
		this.question = question
		this.answer = makeFirstLetterUpperCase(answer)
	}

	addReactNode(node: ReactNode) {
		this.answer = node
		return this
	}
}

const WHO_AM_I_ANSWER = 'my name is anjan. I am a Full stack developer.'

const WHAT_PROBLEMS_DO_I_SOLVE: string =
	'I can create complex full stack web applications like social media application, blogging, e-commerce website and many more.'

const WHAT_HAVE_I_DONE = () => {
	return (
		<>
			<Typography variant='body1' component='h2' style={{ display: 'inline' }}>
				I have developed and currently maintaining an social media application
				called Confession. I have also created other cool projects{' '}
			</Typography>

			<MuiLink
				MuiComponent={Button}
				href='/work'
				variant='contained'
				color='primary'
				size='small'
			>
				{makeFirstLetterUpperCase('see my work here')}
			</MuiLink>
		</>
	)
}
const WHY_DO_I_DO_WHAT_I_DO = 'I love to solve problems and develop new ideas.'

const whoAmI = new AboutMeData('who am I', WHO_AM_I_ANSWER)

const whatProblemsDoISolve = new AboutMeData(
	'what problems do I solve',
	WHAT_PROBLEMS_DO_I_SOLVE
)

const whyDoIDoWhatIDo = new AboutMeData(
	'why do I do what I do',
	WHY_DO_I_DO_WHAT_I_DO
)

const whatHaveIDone = new AboutMeData('what have I done', '').addReactNode(
	<WHAT_HAVE_I_DONE />
)

const Contact = () => {
	return (
		<MuiLink
			MuiComponent={Button}
			href='/contact'
			variant='contained'
			color='primary'
			size='small'
		>
			{makeFirstLetterUpperCase('feel free to contact me')}
		</MuiLink>
	)
}

const workTogather = new AboutMeData(
	'Think we should work together',
	''
).addReactNode(<Contact />)

const aboutMeData: AboutMeData[] = [
	whoAmI,
	whatProblemsDoISolve,
	whatHaveIDone,
	whyDoIDoWhatIDo,
	workTogather,
]

export default aboutMeData
