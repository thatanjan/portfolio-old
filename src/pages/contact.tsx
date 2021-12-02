import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { nanoid } from 'nanoid'

import CenterLayout from 'components/Layouts/CenterLayout'
import TitleHeader from 'components/Headers/TitleHeader'

import ContactShow from 'components/Contacts/ContactShow'

interface Props {}

const Contact = (props: Props) => {
	return (
		<>
			<CenterLayout>
				<TitleHeader
					text='GET IN TOUCH'
					description='i’m always open to discussing web development work'
				/>

				<Box sx={{ mb: '5rem' }}>
					{[
						`I'm seeking out opportunities to collaborate with companies / agencies / individuals, not just work for them. I want to bring my collective design experience to the table where we can work together to solve real business-problems in a way that optimizes all of our respective experience and knowledge.`,

						`I want to avoid subjective pissing-matches, and favor open-minded collaborators where egos are out of the equation. If that all sounds about right, then lets for sure chat about how we can work together.`,
					].map((paragraph) => (
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
