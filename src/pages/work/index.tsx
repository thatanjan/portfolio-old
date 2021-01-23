import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

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
				title='Dev Book'
				subtitle='social media for developers'
			/>
		</>
	)
}

export default Work
