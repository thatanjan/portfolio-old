import Head from 'next/head'
import ProjectDescription from 'components/ProjectPreview/ProjectDescription'
import makeStyles from '@mui/styles/makeStyles';
import { nanoid } from 'nanoid'

import aboutMeData, { AboutMeData } from 'components/AboutMe/aboutMeData'

const useStyles = makeStyles({})

const Home = () => {
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
				/>
			))}
		</>
	)
}

export default Home
