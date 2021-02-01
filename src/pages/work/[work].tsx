import React from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'

import ProjectPreview from 'components/ProjectPreview/ProjectPreview'
import ApiData from 'apiData/works/dataClass'
import paths from 'utils/paths'
import convertDashToSpace from 'utils/dashToSpace'
import convertSpaceToDash from 'utils/spaceToDash'
import { ifProd } from 'global/variables'

interface Props {
	data: ApiData
}
const Page = ({ data: { name, subtitle, visitLink } }: Props) => {
	const projectPreviewProps = { name, subtitle, visitLink }
	const pageTitle = convertDashToSpace(name)

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>

			<>
				<ProjectPreview {...projectPreviewProps} />
			</>
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
