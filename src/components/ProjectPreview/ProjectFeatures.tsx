import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
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
