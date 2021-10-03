import ApiData from './dataClass'
import {
	Tech,
	javascript,
	typescript,
	react,
	mongodb,
	nextjs,
	nextjsApiRoutes,
} from './Techs'

const subtitle =
	'Cules Coding is a blogging site and a youtube channel which teaches about Full stack web development, data structure, alghorithms and many more.'
const imagePath = '/project__confession.png'
const frontEndTechStack: Tech[] = [javascript, typescript, react, nextjs]
const backEndTechStack: Tech[] = [mongodb, nextjsApiRoutes]
const visitLink = 'https://www.culescoding.space/'
const description = subtitle

const features: string[] = [
	'Static web pages',
	'Realtime View Counter',
	'Search blogs',
	'Reading time',
]

const confession: ApiData = new ApiData('Cules Coding')
	.addSubtitle(subtitle)
	.addImage(imagePath)
	.addVisitLink(visitLink)
	.addFrontEndTechStack(frontEndTechStack)
	.addBackEndTechStack(backEndTechStack)
	.addDescription(description)
	.addFeatures(features)

export default confession
