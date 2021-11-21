import React from 'react'
import Image, { ImageProps } from 'next/image'
import Box from '@mui/material/Box'
import { styled, createTheme, ThemeProvider } from '@mui/system'
import { useRouter } from 'next/router'

interface AvatarProps extends ImageProps {
	homepage: boolean
}

const AvatarImage = styled(Image)<AvatarProps>((props) => ({
	borderRadius: props.homepage ? '50%' : '0',
}))

const HomeAvatar = () => {
	const { route } = useRouter()

	const isHomepage = route === '/'

	return (
		<AvatarImage
			src='/profilePictures/profile_main.png'
			height='300px'
			width='300px'
			objectFit='cover'
			objectPosition='top'
			homepage={isHomepage}
			priority
		/>
	)
}

export default HomeAvatar
