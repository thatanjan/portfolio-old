import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import ProfileImage from 'components/Images/ProfileImage'

const Index = () => {
	return (
		<Grid
			container
			sx={{ minHeight: '100vh' }}
			justifyContent='center'
			alignItems='center'
		>
			<Grid
				item
				xs={10}
				sx={{ display: 'grid', placeItems: 'center', alignSelf: 'flex-end' }}
			>
				<ProfileImage />
			</Grid>
			<Grid item xs={10} sx={{ alignSelf: 'baseline' }}>
				<Typography>
					I'm a Freelance UI/UX Designer and Developer based in London, England. I
					strives to build immersive and beautiful web applications through carefully
					crafted code and user-centric design.
				</Typography>
			</Grid>
		</Grid>
	)
}

export default Index
