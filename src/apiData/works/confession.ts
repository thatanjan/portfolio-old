import readImagePaths from 'utils/readImagePaths'
import { CONFESSION } from 'global/variables'
import ApiData from './dataClass'
import {
	Tech,
	javascript,
	typescript,
	react,
	mui,
	nodejs,
	express,
	graphql,
	mongodb,
} from './Techs'

const subtitle =
	'An open source social media plattform for people to overcome their imposter syndrome'

const imagePaths = readImagePaths(CONFESSION)

const frontEndTechStack: Tech[] = [javascript, typescript, react, mui]
const backEndTechStack: Tech[] = [nodejs, express, graphql, mongodb]
const visitLink = 'https://con-fession.vercel.app/'

const description = `A social media application to help people overcome their imposter syndrome. It's name is Confession. It has user authentication, Newsfeed, picture upload and almost every feature that a social media application needs. The basic idea here is, if people could share their failure stories freely then other will not have the feeling of 'not good enough'. That's how we can kill our imposter syndrome.`

const features: string[] = [
	'User Authentication with JSON Web Token',
	'User authorization',
	'Newsfeed',
	'User profile',
	'Post creation',
	'Post interaction',
	'Follow other users',
	'Picture upload and many more...',
]

const confession: ApiData = new ApiData(CONFESSION)
	.addSubtitle(subtitle)
	.addImages(imagePaths)
	.addVisitLink(visitLink)
	.addFrontEndTechStack(frontEndTechStack)
	.addBackEndTechStack(backEndTechStack)
	.addDescription(description)
	.addFeatures(features)

export default confession
