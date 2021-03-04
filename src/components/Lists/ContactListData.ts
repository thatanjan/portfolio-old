class Contact {
	name: string

	Icon: Function

	link: string

	constructor(name: string) {
		this.name = name
	}

	addIcon(icon: Function) {
		this.Icon = icon
		return this
	}

	addLink(link: string) {
		this.link = link
		return this
	}
}
