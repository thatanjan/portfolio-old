import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import MuiLink from 'components/Links/MuiLink'

interface Props {
	title: string
	visitLink: string
}

const VisitButton = ({ visitLink, title }: Props) => {
	return (
		<MuiLink
			MuiComponent={Grid}
			href={visitLink}
			item
			component={Button}
			variant='contained'
		>
			visit {title}
		</MuiLink>
	)
}

export default VisitButton
