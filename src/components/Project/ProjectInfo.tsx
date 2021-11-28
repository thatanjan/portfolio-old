import React from 'react'
import Grid from '@mui/material/Grid'

import Info from 'classes/Project/ProjectInfo'

import { convertUnderScoreToSpace } from 'utils/convertString'

interface Props {
	infos: Info[]
}

const ProjectInfo = ({ infos }: Props) => {
	return (
		<Grid container pt='2rem'>
			{infos.map(({ field, value }) => (
				<>
					<Grid item xs={12} container sx={{ textTransform: 'capitalize' }}>
						<Grid item xs={4}>
							{convertUnderScoreToSpace(field)}
						</Grid>
						<Grid item xs={1}>
							:
						</Grid>
						<Grid item xs={7}>
							{value}
						</Grid>
					</Grid>
				</>
			))}
		</Grid>
	)
}

export default ProjectInfo
