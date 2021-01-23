import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import MuiLink from 'components/Links/MuiLink'

interface Props {
	title: string
}

const VisitButton = ({ title }: Props) => {
	return (
		<MuiLink
			MuiComponent={Grid}
			href='/'
			item
			component={Button}
			variant='contained'
		>
			visit {title}
		</MuiLink>
	)
}

export default VisitButton
