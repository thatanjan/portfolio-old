import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Image from 'next/image'

interface Props {}

const useStyles = makeStyles({
	root: {},
})

const Work = (props: Props) => {
	const classes = useStyles()

	return (
		<Box className={classes.root}>
			<Image
				layout='intrinsic'
				src='/cules_banner.jpg'
				height={600}
				width={1920}
				objectFit='cover'
			/>
		</Box>
	)
}

export default Work
