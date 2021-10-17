import readImagePaths from 'utils/readImagePaths'
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

const CULES_CODING = 'cules-coding'

const subtitle =
	'Cules Coding is a blogging site  which teaches about people about Full stack web development, data structure, alghorithms and many more.'

const imagePaths = readImagePaths(CULES_CODING)

const frontEndTechStack: Tech[] = [javascript, typescript, react, nextjs]
const backEndTechStack: Tech[] = [mongodb, nextjsApiRoutes]
const visitLink = 'https://www.culescoding.space/'
const description = subtitle

const features: string[] = [
	'JAMstack oriented',
	'Static web pages',
	'Realtime View Counter',
	'Search blogs',
	'Reading time',
	'Good SEO',
]

const confession: ApiData = new ApiData('Cules Coding')
	.addSubtitle(subtitle)
	.addImages(imagePaths)
	.addVisitLink(visitLink)
	.addFrontEndTechStack(frontEndTechStack)
	.addBackEndTechStack(backEndTechStack)
	.addDescription(description)
	.addFeatures(features)

export default confession
