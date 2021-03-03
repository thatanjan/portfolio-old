const makeGoodString = (text: string) => {
	const sentences = text.trim().split('.')
	sentences.pop()

	let newString = ''

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

export default makeGoodString
