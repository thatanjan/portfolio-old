import React from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { nanoid } from 'nanoid'

interface Props {
	features: string[]
}

const ProjectFeatures = ({ features }: Props) => {
	return (
		<>
			<Typography variant='h3'>Features</Typography>

			<List>
				{features.map((feature, index) => (
					<ListItem key={nanoid()}>
						<ListItemText primary={`${index + 1}. ${feature}`} />
					</ListItem>
				))}
			</List>
		</>
	)
}

export default ProjectFeatures
