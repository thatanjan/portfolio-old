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
	background1: {
		width: '60vw',
		flex: '1 1 auto',
		overflowY: 'auto',
		height: '100%',
		'-ms-overflow-style': 'none',
		scrollbarWidth: 'none',

		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	contentContainerStyle: {
		maxWidth: '100vw',
		position: 'relative',
		flex: '1 1 auto',
		height: '0%',
	},
}))

const PageLayout = ({ children }: Props) => {
	const { background1, contentContainerStyle, paperWrapper } = useStyles()

	const largerThanMD = useLargerThanMD()

	return (
		<Grid component={Paper} container className={paperWrapper}>
			<Grid item>
				<AppHeader />
			</Grid>

			<Grid item container className={contentContainerStyle}>
				<Grid xs={12} item className={background1}>
					{children}
				</Grid>

				{largerThanMD && (
					<Grid item xs={12}>
						<LayoutImage />
					</Grid>
				)}
			</Grid>
		</Grid>
	)
}

export default PageLayout
