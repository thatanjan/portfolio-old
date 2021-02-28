const convertDashToSpace = (text: string) =>
	typeof text !== 'string' ? '' : text.replace(/-/g, ' ')

export default convertDashToSpace
