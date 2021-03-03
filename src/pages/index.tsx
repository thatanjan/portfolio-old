import dynamic from 'next/dynamic'
import Head from 'next/head'
import useLargerThanLG from 'hooks/useLargerThanLG'
import ProjectDescription from 'components/ProjectPreview/ProjectDescription'
import { makeStyles } from '@material-ui/core/styles'

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

			<ProjectDescription
				title='who am I?'
				description='My name is Anjan Shomodder. I am from Dhaka bangladesh'
				styleName={stylesForHomePage}
			/>
		</>
	)
}

export default Home
