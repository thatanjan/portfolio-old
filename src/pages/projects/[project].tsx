import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { nanoid } from 'nanoid'

import ProjectImageSlideShow from 'components/Slides/ImageSlideShow'
import SkillsShow from 'components/Skills/SkillsShow'
import ProjectInfo from 'components/Project/ProjectInfo'
import ProjectFeatures from 'components/Project/ProjectFeatures'

import allProject, { allProjectPaths } from 'data/projects/allProject'

import Project from 'classes/Project/Project'

import { convertDashToSpace } from 'utils/convertString'

interface Props {
	project: Project
}

const ProjectPage = ({
	project: {
		title,
		description,
		images,
		projectInfos,
		features,
		frontEndTechs,
		backEndTechs,
		toolsUsed,
	},
}: Props) => {
	return (
		<Grid container justifyContent='center'>
			<Grid
				item
				container
				xs={11}
				md={10}
				lg={9}
				xl={8}
				justifyContent='space-between'
			>
				<Grid item xs={12}>
					<ProjectImageSlideShow images={images} />
				</Grid>

				<Grid item xs={12} xl={7}>
					<Typography variant='h2' gutterBottom sx={{ textTransform: 'capitalize' }}>
						{convertDashToSpace(title)}
					</Typography>

					{description.map(paragraph => (
						<Typography gutterBottom sx={{ lineHeight: 2 }} key={nanoid()}>
							{paragraph}
						</Typography>
					))}
				</Grid>
				<Grid item xs={12} xl={4} pt={10}>
					<Typography variant='h4'>Project Info</Typography>

					<ProjectInfo infos={projectInfos} />
				</Grid>

				<Grid item xs={12} mt='2rem'>
					<Typography variant='h2' align='center' mb='3rem'>
						Project Features
					</Typography>

					<ProjectFeatures features={features} />
				</Grid>

				<Grid item xs={12} mt='2rem'>
					<Typography variant='h2' align='center' mb='3rem'>
						Project Technologies
					</Typography>
					<SkillsShow title='Front End' skills={frontEndTechs} />
					<SkillsShow title='Back End' skills={backEndTechs} />
					<SkillsShow title='Tools used' skills={toolsUsed} />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default ProjectPage

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: allProjectPaths,
		fallback: false,
	}
}

interface Params {
	params: {
		project: string
	}
}

export const getStaticProps: GetStaticProps<Props> = async ({
	params,
}: Params) => {
	const project = allProject.find(
		({ title }) => title === params.project
	) as Project

	return {
		props: {
			project: JSON.parse(JSON.stringify(project)),
		},
	}
}
