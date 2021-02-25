import React from 'react'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { nanoid } from 'nanoid'

import { titlePadding } from './ProjectDescription'
import SectionTitle from './SectionTitle'

interface Props {
	frontEndTechStack: [string]
	backEndTechStack: [string]
}

interface TechnologiesSectionProps {
	techStack: [string]
	endType: string
}

const useStyles = makeStyles({
	endTypeStyle: {
		padding: `1rem ${titlePadding + 1}rem`,
	},
	stackContainerStyle: {
		padding: `.5rem ${titlePadding + 2}rem 1rem`,
	},
	chipStyle: {
		marginRight: '1rem',
	},
})

const TechnologiesSection = ({
	techStack,
	endType,
}: TechnologiesSectionProps) => {
	const { chipStyle, endTypeStyle, stackContainerStyle } = useStyles()

	return (
		<Box>
			<Typography variant='h5' className={endTypeStyle}>
				{endType} End :
			</Typography>

			<Box className={stackContainerStyle}>
				{techStack.map(item => (
					<Chip
						className={chipStyle}
						key={nanoid()}
						color='secondary'
						label={item}
					/>
				))}
			</Box>
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
