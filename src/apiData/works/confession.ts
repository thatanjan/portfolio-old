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
	'social media plattform for people to overcome their imposter syndrome'
const imagePath = '/project__confession.png'
const frontEndTechStack: Tech[] = [javascript, typescript, react, mui]
const backEndTechStack: Tech[] = [nodejs, express, graphql, mongodb]
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
