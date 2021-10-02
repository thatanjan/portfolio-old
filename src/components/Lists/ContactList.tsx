import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import MuiLink from 'components/Links/MuiLink'
import { nanoid } from 'nanoid'

import allContacts, { Contact } from './ContactListData'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'grid',
		placeItems: 'center',
		height: '100%',
		gridTemplateRows: '20% 80%',
		width: '100%',
	},
	listStyle: {
		width: '70%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
		alignSelf: 'self-start',
	},
}))

export default function SimpleList() {
	const { root, listStyle } = useStyles()

	return (
		<div className={root}>
			<Typography variant='h3'>Feel Free to contact me</Typography>

			<List
				component={Paper}
				className={listStyle}
				aria-label='main mailbox folders'
				elevation={0}
			>
				{allContacts.map(({ name, Icon, link }: Contact) => (
					<MuiLink
						MuiComponent={ListItem}
						href={link}
						target={name === 'anjan.cules@gmail.com' ? null : '_blank'}
						key={nanoid()}
						button
					>
						<ListItemAvatar>
							<Avatar src={Icon} alt={name} />
						</ListItemAvatar>

						<ListItemText
							primary={name}
							primaryTypographyProps={{
								component: 'h1',
								variant: 'body1',
							}}
						/>
					</MuiLink>
				))}
			</List>
		</div>
	)
}
