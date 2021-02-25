import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

interface Props {
	description: string
}

export const commonPadding = `1rem`
export const titleStyle = {
	padding: commonPadding,
	paddingBottom: '0',
}

const useStyles = makeStyles({
	descriptionStyle: {
		padding: commonPadding,
		fontSize: '1.3rem',
	},
	title: titleStyle,
	descriptionContainer: {
		marginBottom: '5%',
	},
})

const ProjectDescription = ({ description }: Props) => {
	const { title, descriptionStyle, descriptionContainer } = useStyles()

	return (
		<Paper className={descriptionContainer}>
			<Typography className={title} variant='h4'>
				Description
			</Typography>
			<Paper className={descriptionStyle}>{description}</Paper>
		</Paper>
	)
}

export default ProjectDescription
