import React from 'react'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
	avatarStyle: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexShrink: 0,
		borderRadius: '50%',
		overflow: 'hidden',
		objectFit: 'cover',
	},
})

const Avatar = () => {
	const { avatarStyle } = useStyles()
	return (
		<Image
			className={avatarStyle}
			src='/ww.jpg'
			height={0}
			width={0}
			layout='responsive'
		/>
	)
}

export default Avatar
