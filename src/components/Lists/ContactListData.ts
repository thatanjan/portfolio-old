import { ElementType } from 'react'
import Instagram from '../../../public/svgs/social_media/instagram.svg'
import Linkedin from '../../../public/svgs/social_media/linkedin.svg'
import Facebook from '../../../public/svgs/social_media/facebook.svg'
import Twitter from '../../../public/svgs/social_media/twitter.svg'
import Youtube from '../../../public/svgs/social_media/youtube.svg'

export class Contact {
	name: string

	Icon: ElementType

	link: string

	constructor(name: string) {
		this.name = name
	}

	addIcon(icon: ElementType) {
		this.Icon = icon
		return this
	}

	addLink(link: string) {
		this.link = link
		return this
	}
}

const facebook = new Contact('facebook')
	.addIcon(Facebook)
	.addLink('https://www.facebook.com/thatanjan/')
const instagram = new Contact('instagram')
	.addIcon(Instagram)
	.addLink('https://www.instagram.com/thatanjan/')
const linkedin = new Contact('Linkedin')
	.addIcon(Linkedin)
	.addLink('https://www.linkedin.com/in/thatanjan/')
const twitter = new Contact('twitter')
	.addIcon(Twitter)
	.addLink('https://www.twitter.com/thatanjan/')
const youtube = new Contact('youtube')
	.addIcon(Youtube)
	.addLink('https://www.youtube.com/channel/UCBaGowNYTUsm3IDaHbLRMYw')

const allContacts: Contact[] = [linkedin, twitter, instagram, youtube, facebook]

export default allContacts
