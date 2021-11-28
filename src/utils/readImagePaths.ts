import path from 'path'
import fs from 'fs'

const root = process.cwd()

const readPaths = (projectName: string) => {
	const fileNames = fs.readdirSync(
		path.join(root, 'public', 'screenshots', projectName)
	)

	return fileNames
		.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
		.map((fileName) => `/screenshots/${projectName}/${fileName}`)
}

export default readPaths
