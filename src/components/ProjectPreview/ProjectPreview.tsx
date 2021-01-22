import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import StyledImage from 'components/Images/StyledImage'
import MuiLink from 'components/Links/MuiLink'

interface Props {
	title: string
	subtitle: string
}

const commonContaienrStyle = {
	padding: '0 10%',
}

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

	titleGridContainer: {
		...commonContaienrStyle,
		'& > .MuiGrid-item': {
			flexBasis: '100%',
		},
	},
	buttonContainer: {
		...commonContaienrStyle,
		paddingTop: '2%',
		paddingBottom: '2%',
		'&  .MuiGrid-item': {
			flexBasis: '50%',
		},
	},
})

const ProjectPreview = ({ title, subtitle }: Props) => {
	const {
		imageStyle,
		boxStyle,
		titleGridContainer,
		buttonContainer,
	} = useStyles()

	return (
		<>
			<Box className={boxStyle}>
				<StyledImage styleClass={imageStyle} />
			</Box>

			<Grid container className={titleGridContainer}>
				<Grid item>
					<Typography variant='h3'>{title}</Typography>
				</Grid>
				<Grid item>
					<Typography variant='h5'>{subtitle}</Typography>
				</Grid>
			</Grid>

			<Grid container className={buttonContainer}>
				<MuiLink MuiComponent={Grid} href='/' item component={Button}>
					visit {title}
				</MuiLink>

				<MuiLink MuiComponent={Grid} href='/' item component={Button}>
					Learn more
				</MuiLink>
			</Grid>
		</>
	)
}

export default ProjectPreview