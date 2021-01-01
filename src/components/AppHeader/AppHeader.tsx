import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	root: {
		width: '100vw',
		height: '10vh',
	},
	toolbarStyle: {
		height: 'inherit',
	},
})

export default function ButtonAppBar() {
	const { root, toolbarStyle } = useStyles()

	return (
		<AppBar className={root} position='static' color='transparent'>
			<Toolbar className={toolbarStyle}>
				<Typography variant='h6'>Anjan</Typography>
			</Toolbar>
		</AppBar>
	)
}
