import React from 'react'
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
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
		[theme.breakpoints.down('md')]: {
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
						target='_blank'
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
