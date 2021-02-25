import React from 'react'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { nanoid } from 'nanoid'

import SectionTitle from './SectionTitle'

interface Props {
	frontEndTechStack: [string]
	backEndTechStack: [string]
}

interface TechnologiesSectionProps {
	techStack: [string]
	endType: string
}

const TechnologiesSection = ({
	techStack,
	endType,
}: TechnologiesSectionProps) => {
	return (
		<Box>
			<Typography variant='h5'>{endType} End</Typography>

			{techStack.map(item => (
				<Chip key={nanoid()} color='secondary' label={item} />
			))}
		</Box>
	)
}

const ProjectTechnologies = ({
	frontEndTechStack,
	backEndTechStack,
}: Props) => {
	const createSectionProps = (endType: string, techStack: [string]) => ({
		endType,
		techStack,
	})

	return (
		<Paper>
			<SectionTitle text='technolgies used' />

			<TechnologiesSection {...createSectionProps('front', frontEndTechStack)} />
			<TechnologiesSection {...createSectionProps('back', backEndTechStack)} />
		</Paper>
	)
}

export default ProjectTechnologies
