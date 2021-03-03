const makeFirstLetterUpperCase = (text: string) => {
	const sentences = text.trim().split('.')

	if (sentences[length - 1] === '') {
		sentences.pop()
	}

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
