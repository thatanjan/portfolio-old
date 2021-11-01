export class Option {
	href: string

	label: string

	constructor(name: string, href?: string) {
		this.href = name === 'about' ? '/' : href || `/${name}`
		this.label = name
	}
}

const work: Option = new Option('work')

const about: Option = new Option('about')

const skills: Option = new Option('skills')

const blog: Option = new Option('blog', 'https://cules-coding.vercel.app/')

const contact: Option = new Option('contact')

const youtube: Option = new Option(
	'YouTube',
	'https://www.culescoding.space/youtube'
)

const navigationOptions: Option[] = [
	work,
	about,
	skills,
	blog,
	youtube,
	contact,
]

export default navigationOptions
