import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SvgIcon from '@material-ui/core/SvgIcon'
import { nanoid } from 'nanoid'

import allContacts, { Contact } from './ContactListData'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		height: '70%',
		alignItems: 'center',
		width: '100%',
	},
})

export default function SimpleList() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<List component={Paper} aria-label='main mailbox folders'>
				{allContacts.map(({ name, Icon }: Contact) => (
					<ListItem key={nanoid()} button>
						<ListItemIcon>
							<SvgIcon component={Icon} fontSize='large' viewBox='0 0 600 476.6' />
						</ListItemIcon>
						<ListItemText primary={name} />
					</ListItem>
				))}
			</List>
		</div>
	)
}
