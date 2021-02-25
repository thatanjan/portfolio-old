import convertSpaceToDash from 'utils/spaceToDash'

class ApiData {
	name: string

	subtitle: string

	description: string

	imagePath: string

	visitLink: string

	sourceCodeLink: string

	moreLink: string

	backEndTechStack: string[]

	frontEndTechStack: string[]

	constructor(name: string) {
		this.name = name
		this.subtitle = ''
		this.imagePath = ''
		this.visitLink = ''
		this.backEndTechStack = []
		this.frontEndTechStack = []
		this.moreLink = `/work/${convertSpaceToDash(name)}`
		this.sourceCodeLink = `https://github.com/thatanjan/${this.name.toLowerCase()}`
	}

	addSubtitle(subtitle: string) {
		this.subtitle = subtitle
		return this
	}

	addImage(imagePath: string) {
		this.imagePath = imagePath
		return this
	}

	addVisitLink(visitLink: string) {
		this.visitLink = visitLink
		return this
	}

	addBackEndTechStack(technolgies: string[]) {
		this.backEndTechStack = technolgies
		return this
	}

	addFrontEndTechStack(technolgies: string[]) {
		this.frontEndTechStack = technolgies
		return this
	}

	addDescription(description: string) {
		this.description = description
		return this
	}
}

export default ApiData
