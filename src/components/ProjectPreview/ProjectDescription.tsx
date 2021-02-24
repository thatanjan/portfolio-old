import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

interface Props {
	description: string
}

const useStyles = makeStyles({
	descriptionStyle: {
		padding: '1rem',
		margin: '5% 0',
		fontSize: '1.3rem',
	},
})

const ProjectDescription = ({ description }: Props) => {
	const { descriptionStyle } = useStyles()

	return <Paper className={descriptionStyle}>{description}</Paper>
}

export default ProjectDescription
