import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'

import FullWidthTabs from 'components/Tabs/FullWidthTabs'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: '100vw',
	},
}))

const NavigationBar = () => {
	const { root } = useStyles()

	return (
		<AppBar className={root} position='static' color='default'>
			<FullWidthTabs />{' '}
		</AppBar>
	)
}
export default NavigationBar
