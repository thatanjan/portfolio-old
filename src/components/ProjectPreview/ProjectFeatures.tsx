import React from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { nanoid } from 'nanoid'

interface Props {}

const ProjectFeatures = (props: Props) => {
	return (
		<>
			<Typography variant='h3'>Features</Typography>

			<List>
				{Array(10)
					.fill(0)
					.map((_, index) => (
						<ListItem key={nanoid()}>
							<ListItemText primary={`${index + 1}. Features`} />
						</ListItem>
					))}
			</List>
		</>
	)
}

export default ProjectFeatures
