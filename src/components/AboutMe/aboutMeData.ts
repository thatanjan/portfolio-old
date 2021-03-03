export class Data {
	question = string

	answer = string

	constructor(question: string, answer: string) {
		this.question = question
		this.answer = answer
	}
}

const WHO_AM_I_ANSWER = 'my name is anjan'

const whoAmI = new Data('who am I?', WHO_AM_I_ANSWER)

const aboutMeData: Data[] = [whoAmI]

export default aboutMeData
