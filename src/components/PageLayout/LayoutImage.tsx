import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'

import StyledImage from 'components/Images/StyledImage'
import { LAYOUT_IMAGE } from 'global/variables'

const useStyles = makeStyles((theme: Theme) => ({
	imageStyle: {},
	containerStyle: {
		width: '100%',
		height: '100vh',
		display: 'grid',
		alignItems: 'end',
		'& > div': {
			height: 'inherit',
		},
		[theme.breakpoints.down('xs')]: {
			height: '80vh',
		},
	},
}))

const LayoutImage = () => {
	const { imageStyle, containerStyle } = useStyles()

	return (
		<>
			<div className={containerStyle}>
				<StyledImage imagePath={LAYOUT_IMAGE} styleClass={imageStyle} />
			</div>
		</>
	)
}

export default LayoutImage
