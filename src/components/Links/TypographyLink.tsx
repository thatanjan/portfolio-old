import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

import MuiLink from 'components/Links/MuiLink'

interface Props extends TypographyProps {
	href: string
	children: React.ReactNode
}

const LinkButton = ({ children, ...others }: Props) => (
	<MuiLink MuiComponent={Typography} {...others}>
		{children}
	</MuiLink>
)

export default LinkButton
