import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

interface Props {
	frontEndTechStack: [string]
	backEndTechStack: [string]
}

const ProjectTechnologies = ({
	frontEndTechStack,
	backEndTechStack,
}: Props) => {
	console.log(backEndTechStack)
	return (
		<Paper>
			<Typography variant='h4'>Technolgies Used</Typography>
		</Paper>
	)
}

export default ProjectTechnologies
