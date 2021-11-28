import ProjectInfo from './ProjectInfo'

class Project {
	title: string

	subtitle: string

	description: string[]

	projectInfos: ProjectInfo[]

	features: string[]

	images: string[]

	constructor(title: string) {
		this.title = title
		this.description = []
		this.projectInfos = [] as ProjectInfo[]
	}

	addSubtitle(subtitle: string) {
		this.subtitle = subtitle
		return this
	}

	addDescription(description: string[]) {
		this.description = description
		return this
	}

	addImages(images: string[]) {
		this.images = images
		return this
	}

	addFeatures(features: string[]) {
		this.features = features
		return this
	}

	addProjectInfos(infos: ProjectInfo[]) {
		this.projectInfos = infos
		return this
	}
}

export default Project
