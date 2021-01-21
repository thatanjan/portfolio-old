import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

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
