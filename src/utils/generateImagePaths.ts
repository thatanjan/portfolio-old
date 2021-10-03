const generateImagePaths = (project: string) => (imageNames: string[]) => {
	const paths = imageNames.map(
		imageName => `/screenshots/${project}/${imageName}.png`
	)

	return paths
}

export default generateImagePaths
