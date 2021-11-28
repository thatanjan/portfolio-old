import Project from 'classes/Project/Project'
import Info from 'classes/Project/ProjectInfo'

import readImagePaths from 'utils/readImagePaths'
import {
	javascript,
	react,
	redux,
	nextjs,
	typescript,
	nextjsApiRoutes,
	mongodb,
	mongoose,
	git,
	github,
	vim,
	devtools,
	prettier,
	eslint,
} from 'data/skills/AllSkills'

export const CULES_CODING = 'cules-coding'

const subtitle = `Cules Coding is a blogging site which teaches about people about Full stack web development, data structure, alghorithms and many more.`

const description = [subtitle]

const features: string[] = [
	'JAMstack oriented',
	'Static web pages',
	'Realtime View Counter',
	'Search blogs',
	'Reading time',
	'Good SEO',
]

const projectInfos = [
	new Info({
		field: 'category',
		value: 'Blog',
	}),
	new Info({
		field: 'type',
		value: 'JAMstack web application',
	}),
	new Info({
		field: 'live_demo',
		href: 'https://www.culescoding.space/',
		value: CULES_CODING,
	}),
	new Info({
		field: 'source_code',
		href: `https://github.com/thatanjan/${CULES_CODING}`,
		value: 'Github',
	}),
]

const frontEndTechs = [javascript, react, redux, nextjs, typescript]

const backEndTechs = [nextjsApiRoutes, typescript, mongodb, mongoose]

const toolsUsed = [git, github, vim, devtools, prettier, eslint]

const confession = new Project(CULES_CODING)
	.addSubtitle(subtitle)
	.addDescription(description)
	.addProjectInfos(projectInfos)
	.addFeatures(features)
	.addImages(readImagePaths(CULES_CODING))
	.addFrontEndTechs(frontEndTechs)
	.addBackEndTechs(backEndTechs)
	.addToolsUsed(toolsUsed)

export default confession
