import { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import PostPreview from 'components/Posts/PostPreview'

interface Props {}

const useStyles = makeStyles({
	root: {},
	gridContainer: {},
})

interface GridItemProps {
	children: ReactNode
}

const GridItem = ({ children }: GridItemProps) => (
	<Grid item md={6} xs={12}>
		{children}
	</Grid>
)

const Work = (props: Props) => {
	const classes = useStyles()

	return (
		<>
			<Box className={classes.root}>
				<Image
					layout='intrinsic'
					src='/cules_banner.jpg'
					height={600}
					width={1920}
					objectFit='cover'
				/>
			</Box>
			<Grid container>
				<GridItem />
				<GridItem />
			</Grid>
		</>
	)
}

export default Work
