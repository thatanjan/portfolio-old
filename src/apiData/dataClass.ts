class ApiData {
	name: string

	subtitle: string

	imagePath: string

	visitLink: string

	backEndTechStack: string[]

	frontEndTechStack: string[]

	constructor(name: string) {
		this.name = name
		this.subtitle = ''
		this.imagePath = ''
		this.visitLink = ''
		this.backEndTechStack = []
		this.frontEndTechStack = []
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

	addTechStack(technolgies: string[]) {
		this.backEndTechStack = technolgies
		return this
	}

	addFrontEndTechStack(technolgies: string[]) {
		this.frontEndTechStack = technolgies
		return this
	}
}

export default ApiData
