import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import LinkButton from 'components/Buttons/LinkButton'
import Image from 'next/image'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: '90%',

			margin: '15% auto',

			[theme.breakpoints.up('sm')]: {
				maxWidth: '80%',
			},
		},
	})
)

export default function RecipeReviewCard() {
	const classes = useStyles()

	return (
		<Card className={classes.root}>
			<CardHeader
				title='Shrimp and Chorizo Paella'
				subheader='September 14, 2016'
				titleTypographyProps={{ variant: 'h3' }}
			/>
			<Image
				layout='intrinsic'
				src='/cules_banner.jpg'
				height={600}
				width={820}
				objectFit='cover'
			/>
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the mussels,
					if you like.
				</Typography>
			</CardContent>
			<CardActions style={{ justifyContent: 'center' }}>
				<LinkButton link='/' text='read more' />
			</CardActions>
		</Card>
	)
}
