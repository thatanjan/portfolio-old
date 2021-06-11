import React, { ReactNode } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import useLargerThanMD from 'hooks/useLargerThanMD'

import AppHeader from 'components/AppHeader/AppHeader'
import LayoutImage from 'components/PageLayout/LayoutImage'

interface Props {
	children?: ReactNode
}

const useStyles = makeStyles(theme => ({
	paperWrapper: {
		maxWidth: '100vw',
	},
	layoutImageFixStyle: {
		position: 'fixed',
		width: '33.333%',
		height: '100%',
	},
}))

const PageLayout = ({ children }: Props) => {
	const { paperWrapper, layoutImageFixStyle } = useStyles()

	const largerThanMD = useLargerThanMD()

	return (
		<Grid component={Paper} container className={paperWrapper}>
			<Grid item>
				<AppHeader />
			</Grid>

			<Grid item container>
				{largerThanMD && (
					<Grid lg={12} item className={layoutImageFixStyle}>
						<LayoutImage />
					</Grid>
				)}

				<Grid xs={12} md={8} item>
					{children}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default PageLayout
