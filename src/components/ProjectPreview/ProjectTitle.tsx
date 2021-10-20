import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
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
				<Typography component='h2' variant='subtitle1'>
					{subtitle}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default ProjectTitle
