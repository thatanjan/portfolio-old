import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import { nanoid } from 'nanoid'

import {
	Tech,
	react,
	javascript,
	redux,
	nextjs,
	nodejs,
	mongodb,
	typescript,
	graphql,
	express,
	rest,
} from 'apiData/works/Techs'

const frontSkills: Tech[] = [javascript, typescript, react, redux, nextjs]
const backSkills: Tech[] = [nodejs, mongodb, rest, graphql, express]

interface Props {
	skills: Tech[]
	skillType: string
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: '100%',
		width: '100%',
	},
	listStyle: {
		width: '70%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
		alignSelf: 'self-start',
	},
}))
const SkillDisplayer = ({ skills, skillType }: Props) => {
	const { listStyle } = useStyles()
	return (
		<>
			<List component={Paper} className={listStyle} elevation={0}>
				<Typography variant='h3' style={{ marginBottom: '1rem' }}>
					{skillType}
				</Typography>
				{skills.map(({ name, avatar }) => (
					<ListItem key={nanoid()}>
						<ListItemAvatar>
							<Avatar src={avatar} alt={name} />
						</ListItemAvatar>

						<ListItemText
							primary={name}
							primaryTypographyProps={{
								component: 'h1',
								variant: 'body1',
							}}
						/>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default function SimpleList() {
	const { root } = useStyles()

	return (
		<div className={root}>
			<SkillDisplayer skills={frontSkills} skillType='Front End Skills' />
			<SkillDisplayer skills={backSkills} skillType='Back End Skills' />
		</div>
	)
}
