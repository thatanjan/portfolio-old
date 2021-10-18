import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import useLargerThanMD from 'hooks/useLargerThanMD'

import MuiLink from 'components/Links/MuiLink'
import TopNavigation from 'components/Navigation/TopNavigation'
import FullWidthTabs from 'components/Tabs/FullWidthTabs'

interface TransparentProps {
	shouldBeTransparent: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '90vw',
		flexGrow: 1,
		top: '5vh',
		margin: '0 5%',
		background: ({ shouldBeTransparent }: TransparentProps) =>
			shouldBeTransparent ? 'none' : theme.palette.background.paper,
		borderRadius: '10rem',

		[theme.breakpoints.down('md')]: {
			background: ({ shouldBeTransparent }: TransparentProps) =>
				shouldBeTransparent ? 'none' : theme.palette.primary.main,
		},
	},
	toolbarStyle: {
		justifyContent: 'space-between',
	},
	titleStyle: {
		marginLeft: theme.spacing(2),
	},
}))

export default function ButtonAppBar() {
	const [shouldBeTransparent, setShouldBeTransparent] = useState(false)
	const { root, titleStyle, toolbarStyle } = useStyles({ shouldBeTransparent })

	const isHomePage = useRouter().asPath === '/'
	const largerThanMD = useLargerThanMD()

	const handleScroll = () => {
		const { scrollY } = window

		if (scrollY < 150) {
			setShouldBeTransparent(true)
		} else {
			setShouldBeTransparent(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			if (isHomePage || !largerThanMD)
				window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		if (largerThanMD) {
			setShouldBeTransparent(true)
		} else if (isHomePage) {
			setShouldBeTransparent(true)
		} else {
			setShouldBeTransparent(false)
		}
	}, [largerThanMD, isHomePage])

	return (
		<AppBar className={root} position='fixed' elevation={0}>
			<Toolbar className={toolbarStyle}>
				<MuiLink
					MuiComponent={Typography}
					className={titleStyle}
					variant='h6'
					href='/'
				>
					Anjan
				</MuiLink>

				{largerThanMD && <FullWidthTabs />}
				{!largerThanMD && <TopNavigation />}
			</Toolbar>
		</AppBar>
	)
}
