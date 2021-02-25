import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { GetStaticProps } from 'next'
import { ifProd } from 'global/variables'
import { nanoid } from 'nanoid'

import ApiData from 'apiData/works/dataClass'

const ProjectPreview = dynamic(
	() => import('components/ProjectPreview/ProjectPreview')
)

interface Props {
	data: ApiData[]
}

const Work = ({ data }: Props) => {
	return (
		<>
			<Head>
				<title>Work</title>
			</Head>

			{data.map(item => {
				const { name, visitLink, moreLink, subtitle } = item

				const projectPreviewProps = { name, visitLink, moreLink, subtitle }
				return <ProjectPreview key={nanoid()} {...projectPreviewProps} />
			})}
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
