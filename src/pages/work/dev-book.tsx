import React from 'react'
import Head from 'next/head'
import Box from '@material-ui/core/Box'

import ProjectTitle from 'components/ProjectPreview/ProjectTitle'
import ProjectImage from 'components/ProjectPreview/ProjectImage'

const Page = () => {
	return (
		<>
			<Head>
				<title>Dev Book</title>
			</Head>
			<Box>
				<ProjectImage />
				<ProjectTitle title='dev-book' subtitle='social media for developers' />
			</Box>
		</>
	)
}

export default Page
