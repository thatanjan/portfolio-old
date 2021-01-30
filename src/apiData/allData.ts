import devBook from 'apiData/works/devBook'
import ApiData from 'apiData/dataClass'

const allData = [devBook]

export default allData

interface NewObject {
	name: string
	subtitle: string
	imagePath: string
	visitLink: string
}

export const previewData = allData.forEach(
	({ name, subtitle, imagePath, visitLink }: ApiData) => {
		const newObject: NewObject = {
			name,
			subtitle,
			imagePath,
			visitLink,
		}

		return newObject
	}
)
