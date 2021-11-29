import React from 'react'
import { GetStaticProps } from 'next'
import { nanoid } from 'nanoid'

import TitleHeader from 'components/Headers/TitleHeader'
import ProjectPreview from 'components/Project/ProjectPreview'
import CenterLayout from 'components/Layouts/CenterLayout'

import Project from 'classes/Project/Project'

import allProject, { allProjectPaths } from 'data/projects/allProject'

interface Props {
	projects: Project[]
}

const Projects = ({ projects }: Props) => {
	return (
		<CenterLayout>
			<TitleHeader
				text='My projects'
				description='A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.
'
			/>

			{projects.map((project) => (
				<ProjectPreview {...project} key={nanoid()} />
			))}
		</CenterLayout>
	)
}

// export getStaticProps function

export const getStaticProps: GetStaticProps<Props> = async () => {
	return {
		props: {
			projects: JSON.parse(JSON.stringify(allProject)),
		},
	}
}

export default Projects
