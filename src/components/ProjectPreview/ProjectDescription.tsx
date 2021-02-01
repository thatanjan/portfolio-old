import React from 'react'
import Paper from '@material-ui/core/Paper'

interface Props {
	description: string
}

const ProjectDescription = ({ description }: Props) => {
	return <Paper>{description}</Paper>
}

export default ProjectDescription
