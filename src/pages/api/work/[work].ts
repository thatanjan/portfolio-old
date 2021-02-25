import { NextApiRequest, NextApiResponse } from 'next'
import allData from 'apiData/works/allData'
import { CONFESSION } from 'global/variables'

const workApi = ({ query: { work } }: NextApiRequest, res: NextApiResponse) => {
	switch (work) {
		case CONFESSION:
			return res.send(allData[0])

		default:
			res.send({ msg: 'no Data found' })
	}

	return res.end(`the api is on ${work}`)
}

export default workApi
