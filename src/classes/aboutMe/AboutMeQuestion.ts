import { ReactNode } from 'react'

class AboutMeQuestion {
	question: string
	answer: ReactNode

	constructor(question: string) {
		this.question = `${question}?`
	}

	addAnswer(answer: ReactNode) {
		this.answer = answer
		return this
	}
}

export default AboutMeQuestion
