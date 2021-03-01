import dynamic from 'next/dynamic'
import Head from 'next/head'
import useLargerThanLG from 'hooks/useLargerThanLG'
import AboutMe from 'components/AboutMe/AboutMe'

const Avatar = dynamic(() => import('components/Avatar/Avatar'))

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
