import Head from 'next/head'
import Avatar from 'components/Avatar/Avatar'
import useLargerThanLG from 'hooks/useLargerThanLG'
import AboutMe from 'components/AboutMe/AboutMe'

const Home = () => {
	const largerThanLG = useLargerThanLG()

	return (
		<>
			<Head>
				<title>Anjan</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{!largerThanLG && <Avatar />} <AboutMe />{' '}
		</>
	)
}

export default Home
