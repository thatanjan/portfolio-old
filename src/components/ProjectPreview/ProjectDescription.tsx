import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import SectionTitle from './SectionTitle'

interface Props {
	description: string
}

export const titlePadding = `1rem`

const useStyles = makeStyles({
	descriptionStyle: {
		padding: titlePadding,
		fontSize: '1.3rem',
	},
	descriptionContainer: {
		marginBottom: '5%',
	},
})

const ProjectDescription = ({ description }: Props) => {
	const { descriptionStyle, descriptionContainer } = useStyles()

	return (
		<Paper className={descriptionContainer}>
			<SectionTitle text='description' />
			<Paper className={descriptionStyle}>{description}</Paper>
		</Paper>
	)
}

export default ProjectDescription
