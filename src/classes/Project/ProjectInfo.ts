import { convertDashToSpace } from 'utils/convertString'

const LIVE_DEMO = 'live_demo'

interface Params {
	field: 'category' | 'type' | typeof LIVE_DEMO | 'source_code'
	value: string
	href?: string
}

class Info {
	field: string
	value: string
	href: string

	constructor({ field, value, href }: Params) {
		this.field = field
		this.value = field === LIVE_DEMO ? convertDashToSpace(value) : value
		this.href = href || ''
	}
}

export default Info
