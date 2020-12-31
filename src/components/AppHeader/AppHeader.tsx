import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
})

export default function ButtonAppBar() {
	const { root, title } = useStyles()

	return (
		<div className={root}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' className={title}>
						Anjan
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}
