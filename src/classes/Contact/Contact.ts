class Contact {
	name: string
	href: string
	image: string

	constructor(name: string, href: string) {
		this.name = name
		this.href = href
	}

	addImage = (image: string) => {
		this.image = `/contact/${image}`
		return this
	}
}

export default Contact
