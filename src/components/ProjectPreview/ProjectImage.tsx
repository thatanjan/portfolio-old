import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import StyledImage from 'components/Images/StyledImage'

interface Props {}

const useStyles = makeStyles({
	imageStyle: {},
	boxStyle: {
		margin: '5% auto',
		width: '80%',
		'& :first-child': {
			'& :first-child': {
				paddingTop: '60% !important',
			},
		},
	},
})

const ProjectImage = (props: Props) => {
	const { boxStyle, imageStyle } = useStyles()

	return (
		<Box className={boxStyle}>
			<StyledImage styleClass={imageStyle} />
		</Box>
	)
}

export default ProjectImage
