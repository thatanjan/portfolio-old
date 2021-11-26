import React from 'react'
import Grid from '@mui/material/Grid'

interface Props {}

const ProjectInfo = (props: Props) => {
	return (
		<Grid container pt='2rem'>
			{Array(5)
				.fill(0)
				.map(() => (
					<>
						<Grid item xs={12} container>
							<Grid item xs={4}>
								Category
							</Grid>
							<Grid item xs={1}>
								:
							</Grid>
							<Grid item xs={7}>
								Full stack web application
							</Grid>
						</Grid>
					</>
				))}
		</Grid>
	)
}

export default ProjectInfo
