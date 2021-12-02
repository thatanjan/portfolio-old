import React from 'react'
import { GetStaticProps } from 'next'
import { nanoid } from 'nanoid'
import { NextSeo } from 'next-seo'

import TitleHeader from 'components/Headers/TitleHeader'
import ProjectPreview from 'components/Project/ProjectPreview'
import CenterLayout from 'components/Layouts/CenterLayout'

import Project from 'classes/Project/Project'

import allProject from 'data/projects/allProject'

interface Props {
	projects: Project[]
}

const Projects = ({ projects }: Props) => {
	return (
		<>
			<NextSeo title='Projects' description='Projects of Anjan Shomodder' />

			<CenterLayout>
				<TitleHeader
					text='My projects'
					description='All web development projects from front end to full stack'
				/>

				{projects.map(project => (
					<ProjectPreview {...project} key={nanoid()} />
				))}
			</CenterLayout>
		</>
	)
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	return {
		props: {
			projects: JSON.parse(JSON.stringify(allProject)),
		},
	}
}

export default Projects
