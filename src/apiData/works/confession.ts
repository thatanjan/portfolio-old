import { CONFESSION } from 'global/variables'
import ApiData from './dataClass'

const subtitle =
	'social media plattform for people to overcome their imposter syndrome'
const imagePath = '/ww.jpg'
const frontEndTechStack = ['javascript', 'typescript', 'react', 'material-ui']
const backEndTechStack = ['nodejs', 'express', 'graphql', 'mongodb']
const visitLink = 'https://confession.vercel.app'
const description =
	'A fully developed social media application built on react and nodejs. It has authentication system where users can login to their account.'

const confession: ApiData = new ApiData(CONFESSION)
	.addSubtitle(subtitle)
	.addImage(imagePath)
	.addVisitLink(visitLink)
	.addFrontEndTechStack(frontEndTechStack)
	.addBackEndTechStack(backEndTechStack)
	.addDescription(description)

export default confession
