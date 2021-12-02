import React, { ReactNode } from 'react'
import Paper from '@mui/material/Paper'

import NavFab from 'components/Navigations/NavFab'

interface Props {
	children: ReactNode
}

const PageLayout = ({ children }: Props) => {
	return (
		<Paper
			sx={{
				minHeight: '100vh',
				maxWidth: '100vw',
				overflowX: 'hidden',
			}}
		>
			{children}

			<NavFab />
		</Paper>
	)
}

export default PageLayout
