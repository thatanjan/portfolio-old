import React from 'react'
import Image, { ImageProps } from 'next/image'
// eslint-disable-next-line import/no-extraneous-dependencies
import { styled } from '@mui/system'
import { useRouter } from 'next/router'

interface AvatarProps extends ImageProps {
	homepage: boolean
}

const AvatarImage = styled(Image)<AvatarProps>(({ homepage }) => ({
	borderRadius: homepage ? '50%' : '0',
	border: homepage ? '10px solid rgba(255,255,255,.1)  !important' : 'none',
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
