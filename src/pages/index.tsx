import Head from 'next/head'
import Avatar from 'components/Avatar/Avatar'
import useLargerThanMD from 'hooks/useLargerThanMD'
import AboutMe from 'components/AboutMe/AboutMe'

const Home = () => {
	const largerThanMD = useLargerThanMD()

	return (
		<>
			<Head>
				<title>Anjan</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{!largerThanMD && <Avatar />} <AboutMe />{' '}
		</>
	)
}

export default Home
