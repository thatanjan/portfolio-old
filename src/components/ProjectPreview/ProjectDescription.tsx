import React, { ReactNode } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx'

import SectionTitle from './SectionTitle'

interface Props {
	title: string
	description: string | ReactNode
	styleName?: string
}

export const titlePadding = 1

const useStyles = makeStyles({
	descriptionStyle: {
		padding: '1rem 0 1rem',
	},
	descriptionContainer: {
		marginBottom: '5%',
	},
})

const ProjectDescription = ({ title, description, styleName }: Props) => {
	const { descriptionStyle, descriptionContainer } = useStyles()

	return (
		<Paper
			className={clsx(descriptionContainer, true && styleName)}
			elevation={0}
		>
			<SectionTitle text={title} />
			<Typography
				variant='body1'
				component='h2'
				className={descriptionStyle}
				color='primary'
			>
				{description}
			</Typography>
		</Paper>
	)
}

export default ProjectDescription
