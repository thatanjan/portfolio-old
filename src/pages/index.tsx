import dynamic from 'next/dynamic'
import Head from 'next/head'
import useLargerThanLG from 'hooks/useLargerThanLG'
import ProjectDescription from 'components/ProjectPreview/ProjectDescription'
import { makeStyles } from '@material-ui/core/styles'
import { nanoid } from 'nanoid'

import aboutMeData, { AboutMeData } from 'components/AboutMe/aboutMeData'

const Avatar = dynamic(() => import('components/Avatar/Avatar'))

const useStyles = makeStyles({
	stylesForHomePage: {
		width: '90%',
		margin: '5% auto',
	},
})

const Home = () => {
	const largerThanLG = useLargerThanLG()

	const { stylesForHomePage } = useStyles()

	return (
		<>
			<Head>
				<title>Anjan</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{!largerThanLG && <Avatar />}

			{aboutMeData.map(({ question, answer }: AboutMeData) => (
				<ProjectDescription
					key={nanoid()}
					title={question}
					description={answer}
					styleName={stylesForHomePage}
				/>
			))}
		</>
	)
}

export default Home
