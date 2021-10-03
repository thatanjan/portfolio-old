import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { nanoid } from 'nanoid'

import SectionTitle from 'components/ProjectPreview/SectionTitle'

interface Props {
	features: string[]
}

const ProjectFeatures = ({ features }: Props) => {
	return (
		<>
			<SectionTitle text='Features' />

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
