import Grid from '@mui/material/Grid'
import React from 'react'

interface Props {
	children: React.ReactNode
}

const CenterLayout = ({ children }: Props) => {
	return (
		<Grid container justifyContent='center'>
			<Grid item xs={11} md={9} lg={7} xl={6}>
				{children}
			</Grid>
		</Grid>
	)
}

export default CenterLayout
