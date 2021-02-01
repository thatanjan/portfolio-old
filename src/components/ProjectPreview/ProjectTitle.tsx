import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

interface Props {
	name: string
	subtitle: string
}

const useStyles = makeStyles({
	titleGridContainer: {
		padding: '0 10%',
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
				<Typography variant='h3'>{name}</Typography>
			</Grid>
			<Grid item>
				<Typography variant='h5'>{subtitle}</Typography>
			</Grid>
		</Grid>
	)
}

export default ProjectTitle
