import React, { ReactNode } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import useLargerThanMD from 'hooks/useLargerThanMD'

import BottomNavigation from 'components/Navigation/BottomNavigation'
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
	},
	background2: {
		width: '40vw',
	},
	contentContainerStyle: {
		maxWidth: '100vw',
		position: 'relative',
		flexGrow: 1,
	},
	wholeGridContainer: { height: '100vh', flexDirection: 'column' },
}))

const PageLayout = ({ children }: Props) => {
	const {
		background1,
		background2,
		contentContainerStyle,
		paperWrapper,
		wholeGridContainer,
	} = useStyles()

	const largerThanMD = useLargerThanMD()

	return (
		<>
			<Paper className={paperWrapper}>
				<Grid container className={wholeGridContainer}>
					<Grid item>
						<AppHeader />
					</Grid>

					<Grid item container className={contentContainerStyle}>
						<Grid item className={background1}>
							{children}
						</Grid>

						{largerThanMD && <Grid item className={background2} />}
					</Grid>

					{largerThanMD && (
						<Grid item>
							<BottomNavigation />
						</Grid>
					)}
				</Grid>
			</Paper>
		</>
	)
}

export default PageLayout
