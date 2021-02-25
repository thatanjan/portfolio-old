import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { commonPadding } from './ProjectDescription'

interface Props {
	text: string
}

const useStyles = makeStyles({
	titleStyle: {
		padding: commonPadding,
		paddingBottom: '0',
	},
})

const SectionTitle = ({ text }: Props) => {
	const { titleStyle } = useStyles()

	return (
		<>
			<Typography className={titleStyle} variant='h4'>
				{text}
			</Typography>
		</>
	)
}

export default SectionTitle