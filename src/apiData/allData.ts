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

export const previewData = allData.forEach((item: ApiData) => {
	const newObject: NewObject = {
		name: item.name,
		subtitle: item.subtitle,
		imagePath: item.imagePath,
		visitLink: item.visitLink,
	}

	return newObject
})
