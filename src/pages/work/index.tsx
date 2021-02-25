import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { GetStaticProps } from 'next'
import { ifProd } from 'global/variables'

import ApiData from 'apiData/works/dataClass'

const ProjectPreview = dynamic(
	() => import('components/ProjectPreview/ProjectPreview')
)

const Work = () => {
	return (
		<>
			<Head>
				<title>Work</title>
			</Head>

			<ProjectPreview
				moreLink='/work/dev-book'
				visitLink='https://anjan.vercel.app'
				name='Dev Book'
				subtitle='social media for developers'
			/>
		</>
	)
}

export default Work

export const getStaticProps: GetStaticProps = async () => {
	const url = ifProd
		? `${process.env.API_URL}/api/work`
		: `http://localhost:3000/api/work`

	const res = await fetch(url)
	const data = await res.json()

	return { props: { data } }
}
