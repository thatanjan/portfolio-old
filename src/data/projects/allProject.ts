import confession from 'data/projects/confession'
import Project from 'classes/Project/Project'

export class ProjectPath {
	params: {
		project: string
	}

	constructor(param: string) {
		this.params = { project: param }
	}
}

const allProject: Project[] = [confession]

export const allProjectPaths = allProject.map(
	({ title }: Project) => new ProjectPath(title)
)

export default allProject
