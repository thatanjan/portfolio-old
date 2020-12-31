import Head from 'next/head'
import Typography from '@material-ui/core/Typography'

export default function Home() {
	return (
		<div className='app'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Typography>Hello World</Typography>
		</div>
	)
}
