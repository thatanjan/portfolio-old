import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

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
				color='primary'
			>
				<Typography variant='button'>{text}</Typography>
			</MuiLink>
		</Grid>
	)
}

export default LinkButton
