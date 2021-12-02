import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { nanoid } from 'nanoid'
import { NextSeo } from 'next-seo'

import CenterLayout from 'components/Layouts/CenterLayout'
import TitleHeader from 'components/Headers/TitleHeader'

import ContactShow from 'components/Contacts/ContactShow'

const Contact = () => {
	return (
		<>
			<NextSeo title='Contact' description='Feel free to contact me' />
			<CenterLayout>
				<TitleHeader
					text='GET IN TOUCH'
					description='i’m always open to discussing web development work'
				/>

				<Box sx={{ mb: '5rem' }}>
					{[
						`I am looking for a company where I can prove myself by providing great value with my skills and knowledge. I want to join a team where I can collaborate with intelligent people and learn from them.`,
						`If you are looking for a new member for your team, feel free to contact me any time.`,
					].map(paragraph => (
						<Typography sx={{ mb: '1rem', fontSize: '1.2rem' }} key={nanoid()}>
							{paragraph}
						</Typography>
					))}
				</Box>
				<ContactShow />
			</CenterLayout>
		</>
	)
}

export default Contact
