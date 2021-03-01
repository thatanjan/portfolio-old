import React from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import ProjectPreview, {
	commonContaienrStyle,
} from 'components/ProjectPreview/ProjectPreview'
import ProjectDescription from 'components/ProjectPreview/ProjectDescription'
import ProjectTechnologies from 'components/ProjectPreview/ProjectTechnologies'
import ApiData from 'apiData/works/dataClass'
import paths from 'utils/paths'
import convertDashToSpace from 'utils/dashToSpace'
import allData from 'apiData/works/allData'

interface Props {
	data: ApiData
}

const useStyles = makeStyles({
	boxStyle: {
		padding: commonContaienrStyle,
	},
})

const Page = ({
	data: {
		name,
		subtitle,
		visitLink,
		description,
		frontEndTechStack,
		backEndTechStack,
		sourceCodeLink,
		imagePath,
	},
}: Props) => {
	const projectPreviewProps = {
		name,
		subtitle,
		visitLink,
		description,
		sourceCodeLink,
		imagePath,
	}
	const technolgiesProps = { frontEndTechStack, backEndTechStack }
	const pageTitle = convertDashToSpace(name)
	const { boxStyle } = useStyles()

	return (
		<>
			<Head>
				{' '}
				<title>{pageTitle}</title>{' '}
			</Head>

			<Box>
				<ProjectPreview {...projectPreviewProps} />
				<Box className={boxStyle}>
					<ProjectDescription description={description} />
					<ProjectTechnologies {...technolgiesProps} />
				</Box>
			</Box>
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
	const paramID = convertDashToSpace(work)

	const data = allData.find(item => {
		return item.name === paramID
	})

	const jsonData = JSON.parse(JSON.stringify(data))

	return { props: { data: jsonData } }
}
