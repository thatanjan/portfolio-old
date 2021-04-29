import ApiData from './dataClass'
import { Tech, javascript, typescript, react, mui } from './Techs'

const PORTOFOLIO = 'portofolio'

const subtitle = 'Portofolio website of Anjan Shomodder'

const imagePath = '/project__portofolio.png'
const frontEndTechStack: Tech[] = [javascript, typescript, react, mui]
const visitLink = 'https://anjan.vercel.app'
const description = 'A fully developed portofolio website built on reactjs.'

const portofolio: ApiData = new ApiData(PORTOFOLIO)
	.addSubtitle(subtitle)
	.addImage(imagePath)
	.addVisitLink(visitLink)
	.addFrontEndTechStack(frontEndTechStack)
	.addDescription(description)

export default portofolio
