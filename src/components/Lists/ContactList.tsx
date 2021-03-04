import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SvgIcon from '@material-ui/core/SvgIcon'

import Instagram from '../../../public/svgs/social_media/instagram.svg'
import Linkedin from '../../../public/svgs/social_media/linkedin.svg'
import Facebook from '../../../public/svgs/social_media/facebook.svg'
import Twitter from '../../../public/svgs/social_media/twitter.svg'
import Youtube from '../../../public/svgs/social_media/youtube.svg'

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
				<ListItem button>
					<ListItemIcon>
						<SvgIcon component={Instagram} fontSize='large' viewBox='0 0 600 476.6' />
					</ListItemIcon>
					<ListItemText primary='Inbox' />
				</ListItem>
			</List>
		</div>
	)
}
