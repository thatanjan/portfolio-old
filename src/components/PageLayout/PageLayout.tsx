import React, { ReactNode } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import makeStyles from '@mui/styles/makeStyles';
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
		[theme.breakpoints.down('lg')]: {
			width: '45%',
		},
	},
	layoutImageStyle: { width: '100%' },
	contentStyle: {
		padding: '0 1rem',
		marginTop: ({ pathname }: { pathname: string }) =>
			pathname === '/' ? '3rem' : '7rem',
		[theme.breakpoints.up('md')]: {
			marginTop: ({ pathname }: { pathname: string }) =>
				pathname === '/' ? '10rem' : '7rem',
			marginLeft: '33.33%',
			padding: '0 2rem',
		},
		[theme.breakpoints.down('lg')]: {
			marginLeft: '45%',
		},
		[theme.breakpoints.down('md')]: {
			marginLeft: '0%',
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
	} = useStyles({ pathname })

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
