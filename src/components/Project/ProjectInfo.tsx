import React, { Fragment } from 'react'
import Grid from '@mui/material/Grid'
import { nanoid } from 'nanoid'

import Info from 'classes/Project/ProjectInfo'

import { convertUnderScoreToSpace } from 'utils/convertString'

import TypographyLink from 'components/Links/TypographyLink'

interface Props {
	infos: Info[]
}

const ProjectInfo = ({ infos }: Props) => {
	return (
		<Grid container pt='2rem'>
			{infos.map(({ field, value, href }) => (
				<Fragment key={nanoid()}>
					<Grid item xs={12} container sx={{ textTransform: 'capitalize' }}>
						<Grid item xs={4}>
							{convertUnderScoreToSpace(field)}
						</Grid>
						<Grid item xs={1}>
							:
						</Grid>
						<Grid item xs={7}>
							{href ? <TypographyLink href={href}>{value}</TypographyLink> : value}
						</Grid>
					</Grid>
				</Fragment>
			))}
		</Grid>
	)
}

export default ProjectInfo
