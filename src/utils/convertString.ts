const convertDashToSpace = (text: string) =>
	typeof text !== 'string' ? '' : text.replace(/-/g, ' ')

const convertUnderScoreToSpace = (text: string) =>
	typeof text !== 'string' ? '' : text.replace(/_/g, ' ')

const convertSpaceToDash = (text: string) =>
	typeof text !== 'string' ? '' : text.replace(/\s+/g, '-')

export { convertSpaceToDash, convertDashToSpace, convertUnderScoreToSpace }
