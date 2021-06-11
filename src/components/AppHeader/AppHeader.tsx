import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import useLargerThanMD from 'hooks/useLargerThanMD'
import TopNavigation from 'components/Navigation/TopNavigation'
import FullWidthTabs from 'components/Tabs/FullWidthTabs'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100vw',
		flexGrow: 1,
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
		<AppBar className={root} position='static' color='transparent'>
			<Toolbar className={toolbarStyle}>
				<Typography className={titleStyle} variant='h6'>
					Anjan
				</Typography>

				{largerThanMD && <FullWidthTabs />}
				{!largerThanMD && <TopNavigation />}
			</Toolbar>
		</AppBar>
	)
}
