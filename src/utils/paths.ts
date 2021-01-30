import allData from 'apiData/works/allData'
import ApiData from 'apiData/works/dataClass'

class WorkPath {
	params: {
		work: string
	}

	constructor(param: string) {
		this.params = { work: param }
	}
}

const allPaths: WorkPath[] = allData.map(({ name }: ApiData) => {
	const pathName = name.replace(/\s/g, '-')

	const path = new WorkPath(pathName)

	return path
})

export default allPaths
