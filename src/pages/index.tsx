import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Image from 'next/image'

import ProfileImage from 'components/Images/ProfileImage'

const BackgroundImage = () => (
	<Box
		sx={{
			position: 'fixed',
			height: '100vh',
			width: '100vw',
			overflow: 'hidden',
			zIndex: 0,
			top: 0,
			left: 0,
		}}
	>
		<Image
			src='dfdf'
			loader={() => 'https://pbs.twimg.com/media/DYd2UBlX4AA_ysG.jpg:large'}
			layout='fill'
			objectFit='cover'
		/>

		<Box
			sx={{
				background: 'rgba(0,0,0,.85)',
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
			}}
		/>
	</Box>
)

const Index = () => {
	return (
		<>
			<BackgroundImage />

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
					width: {
						lg: '80%',
						xl: '60%',
					},
					margin: {
						lg: '0 auto',
					},
					position: 'relative',
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
		</>
	)
}

export default Index
