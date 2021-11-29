import React from 'react'
import Paper from '@mui/material/Paper'
import Slide from '@mui/material/Slide'
import { nanoid } from 'nanoid'

import TypographyLink from 'components/Links/TypographyLink'

interface Props {
	show: boolean
	closeNav: () => void
}

const links = [
	{
		href: '/',
		text: 'Home',
	},
	{
		href: '/skills',
		text: 'Skills',
	},
	{
		href: '/projects',
		text: 'Projects',
	},
	{
		href:
			'https://www.youtube.com/channel/UCBaGowNYTUsm3IDaHbLRMYw?sub_confirmation=1',
		text: 'Youtube',
	},
	{
		href: '/about',
		text: 'About',
	},
	{
		href: 'https://www.culescoding.space/',
		text: 'Blog',
	},
	{
		href: '/contact',
		text: 'Contact',
	},
]

const Navigation = ({ show, closeNav }: Props) => {
	const baseFontSize = 1
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
					display: 'grid',
					gridTemplateColumns: '1fr',
					placeItems: 'center',
					zIndex: 10,
					backgroundColor: '#0e0e0e',
				}}
			>
				{links.map(({ href, text }) => (
					<TypographyLink
						href={href}
						key={nanoid()}
						sx={{
							transition: 'all 0.1s ease-in-out',
							fontSize: {
								xs: `${baseFontSize}rem`,
								sm: `${baseFontSize + 0.5}rem`,
								md: `${baseFontSize + 1}rem`,
							},
							'&:hover': {
								fontSize: {
									xs: `${baseFontSize + 0.5}rem`,
									sm: `${baseFontSize + 1}rem`,
									md: `${baseFontSize + 1.5}rem`,
								},
								textDecoration: 'underline',
							},
							color: 'white',
						}}
						onClick={closeNav}
					>
						{text}
					</TypographyLink>
				))}
			</Paper>
		</Slide>
	)
}

export default Navigation
