export class Option {
	href: string

	label: string

	constructor(name: string) {
		this.href = `/${name}`
		this.label = name
	}
}

const work: Option = new Option('work')

const about: Option = new Option('about')

const navigationOptions: Option[] = [work, about]

export default navigationOptions
