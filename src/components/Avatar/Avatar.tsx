import React from 'react'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	smallSize: {
		borderRadius: '50%',
		overflow: 'hidden',
		objectFit: 'cover',
	},
	smallAvatarContainer: {
		width: '30vw',
		margin: '10% auto',
	},
})

const Avatar = () => {
	const { smallSize, smallAvatarContainer } = useStyles()
	return (
		<>
			<div className={smallAvatarContainer}>
				<Image
					className={smallSize}
					src='/ww.jpg'
					height={0}
					width={0}
					layout='responsive'
				/>
			</div>
			<h1>hello world</h1>
		</>
	)
}

export default Avatar
