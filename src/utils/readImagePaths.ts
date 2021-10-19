import path from 'path'
import fs from 'fs'

const root = process.cwd()

const readPaths = (projectName: string) => {
	const newProjectName = projectName.split(' ').join('-').toLowerCase()

	const fileNames = fs.readdirSync(
		path.join(root, 'public', 'screenshots', newProjectName)
	)

	return fileNames.map(fileName => `/screenshots/${newProjectName}/${fileName}`)
}

export default readPaths
