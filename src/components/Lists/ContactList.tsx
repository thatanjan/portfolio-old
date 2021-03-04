import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SvgIcon from '@material-ui/core/SvgIcon'
import MuiLink from 'components/Links/MuiLink'
import { nanoid } from 'nanoid'

import allContacts, { Contact } from './ContactListData'

const useStyles = makeStyles({
	root: {
		display: 'grid',
		placeItems: 'center',
		height: '100%',
		gridTemplateRows: '20% 80%',
		width: '100%',
	},
	listStyle: {
		width: '70%',
		alignSelf: 'self-start',
	},
})

export default function SimpleList() {
	const { root, listStyle } = useStyles()

	return (
		<div className={root}>
			<Typography variant='h3'>Feel Free to contact me</Typography>

			<List
				component={Paper}
				className={listStyle}
				aria-label='main mailbox folders'
			>
				{allContacts.map(({ name, Icon, link }: Contact) => (
					<MuiLink
						MuiComponent={ListItem}
						href={link}
						target='_blank'
						key={nanoid()}
						button
					>
						<ListItemIcon>
							<SvgIcon component={Icon} fontSize='large' viewBox='0 0 600 476.6' />
						</ListItemIcon>
						<ListItemText primary={name} primaryTypographyProps={{ variant: 'h6' }} />
					</MuiLink>
				))}
			</List>
		</div>
	)
}
