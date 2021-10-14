import { ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'
import MuiLink from 'components/Links/MuiLink'
import Button from '@material-ui/core/Button'

import makeFirstLetterUpperCase from 'utils/firstLetterUpperCase'

interface SpecialLinkInterface {
	children: ReactNode
	href: string
}

const SpecialLink = ({ children, href }: SpecialLinkInterface) => (
	<MuiLink
		MuiComponent={Typography}
		href={href}
		style={{ textDecoration: 'underline' }}
	>
		{children}
	</MuiLink>
)

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

const WHO_AM_I_ANSWER = () => (
	<Typography variant='body1' component='h2' style={{ display: 'inline' }}>
		{' '}
		My name is anjan. I am a Full stack developer. I also write Blogs on{' '}
		<SpecialLink href='https://www.culescoding.space/'>
			culescoding.space
		</SpecialLink>{' '}
		I run a youtube channel called{' '}
		<SpecialLink href='https://www.youtube.com/channel/UCBaGowNYTUsm3IDaHbLRMYw?sub_confirmation=1'>
			Cules Coding
		</SpecialLink>{' '}
		where I teach people full stack web development, data structure, alghorithms
		and many more.
	</Typography>
)

const WHAT_PROBLEMS_DO_I_SOLVE: string =
	'I can develop complex full stack web applications like social media application, blogging, e-commerce website and many more.'

const WHAT_HAVE_I_DONE = () => {
	return (
		<>
			<Typography variant='body1' component='h2' style={{ display: 'inline' }}>
				I have developed and currently maintaining an social media application
				called{' '}
				<SpecialLink href='https://con-fession.vercel.app/'>Confession</SpecialLink>
				to help people overcome their imposter syndrome. I have also created other
				cool projects.{' '}
			</Typography>

			<SpecialLink href='/work'>
				{makeFirstLetterUpperCase('see my work from here')}
			</SpecialLink>
		</>
	)
}
const WHY_DO_I_DO_WHAT_I_DO =
	'I love to solve problems, develop new ideas and apply them on real life. I want to contribute to the world for greater good. I believe science and technolgy will allow me to do that.'

const whoAmI = new AboutMeData('who am I', '').addReactNode(<WHO_AM_I_ANSWER />)

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
		<SpecialLink href='/contact'>
			{makeFirstLetterUpperCase('feel free to contact me')}
		</SpecialLink>
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
