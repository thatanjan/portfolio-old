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

interface Props {
	imagePath: string
}

const ProjectImage = ({ imagePath }: Props) => {
	const { boxStyle, imageStyle } = useStyles()

	return (
		<Box className={boxStyle}>
			<StyledImage imagePath={imagePath} styleClass={imageStyle} />
		</Box>
	)
}

export default ProjectImage
