interface Params {
	field: 'category' | 'type' | 'live_demo' | 'source_code'
	value: string
	isLink?: boolean
	href?: string
}

class Info {
	field: string
	value: string
	isLink: boolean
	href: string

	constructor({ field, value, isLink, href }: Params) {
		this.field = field
		this.value = value
		this.isLink = isLink || false
		this.href = href || ''
	}
}

export default Info
