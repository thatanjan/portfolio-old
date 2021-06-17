import Head from 'next/head'
import ProjectDescription from 'components/ProjectPreview/ProjectDescription'
import { makeStyles } from '@material-ui/core/styles'
import { nanoid } from 'nanoid'

import aboutMeData, { AboutMeData } from 'components/AboutMe/aboutMeData'

const useStyles = makeStyles({
	stylesForHomePage: {
		width: '90%',
		margin: '5% auto',
		paddingLeft: '1rem',
	},
})

const Home = () => {
	const { stylesForHomePage } = useStyles()

	return (
		<>
			<Head>
				<title>Anjan</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{aboutMeData.map(({ question, answer }: AboutMeData) => (
				<ProjectDescription
					key={nanoid()}
					title={`${question}?`}
					description={answer}
					styleName={stylesForHomePage}
				/>
			))}
		</>
	)
}

export default Home
