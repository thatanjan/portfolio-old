import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import StyledImage from 'components/Images/StyledImage'

interface Props {
	title: string
	subtitle: string
}

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

	titleGridContainer: {
		'& > .MuiGrid-item': {
			flexBasis: '100%',
		},
	},
})

const ProjectPreview = ({ title, subtitle }: Props) => {
	const { imageStyle, boxStyle, titleGridContainer } = useStyles()

	return (
		<>
			<Box className={boxStyle}>
				<StyledImage styleClass={imageStyle} />
			</Box>

			<Grid container className={titleGridContainer}>
				<Grid item>
					<Typography>{title}</Typography>
				</Grid>
				<Grid item>
					<Typography>{subtitle}</Typography>
				</Grid>
			</Grid>
		</>
	)
}

export default ProjectPreview
