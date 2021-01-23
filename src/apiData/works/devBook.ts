import ApiData from 'apiData/dataClass'

const DEV_BOOK = 'dev-book'

const subtitle = 'social media plattform for developers'

const devBook: ApiData = new ApiData(DEV_BOOK).addSubtitle(subtitle)

export default devBook
