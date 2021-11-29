import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import Zoom from '@mui/material/Zoom'
import Fab from '@mui/material/Fab'
import Box from '@mui/material/Box'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import Navigation from './Navigation'

const NavFab = () => {
	const theme = useTheme()
	const transitionDuration = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen,
	}

	const fabs = [
		{
			icon: <MenuIcon />,
			label: 'Menu',
		},
		{
			icon: <CloseIcon />,
			label: 'Close',
		},
	]

	const [value, setValue] = useState(0)

	const handleChangeIndex = () => {
		setValue(value ? 0 : 1)
	}

	return (
		<Box>
			<Navigation show={Boolean(value)} closeNav={() => setValue(0)} />
			{fabs.map(({ icon }, index) => (
				<Zoom
					in={value === index}
					timeout={transitionDuration}
					style={{
						transitionDelay: `${transitionDuration.exit}ms`,
					}}
					unmountOnExit
				>
					<Fab
						sx={{
							position: 'fixed',
							bottom: 16,
							right: 16,
							color: 'white',
							zIndex: 11,
						}}
						color='primary'
						onClick={handleChangeIndex}
						size='medium'
					>
						{icon}
					</Fab>
				</Zoom>
			))}
		</Box>
	)
}

export default NavFab
