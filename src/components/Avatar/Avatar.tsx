import React from 'react'
import makeStyles from '@mui/styles/makeStyles';

import StyledImage from 'components/Images/StyledImage'
import { AVATAR } from 'global/variables'

const useStyles = makeStyles({
	smallSize: {
		borderRadius: '50%',
		overflow: 'hidden',
		objectFit: 'cover',
	},
	avatarContainer: {
		width: '30vw',
		margin: '2rem auto',
	},
})

const Avatar = () => {
	const { smallSize, avatarContainer } = useStyles()
	return (
		<>
			<div className={avatarContainer}>
				<StyledImage imagePath={AVATAR} styleClass={smallSize} />
			</div>
		</>
	)
}

export default Avatar
