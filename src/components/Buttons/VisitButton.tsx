import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import MuiLink from 'components/Links/MuiLink'

interface Props {
	text: string
	link: string
}

const LinkButton = ({ link, text }: Props) => {
	return (
		<MuiLink
			MuiComponent={Grid}
			href={link}
			item
			component={Button}
			variant='contained'
		>
			{text}
		</MuiLink>
	)
}

export default LinkButton
