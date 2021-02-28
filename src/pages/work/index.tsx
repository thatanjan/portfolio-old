import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { GetStaticProps } from 'next'
import { nanoid } from 'nanoid'

import allData from 'apiData/works/allData'
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
	const jsonData = JSON.parse(JSON.stringify(allData))

	return { props: { data: jsonData } }
}
