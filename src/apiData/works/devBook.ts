import ApiData from 'apiData/dataClass'
import { DEV_BOOK } from 'global/variables'

const subtitle = 'social media plattform for developers'

const devBook: ApiData = new ApiData(DEV_BOOK).addSubtitle(subtitle)

export default devBook
