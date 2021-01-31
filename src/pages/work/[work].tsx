import React from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'

import paths from 'utils/paths'
import convertSpaceToDash from 'utils/spaceToDash'
import { ifProd } from 'global/variables'

const Page = ({ data }: any) => {
	return (
		<>
			<Head>
				<title>Dev Book</title>
			</Head>
			<div>this is a Dev book</div>
			{JSON.stringify(data)}
		</>
	)
}

export default Page

export const getStaticPaths: GetStaticPaths = async () => {
	return { paths, fallback: false }
}

interface Params {
	params: {
		work: string
	}
}

export const getStaticProps: GetStaticProps = async ({
	params: { work },
}: Params) => {
	const paramId = convertSpaceToDash(work)
	const url = ifProd
		? `${process.env.API_URL}/api/work/${paramId}`
		: `http://localhost:3000/api/work/${paramId}`
	const res = await fetch(url)
	const data = await res.json()

	return { props: { data } }
}
