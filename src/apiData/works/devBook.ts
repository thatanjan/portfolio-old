import { DEV_BOOK } from 'global/variables'
import ApiData from './dataClass'

const subtitle = 'social media plattform for developers'
const imagePath = '/ww.jpg'
const frontEndTechStack = ['javascript', 'typescript', 'react', 'material-ui']
const backEndTechStack = ['nodejs', 'express', 'graphql', 'mongodb']

const devBook: ApiData = new ApiData(DEV_BOOK)
	.addSubtitle(subtitle)
	.addImage(imagePath)
	.addVisitLink('/dev-book')
	.addFrontEndTechStack(frontEndTechStack)
	.addBackEndTechStack(backEndTechStack)

export default devBook
