import Head from 'next/head'
import Typography from '@material-ui/core/Typography'

import PageLayout from 'components/PageLayout/PageLayout'

const Content = () => <div> hello world </div>

export default function Home() {
	return (
		<div className='app'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<PageLayout Content={<Content />} />
		</div>
	)
}
