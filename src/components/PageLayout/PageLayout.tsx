import Head from 'next/head'
import React, { ReactNode } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

interface Props {
	Content?: ReactNode
}

const useStyles = makeStyles({
	background1: {
		width: '60vw',
		height: '100vh',
	},
	background2: {
		width: '40vw',
		height: '100vh',
	},
	container: {
		flexWrap: 'nowrap',
	},
})

const PageLayout = ({ Content }: Props) => {
	const { background1, background2, container } = useStyles()
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Paper>
				<Grid container className={container}>
					<Grid item className={background1} />
					<Grid item className={background2}>
						{Content}
					</Grid>
				</Grid>
			</Paper>
		</>
	)
}

export default PageLayout
