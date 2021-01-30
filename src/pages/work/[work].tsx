import React from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'

import paths from 'components/utils/paths'
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

export const getStaticPaths: GetStaticPaths = async ctx => {
	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ctx => {
	const url = ifProd ? '' : 'http://localhost:3000/api/work/dev-book'
	const res = await fetch(url)
	const data = await res.json()

	console.log(data)

	return { props: { data } }
}
