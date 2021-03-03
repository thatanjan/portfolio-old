const makeFirstLetterUpperCase = (text: string) => {
	const sentences = text.trim().split('.')
	sentences.pop()

	let newString: string = ''

	sentences.forEach(sentence => {
		let sentenceCopy = sentence

		sentenceCopy = sentenceCopy.trim()

		sentenceCopy = `${sentenceCopy.charAt(0).toUpperCase()} ${sentenceCopy.slice(
			1
		)}. `

		newString += sentenceCopy
	})

	return newString
}

export default makeFirstLetterUpperCase
