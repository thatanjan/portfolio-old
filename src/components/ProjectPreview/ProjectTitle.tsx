import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles';
import { CAPITALIZE } from 'global/variables'

interface Props {
	name: string
	subtitle: string
}

const useStyles = makeStyles({
	titleGridContainer: {
		'& > .MuiGrid-item': {
			flexBasis: '100%',
		},
	},
})

const ProjectTitle = ({ name, subtitle }: Props) => {
	const { titleGridContainer } = useStyles()
	return (
		<Grid container className={titleGridContainer}>
			<Grid item>
				<Typography className={CAPITALIZE} component='h1' variant='h3'>
					{name}
				</Typography>
			</Grid>
			<Grid item>
				<Typography className={CAPITALIZE} component='h2' variant='subtitle1'>
					{subtitle}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default ProjectTitle
