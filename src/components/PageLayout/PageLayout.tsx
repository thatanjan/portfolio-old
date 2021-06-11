import React, { ReactNode } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { useRouter } from 'next/router'

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
	layoutImageStyle: { width: '100%' },
	contentStyle: {
		[theme.breakpoints.up('md')]: {
			marginLeft: '33.33%',
		},
	},
}))

const PageLayout = ({ children }: Props) => {
	const { pathname } = useRouter()

	const {
		paperWrapper,
		layoutImageFixStyle,
		layoutImageStyle,
		contentStyle,
	} = useStyles()

	const largerThanMD = useLargerThanMD()

	return (
		<Grid component={Paper} container className={paperWrapper}>
			<Grid item>
				<AppHeader />
			</Grid>

			<Grid item container>
				{pathname === '/' && (
					<Grid
						lg={12}
						item
						className={clsx(largerThanMD ? layoutImageFixStyle : layoutImageStyle)}
					>
						<LayoutImage />
					</Grid>
				)}

				<Grid xs={12} md={8} item className={contentStyle}>
					{children}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default PageLayout
