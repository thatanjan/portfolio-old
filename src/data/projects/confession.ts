import Project from 'classes/Project/Project'
import Info from 'classes/Project/ProjectInfo'

import {
	javascript,
	react,
	redux,
	nextjs,
	typescript,
	mui,
	nodejs,
	express,
	mongodb,
	graphql,
	mongoose,
	git,
	github,
	vim,
	devtools,
	prettier,
	eslint,
} from 'data/skills/AllSkills'

import readImagePaths from 'utils/readImagePaths'

export const CONFESSION = 'confession'

const subtitle =
	'An open source social media plattform for people to overcome their imposter syndrome.'

const description = [
	`A social media application to help people overcome their imposter syndrome. It's name is Confession. It has user authentication, Newsfeed, picture upload and almost every feature that a social media application needs.`,
	`The basic idea here is, if people could share their failure stories freely then other will not have the feeling of 'not good enough'. That's how we can kill our imposter syndrome.`,
]

const frontEndTechs = [javascript, react, redux, nextjs, typescript, mui]

const backEndTechs = [nodejs, express, typescript, mongodb, graphql, mongoose]

const toolsUsed = [git, github, vim, devtools, prettier, eslint]

const features: string[] = [
	'User Authentication',
	'User authorization',
	'Newsfeed',
	'User profile',
	'Post creation',
	'Post interaction',
	'Follow other users',
	'Photo upload',
]

const projectInfos = [
	new Info({
		field: 'category',
		value: 'Social Media',
	}),
	new Info({
		field: 'type',
		value: 'Full stack web application',
	}),
	new Info({
		field: 'live_demo',
		href: 'https://con-fession.vercel.app/',
		value: 'Confession',
	}),
	new Info({
		field: 'source_code',
		href: 'https://github.com/thatanjan/confession',
		value: 'Github',
	}),
]

const confession = new Project(CONFESSION)
	.addSubtitle(subtitle)
	.addDescription(description)
	.addProjectInfos(projectInfos)
	.addFeatures(features)
	.addImages(readImagePaths(CONFESSION))
	.addFrontEndTechs(frontEndTechs)
	.addBackEndTechs(backEndTechs)
	.addToolsUsed(toolsUsed)

export default confession
