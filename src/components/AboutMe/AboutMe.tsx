import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import makeStyles from '@mui/styles/makeStyles';

import Summary from './Summary'

const useStyles = makeStyles({ containerStyle: { padding: '5%' } })

const AboutMe = () => {
	const { containerStyle } = useStyles()

	return (
		<>
			<Box className={containerStyle}>
				<Typography component='h3' variant='h3'>
					Hey there, My name is Anjan
				</Typography>
				<Summary />
			</Box>
		</>
	)
}

export default AboutMe
