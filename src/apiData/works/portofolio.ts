import ApiData from './dataClass'

const PORTOFOLIO = 'portofolio'

const subtitle = 'Portofolio website of Anjan Shomodder'

const imagePath = '/project__portofolio.png'
const frontEndTechStack = ['javascript', 'typescript', 'react', 'material-ui']
const visitLink = 'https://anjan.vercel.app'
const description = 'A fully developed portofolio website built on reactjs.'

const portofolio: ApiData = new ApiData(PORTOFOLIO)
	.addSubtitle(subtitle)
	.addImage(imagePath)
	.addVisitLink(visitLink)
	.addFrontEndTechStack(frontEndTechStack)
	.addDescription(description)

export default portofolio
