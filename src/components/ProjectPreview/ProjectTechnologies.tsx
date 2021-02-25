import React from 'react'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'

import SectionTitle from './SectionTitle'

interface Props {
	frontEndTechStack: [string]
	backEndTechStack: [string]
}

const ProjectTechnologies = ({
	frontEndTechStack,
	backEndTechStack,
}: Props) => {
	return (
		<Paper>
			<SectionTitle text='technolgies used' />
			<Chip color='secondary' label='JavaScript' />
		</Paper>
	)
}

export default ProjectTechnologies
