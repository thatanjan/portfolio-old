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
		minHeight: '100vh',
	},
	layoutImageFixStyle: {
		position: 'fixed',
		width: '33.333%',
		height: '100%',
	},
	layoutImageStyle: { width: '100%' },
	contentStyle: {
		padding: '0 1rem',
		[theme.breakpoints.up('md')]: {
			marginLeft: '33.33%',
			padding: '0 2rem',
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

	const showLayoutImage = (): boolean | string => {
		if (pathname !== '/' && !largerThanMD) return false

		if (pathname === '/' && !largerThanMD) return layoutImageStyle

		return layoutImageFixStyle
	}

	return (
		<Grid component={Paper} container className={paperWrapper}>
			<Grid item>
				<AppHeader />
			</Grid>

			<Grid item container>
				{showLayoutImage() && (
					<Grid lg={12} item className={clsx(showLayoutImage())}>
						{' '}
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
