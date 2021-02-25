import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'

import { titleStyle } from './ProjectDescription'

interface Props {
	frontEndTechStack: [string]
	backEndTechStack: [string]
}

const useStyles = makeStyles({ titleStyle })

const ProjectTechnologies = ({
	frontEndTechStack,
	backEndTechStack,
}: Props) => {
	const { titleStyle: title } = useStyles()

	return (
		<Paper>
			<Typography variant='h4' className={title}>
				Technolgies Used
			</Typography>
			<Chip color='secondary' label='JavaScript' />
		</Paper>
	)
}

export default ProjectTechnologies
