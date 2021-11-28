interface Params {
	field: 'category' | 'type' | 'live_demo' | 'source_code'
	value: string
	href?: string
}

class Info {
	field: string
	value: string
	href: string

	constructor({ field, value, href }: Params) {
		this.field = field
		this.value = value
		this.href = href || ''
	}
}

export default Info
