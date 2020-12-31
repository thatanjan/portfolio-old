import React, { ReactNode } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import useLargerThanMD from 'hooks/useLargerThanMD'

import Navigation from 'components/Navigation/Navigation'
import AppHeader from 'components/AppHeader/AppHeader'

interface Props {
	children?: ReactNode
}

const useStyles = makeStyles(theme => ({
	paperWrapper: {
		maxHeight: '100vh',
		maxWidth: '100vw',
		overflow: 'hidden',
	},
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
		maxWidth: '100vw',
		position: 'relative',
		top: theme.mixins.toolbar.minHeight,
		[theme.breakpoints.up('xs')]: {
			top:
				theme.mixins.toolbar['@media (min-width:0px) and (orientation: landscape)']
					.minHeight,
		},
		[theme.breakpoints.up('xs')]: {
			top: theme.mixins.toolbar.minHeight,
		},
		[theme.breakpoints.up('sm')]: {
			top: theme.mixins.toolbar['@media (min-width:600px)'].minHeight,
		},
	},
	paperStyle: {},
}))

const PageLayout = ({ children }: Props) => {
	const { background1, background2, container, paperWrapper } = useStyles()

	const matches = useLargerThanMD()

	return (
		<>
			<Paper className={paperWrapper}>
				<AppHeader />
				<Grid container className={container}>
					<Grid item className={background1}>
						{children}
					</Grid>

					{matches && <Grid item className={background2} />}
				</Grid>
				<Navigation />
			</Paper>
		</>
	)
}

export default PageLayout
