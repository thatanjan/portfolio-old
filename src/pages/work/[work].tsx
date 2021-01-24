import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

const Page = () => {
	return (
		<>
			<Head>
				<title>Dev Book</title>
			</Head>
			<div>this is a Dev book</div>
		</>
	)
}

export default Page

export const getStaticProps: GetStaticProps = async ctx => {
	const res = await fetch('/api/work/dev-book')
	console.log(res)
	return { props: {} }
}
