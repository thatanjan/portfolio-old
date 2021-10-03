import convertSpaceToDash from 'utils/spaceToDash'
import { Tech } from './Techs'

class ApiData {
	name: string

	subtitle: string

	description: string

	imagePaths: string[]

	visitLink: string

	sourceCodeLink: string

	moreLink: string

	backEndTechStack: Tech[] | null

	frontEndTechStack: Tech[] | null

	features: string[]

	constructor(name: string) {
		this.name = name
		this.subtitle = ''
		this.imagePath = ''
		this.visitLink = ''
		this.backEndTechStack = null
		this.frontEndTechStack = null
		this.moreLink = `/work/${convertSpaceToDash(name)}`
		this.sourceCodeLink = `https://github.com/thatanjan/${convertSpaceToDash(
			name
		).toLowerCase()}`
	}

	addSubtitle(subtitle: string) {
		this.subtitle = subtitle
		return this
	}

	addImages(imagePaths: string[]) {
		this.imagePaths = imagePaths
		return this
	}

	addVisitLink(visitLink: string) {
		this.visitLink = visitLink
		return this
	}

	addBackEndTechStack(technolgies: Tech[]) {
		this.backEndTechStack = technolgies
		return this
	}

	addFrontEndTechStack(technolgies: Tech[]) {
		this.frontEndTechStack = technolgies
		return this
	}

	addDescription(description: string) {
		this.description = description
		return this
	}

	addFeatures(features: string[]) {
		this.features = features
		return this
	}
}

export default ApiData
