import { NextApiRequest, NextApiResponse } from 'next'

const workApi = ({ query: { work } }: NextApiRequest, res: NextApiResponse) => {
	return res.end(`the api is on ${work}`)
}

export default workApi
