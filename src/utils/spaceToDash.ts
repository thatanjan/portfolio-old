export default (text: string) =>
	typeof text !== 'string' ? '' : text.replace(/\s+/g, '-')
