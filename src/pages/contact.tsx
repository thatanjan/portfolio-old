import React from 'react'

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
					description='I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.'
				/>

				<ContactShow />
			</CenterLayout>
		</>
	)
}

export default Contact
