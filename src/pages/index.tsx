import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import ProfileImage from 'components/Images/ProfileImage'

const Index = () => {
	return (
		<Box
			sx={{
				display: 'grid',
				height: '100vh',
				gridTemplateColumns: {
					xs: '1fr',
					md: '3fr 5fr',
				},
				gridTemplateRows: {
					xs: '1fr 1fr',
					md: '1fr',
				},
				rowGap: {
					xs: '2rem',
					md: '0px',
				},
				placeItems: {
					md: 'center',
				},
				columnGap: {
					md: '3rem',
				},
			}}
		>
			<Box
				sx={{
					display: 'grid',
					placeItems: {
						xs: 'end center',
					},
					justifySelf: {
						md: 'end',
					},
				}}
			>
				<ProfileImage />
			</Box>
			<Box>
				<Typography>
					Maiores eius voluptatum ipsa nesciunt illo sunt ratione fugiat dignissimos
					odio. Repudiandae dolore a consectetur autem non? Quasi vero corporis
					quibusdam rem doloremque in. Deleniti quidem ea recusandae alias nostrum
					Deleniti atque recusandae tempore fuga iste alias Consequuntur saepe sequi
					maiores sunt molestiae aut fugit.
				</Typography>
			</Box>
		</Box>
	)
}

export default Index
