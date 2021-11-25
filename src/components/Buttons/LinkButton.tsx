import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

import MuiLink from 'components/Links/MuiLink'

interface Props extends ButtonProps {
	href: string
	children: React.ReactNode
}

const LinkButton = ({ children, ...others }: Props) => (
	<MuiLink MuiComponent={Button} {...others}>
		{children}
	</MuiLink>
)

export default LinkButton
