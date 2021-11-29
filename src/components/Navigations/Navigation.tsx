import React from 'react'
import Paper from '@mui/material/Paper'
import Slide from '@mui/material/Slide'

import TypographyLink from 'components/Links/TypographyLink'

interface Props {
	show: boolean
}

const Navigation = ({ show }: Props) => {
	return (
		<Slide
			direction={show ? 'left' : 'right'}
			in={show}
			mountOnEnter
			unmountOnExit
		>
			<Paper
				sx={{
					position: 'fixed',
					top: 0,
					left: 0,
					height: '100vh',
					width: '100vw',
					opacity: 0.9,
					backdropFilter: 'blur(10px)',
				}}
			></Paper>
		</Slide>
	)
}

export default Navigation
