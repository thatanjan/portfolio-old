import React, { useState, MouseEvent, KeyboardEvent } from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

import FullWidthTabs from 'components/Tabs/FullWidthTabs'

import MenuIcon from 'components/Menu/MenuIcon'

const TopNavigation = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const toggleDrawer = (open: boolean) => (
		event: KeyboardEvent | MouseEvent
	) => {
		if (
			event &&
			event.type === 'keydown' &&
			((event as KeyboardEvent).key === 'Tab' ||
				(event as KeyboardEvent).key === 'Shift')
		) {
			return
		}

		setIsDrawerOpen(open)
	}

	return (
		<>
			<MenuIcon toggle={toggleDrawer(true)} />

			<SwipeableDrawer
				anchor='left'
				open={isDrawerOpen}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				elevation={0}
			>
				<FullWidthTabs setIsDrawerOpen={setIsDrawerOpen} />
			</SwipeableDrawer>
		</>
	)
}

export default TopNavigation
