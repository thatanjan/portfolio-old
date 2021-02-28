import React from 'react'
import Button from '@material-ui/core/Button'

import MuiLink from 'components/Links/MuiLink'

interface Props {
	text: string
	link: string
	staticRoute?: string
}

const LinkButton = ({ staticRoute, link, text }: Props) => {
	return (
		<MuiLink
			MuiComponent={Button}
			href={staticRoute || link}
			as={link}
			variant='contained'
		>
			{text}
		</MuiLink>
	)
}

export default LinkButton
