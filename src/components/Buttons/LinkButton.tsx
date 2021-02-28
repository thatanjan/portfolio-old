import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import MuiLink from 'components/Links/MuiLink'

interface Props {
	text: string
	link: string
	staticRoute?: string
}

const LinkButton = ({ staticRoute, link, text }: Props) => {
	return (
		<Grid item>
			<MuiLink
				MuiComponent={Button}
				href={staticRoute || link}
				as={link}
				variant='contained'
			>
				{text}
			</MuiLink>
		</Grid>
	)
}

export default LinkButton
