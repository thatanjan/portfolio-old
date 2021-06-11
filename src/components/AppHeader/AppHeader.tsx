import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import useLargerThanMD from 'hooks/useLargerThanMD'

import MuiLink from 'components/Links/MuiLink'
import TopNavigation from 'components/Navigation/TopNavigation'
import FullWidthTabs from 'components/Tabs/FullWidthTabs'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '90vw',
		flexGrow: 1,
		top: '5vh',
		margin: '0 5%',
		background: theme.palette.background.paper,
		borderRadius: '10rem',

		[theme.breakpoints.up('md')]: {
			top: '8vh',
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
	const { root, titleStyle, toolbarStyle } = useStyles()

	const largerThanMD = useLargerThanMD()

	return (
		<AppBar className={root} position='fixed'>
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
