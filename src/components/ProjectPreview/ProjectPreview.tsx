import React from 'react'
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import LinkButton from 'components/Buttons/LinkButton'
import ProjectTitle from './ProjectTitle'
import ProjectImage from './ProjectImage'

interface Props {
	name: string
	subtitle: string
	moreLink?: string
	sourceCodeLink?: string
	visitLink: string
	imagePaths: string[]
}

export const commonContaienrStyle = '0 10%'

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
	imagePaths,
}: Props) => {
	const { buttonContainer } = useStyles()

	const staticRoute = '/work/[work]'
	return (
		<Box>
			<ProjectImage imagePaths={imagePaths} />

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
