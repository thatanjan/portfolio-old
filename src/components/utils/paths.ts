import { DEV_BOOK } from 'global/variables'

class WorkPaths {
	params: {
		work: string
	}

	constructor(param: string) {
		this.params = { work: param }
	}
}

const devBook = new WorkPaths(DEV_BOOK)

export default [devBook]
