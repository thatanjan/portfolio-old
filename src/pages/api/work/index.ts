import { NextApiRequest, NextApiResponse } from 'next'
import allData from 'apiData/works/allData'

const workApi = (_: NextApiRequest, res: NextApiResponse) => res.send(allData)

export default workApi
