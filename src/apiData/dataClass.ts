class ApiData {
	name: string

	subtitle: string

	imagePath: string

	constructor(name: string) {
		this.name = name
	}

	addSubtitle(subtitle: string) {
		this.subtitle = subtitle
	}

	addImage(imagePath: string) {
		this.imagePath = imagePath
	}
}

export default ApiData
