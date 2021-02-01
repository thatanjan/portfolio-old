import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import MuiLink from 'components/Links/MuiLink'
import VisitButton from 'components/Buttons/VisitButton'
import ProjectTitle from './ProjectTitle'
import ProjectImage from './ProjectImage'

interface Props {
	name: string
	subtitle: string
	moreLink: string
	visitLink: string
}

export const commonContaienrStyle = {}

const useStyles = makeStyles({
	buttonContainer: {
		padding: '0 10%',
		paddingTop: '2%',
		paddingBottom: '2%',
		justifyContent: 'space-evenly',
		'&  .MuiGrid-item': {
			flexBasis: '45%',
		},
	},
})

const ProjectPreview = ({ name, subtitle, moreLink, visitLink }: Props) => {
	const { buttonContainer } = useStyles()

	return (
		<Box>
			<ProjectImage />

			<ProjectTitle title={name} subtitle={subtitle} />

			<Grid container className={buttonContainer}>
				<VisitButton visitLink={visitLink} title={name} />

				<MuiLink
					variant='contained'
					MuiComponent={Grid}
					href={moreLink}
					item
					component={Button}
				>
					Learn more
				</MuiLink>
			</Grid>
		</Box>
	)
}

export default ProjectPreview
