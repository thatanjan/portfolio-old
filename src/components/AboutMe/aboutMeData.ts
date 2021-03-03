export class AboutMeData {
	question: string

	answer: string

	constructor(question: string, answer: string) {
		this.question = question
		this.answer = answer
	}
}

const WHO_AM_I_ANSWER = 'my name is anjan'

const whoAmI = new AboutMeData('who am I?', WHO_AM_I_ANSWER)

const aboutMeData: AboutMeData[] = [whoAmI]

export default aboutMeData
