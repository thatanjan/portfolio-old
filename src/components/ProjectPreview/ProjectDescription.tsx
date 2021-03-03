import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import SectionTitle from './SectionTitle'

interface Props {
	title: string
	description: string
	styleName?: string
}

export const titlePadding = 1

const useStyles = makeStyles({
	descriptionStyle: {
		padding: `${titlePadding}rem`,
		fontSize: '1.3rem',
	},
	descriptionContainer: {
		marginBottom: '5%',
	},
})

const ProjectDescription = ({ title, description, styleName }: Props) => {
	const { descriptionStyle, descriptionContainer } = useStyles()

	return (
		<Paper className={clsx(descriptionContainer, true && styleName)}>
			<SectionTitle text={title} />
			<Paper className={descriptionStyle}>{description}</Paper>
		</Paper>
	)
}

export default ProjectDescription
