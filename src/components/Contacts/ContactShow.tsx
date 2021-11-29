import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { nanoid } from 'nanoid'
import Image from 'next/image'

import allContacts from 'data/contact/contact'
import Contact from 'classes/Contact/Contact'

import TypographyLink from 'components/Links/TypographyLink'

const SingleContact = ({ name, href, image }: Contact) => {
	const dimension = 200

	return (
		<>
			<Image src={image} height={dimension} width={dimension} objectFit='cover' />

			<TypographyLink href={href} sx={{ marginTop: '4rem' }}>
				{name}
			</TypographyLink>
		</>
	)
}

const ContactShow = () => {
	return (
		<Grid container justifyContent='space-around' spacing={4} sx={{ mb: '5rem' }}>
			<Grid item xs={12}>
				<Typography
					component='h1'
					variant='h3'
					gutterBottom
					align='center'
					sx={{ textTransform: 'capitalize' }}
				>
					My contacts
				</Typography>
			</Grid>

			{allContacts.map((contact) => (
				<Grid item xs={5} sm={4} xl={3} key={nanoid()} sx={{ textAlign: 'center' }}>
					<SingleContact {...contact} />
				</Grid>
			))}
		</Grid>
	)
}

export default ContactShow
