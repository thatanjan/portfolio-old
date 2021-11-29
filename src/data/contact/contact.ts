import Contact from 'classes/Contact/Contact'

const USER_NAME = 'thatanjan'
const emailAddress = 'thatanjan@gmail.com'

const email = new Contact(emailAddress, `mailto:${emailAddress}`).addImage(
	'gmail.svg'
)

const linkedin = new Contact(
	USER_NAME,
	`https://www.linkedin.com/in/${USER_NAME}`
).addImage('linkedin.svg')

const twitter = new Contact(
	USER_NAME,
	`https://twitter.com/${USER_NAME}`
).addImage('twitter.svg')

const instagram = new Contact(
	USER_NAME,
	`https://www.instagram.com/${USER_NAME}`
).addImage('instagram.svg')

const facebook = new Contact(
	USER_NAME,
	`https://www.facebook.com/${USER_NAME}`
).addImage('facebook.svg')

const allContacts: Contact[] = [email, linkedin, twitter, instagram, facebook]

export default allContacts
