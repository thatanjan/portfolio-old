import React from 'react'
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar'

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
