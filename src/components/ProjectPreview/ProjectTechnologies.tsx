import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { nanoid } from 'nanoid'
import clsx from 'clsx'

import { Tech } from 'apiData/works/Techs'

import { CAPITALIZE } from 'global/variables'
import { titlePadding } from './ProjectDescription'
import SectionTitle from './SectionTitle'

interface Props {
	frontEndTechStack: Tech[] | null
	backEndTechStack: Tech[] | null
}

interface TechnologiesSectionProps {
	techStack: Tech[] | null
	endType: string
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		demo: {
			backgroundColor: theme.palette.background.paper,
		},
		title: {
			margin: theme.spacing(4, 0, 2),
		},
		endTypeStyle: {
			padding: `1rem ${titlePadding + 1}rem`,
		},
		stackContainerStyle: {
			padding: `.5rem ${titlePadding + 2}rem 1rem`,
		},
		chipStyle: {
			marginRight: '1rem',
		},
	})
)

const TechnologiesSection = ({
	techStack,
	endType,
}: TechnologiesSectionProps) => {
	const { title, demo } = useStyles()

	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Typography
						component='h1'
						variant='h5'
						className={clsx(CAPITALIZE, title)}
					>
						{endType} End :
					</Typography>
					<div className={demo}>
						<List>
							{techStack &&
								techStack.map(item => (
									<ListItem key={nanoid()}>
										<ListItemAvatar>
											<Avatar src={item.avatar} alt={item.name} />
										</ListItemAvatar>
										<ListItemText
											primary={item.name}
											primaryTypographyProps={{
												component: 'h1',
												variant: 'body1',
											}}
										/>
									</ListItem>
								))}
						</List>
					</div>
				</Grid>
			</Grid>
		</>
	)
}

const ProjectTechnologies = ({
	frontEndTechStack,
	backEndTechStack,
}: Props) => {
	const createSectionProps = (endType: string, techStack: Tech[]) => ({
		endType,
		techStack,
	})

	return (
		<Paper>
			<SectionTitle text='technolgies used' />

			{frontEndTechStack && (
				<TechnologiesSection {...createSectionProps('front', frontEndTechStack)} />
			)}

			{backEndTechStack && (
				<TechnologiesSection {...createSectionProps('back', backEndTechStack)} />
			)}
		</Paper>
	)
}

export default ProjectTechnologies
