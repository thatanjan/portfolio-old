import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

import StyledImage from 'components/Images/StyledImage'
import useLargerThanMD from 'hooks/useLargerThanMD'
import { LAYOUT_IMAGE } from 'global/variables'

const useStyles = makeStyles((theme: Theme) => ({
	imageStyle: {},

	containerStyle: {
		width: '100%',
		height: '100vh',
		display: 'grid',
		alignItems: 'end',
		'& > div': {
			height: 'inherit',
		},
		[theme.breakpoints.down('sm')]: {
			height: '80vh',
		},
	},
	outerParent: {
		position: 'relative',
	},
	titleContainer: {
		position: 'absolute',
		bottom: 0,
		background: theme.palette.background.paper,
		width: '100%',
		height: '10rem',
		display: 'grid',
		placeItems: 'center',
		borderRadius: '20rem 20rem 0 0',
	},
}))

const LayoutImage = () => {
	const { imageStyle, containerStyle, outerParent, titleContainer } = useStyles()

	const largerThanMD = useLargerThanMD()

	return (
		<>
			<Box className={outerParent}>
				<div className={containerStyle}>
					<StyledImage imagePath={LAYOUT_IMAGE} styleClass={imageStyle} />
				</div>
				{!largerThanMD && (
					<Box className={titleContainer}>
						<Typography variant='h2' align='center'>
							Anjan <br /> Shomodder
						</Typography>
					</Box>
				)}
			</Box>
		</>
	)
}

export default LayoutImage
