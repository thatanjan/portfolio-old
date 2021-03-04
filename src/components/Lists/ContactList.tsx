import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SvgIcon from '@material-ui/core/SvgIcon'
import { nanoid } from 'nanoid'

import allContacts, { Contact } from './ContactListData'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: 360,
			backgroundColor: theme.palette.background.paper,
		},
	})
)

export default function SimpleList() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<List component='nav' aria-label='main mailbox folders'>
				{allContacts.map(({ name, Icon, link }: Contact) => (
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
