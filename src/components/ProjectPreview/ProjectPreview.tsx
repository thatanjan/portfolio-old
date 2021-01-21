import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import StyledImage from 'components/Images/StyledImage'

interface Props {}

const useStyles = makeStyles({
	imageStyle: {},
	boxStyle: {
		margin: '0 auto',
		width: '80%',
		'& :first-child': {
			'& :first-child': {
				paddingTop: '60%',
			},
		},
	},
})

const ProjectPreview = (props: Props) => {
	const { imageStyle, boxStyle } = useStyles()

	return (
		<>
			<Box className={boxStyle}>
				<StyledImage styleClass={imageStyle} />
			</Box>
		</>
	)
}

export default ProjectPreview
