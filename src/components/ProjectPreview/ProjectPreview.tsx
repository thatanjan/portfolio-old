import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import LinkButton from 'components/Buttons/LinkButton'
import ProjectTitle from './ProjectTitle'
import ProjectImage from './ProjectImage'

interface Props {
	name: string
	subtitle: string
	moreLink?: string
	sourceCodeLink?: string
	visitLink: string
	imagePath: string
}

export const commonContaienrStyle = '0 10%'

export const useSmallSizeStyle = makeStyles((theme: Theme) => ({
	boxStyle: {
		padding: commonContaienrStyle,
		[theme.breakpoints.down('xs')]: {
			padding: '0 5%',
		},
	},
}))

const useStyles = makeStyles({
	buttonContainer: {
		paddingTop: '2%',
		paddingBottom: '2%',
		justifyContent: 'space-evenly',
		'&  .MuiGrid-item': {
			flexBasis: '45%',

			'& a': {
				width: '100%',
			},
		},
	},
})

const ProjectPreview = ({
	name,
	subtitle,
	moreLink,
	visitLink,
	sourceCodeLink,
	imagePath,
}: Props) => {
	const { buttonContainer } = useStyles()

	const { boxStyle } = useSmallSizeStyle()

	const staticRoute = '/work/[work]'
	return (
		<Box className={boxStyle}>
			<ProjectImage imagePath={imagePath} />

			<ProjectTitle name={name} subtitle={subtitle} />

			<Grid container className={buttonContainer}>
				<LinkButton link={visitLink} text='visit project' />

				{sourceCodeLink && <LinkButton link={sourceCodeLink} text='source code' />}

				{moreLink && (
					<LinkButton link={moreLink} text='learn more' staticRoute={staticRoute} />
				)}
			</Grid>
		</Box>
	)
}

export default ProjectPreview
