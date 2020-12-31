import React, { ReactNode } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import useLargerThanMd from 'hooks/useLargerThanMd'
import Navigation from 'components/Navigation/Navigation'

interface Props {
	children?: ReactNode
}

const useStyles = makeStyles({
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
	},
})

const PageLayout = ({ children }: Props) => {
	const { background1, background2, container, paperWrapper } = useStyles()

	const matches = useLargerThanMd()

	return (
		<>
			<Paper className={paperWrapper}>
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
