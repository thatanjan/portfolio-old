import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import StyledImage from 'components/Images/StyledImage'

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
				<StyledImage styleClass={smallSize} />
			</div>
		</>
	)
}

export default Avatar
