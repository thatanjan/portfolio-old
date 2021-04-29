export class Contact {
	name: string

	Icon: string

	link: string

	constructor(name: string) {
		this.name = name
	}

	addIcon(icon: string) {
		this.Icon = icon
		return this
	}

	addLink(link: string) {
		this.link = link
		return this
	}
}

const USER_NAME = 'thatanjan'

const facebook = new Contact(USER_NAME)
	.addIcon(
		'https://www.clipartmax.com/png/middle/99-999735_sam-linder-honda-salinas-transparent-background-facebook-logo-png.png'
	)
	.addLink('https://www.facebook.com/thatanjan/')
const instagram = new Contact(USER_NAME)
	.addIcon(
		'https://3.bp.blogspot.com/-HZrSnSEH36k/V1NM6uUmaPI/AAAAAAAAAG4/SbuRxuq0HGQhqBs3m1AvegQea1OwdYRyQCLcB/s320/instagram-new-logo.jpg'
	)
	.addLink('https://www.instagram.com/thatanjan/')
const linkedin = new Contact(USER_NAME)
	.addIcon(
		'https://www.digitalmarketingpta.co.za/wp-content/uploads/2017/05/linkedin-piyagroup-pretoria.jpg'
	)
	.addLink('https://www.linkedin.com/in/thatanjan/')
const twitter = new Contact(USER_NAME)
	.addIcon(
		'https://www.thenicheng.com/wp-content/uploads/2018/05/twitter-icon.png'
	)
	.addLink('https://www.twitter.com/thatanjan/')

const gmail = new Contact('anjan.cules@gmail.com')
	.addIcon(
		'https://1.bp.blogspot.com/-Q8pkiM6WmIM/WMNjlRdRLrI/AAAAAAAADhI/nmkOC-CiC6Y24RiblhzDKovYxfZXdRl2wCLcB/s400/google-gmail.jpg'
	)
	.addLink('')

const allContacts: Contact[] = [gmail, linkedin, twitter, instagram, facebook]

export default allContacts
