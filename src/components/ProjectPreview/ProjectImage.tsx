import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import StyledImage from 'components/Images/StyledImage'

const useStyles = makeStyles({
	imageStyle: {},
	boxStyle: {
		margin: '5% auto',
		'& :first-child': {
			'& :first-child': {
				paddingTop: '60% !important',
			},
		},
	},
})

const ProjectImage = () => {
	const { boxStyle, imageStyle } = useStyles()

	return (
		<Box className={boxStyle}>
			<StyledImage source='/ww.jpg' styleClass={imageStyle} />
		</Box>
	)
}

export default ProjectImage
