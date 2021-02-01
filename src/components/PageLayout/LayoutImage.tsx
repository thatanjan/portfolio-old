import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import StyledImage from 'components/Images/StyledImage'

const useStyles = makeStyles({
	imageStyle: {},
	containerStyle: {
		width: '85%',
		height: '90%',
		display: 'grid',
		alignItems: 'end',
		'& > div': {
			height: 'inherit',
		},
	},
})

const LayoutImage = () => {
	const { imageStyle, containerStyle } = useStyles()

	return (
		<>
			<div className={containerStyle}>
				<StyledImage source='/myImageLayout.png' styleClass={imageStyle} />
			</div>
		</>
	)
}

export default LayoutImage
