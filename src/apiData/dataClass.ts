class ApiData {
	name: string

	subtitle: string

	imagePath: string

	visitLink: string

	backEndTechStack: string[]

	frontEndTechStack: string[]

	constructor(name: string) {
		this.name = name
	}

	addSubtitle(subtitle: string) {
		this.subtitle = subtitle
	}

	addImage(imagePath: string) {
		this.imagePath = imagePath
	}

	addVisitLink(visitLink: string) {
		this.visitLink = visitLink
	}

	addTechStack(technolgies: string[]) {
		this.backEndTechStack = technolgies
	}

	addFrontEndTechStack(technolgies: string[]) {
		this.frontEndTechStack = technolgies
	}
}

export default ApiData
