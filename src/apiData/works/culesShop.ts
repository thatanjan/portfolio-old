import readImagePaths from 'utils/readImagePaths'
import dashToSpace from 'utils/dashToSpace'
import ApiData from './dataClass'
import {
	Tech,
	javascript,
	typescript,
	react,
	nextjs,
	stripe,
	mongodb,
	express,
	nodejs,
	mui,
} from './Techs'

const CULES_SHOP = 'cules-shop'

const subtitle =
	'Cules Shop is electornic E-commerce plattform where people can buy and sell products.'

const imagePaths = readImagePaths(CULES_SHOP)

const frontEndTechStack: Tech[] = [
	javascript,
	typescript,
	react,
	nextjs,
	mui,
	stripe,
]
const backEndTechStack: Tech[] = [nodejs, express, mongodb, stripe]
const visitLink = 'https://cules-shop.vercel.app/'
const description = `Cules shop is an e-commerce application built with MERN Stack. It has secure user authentican and authorization with JSON web token. User can add product to their carts and checkout their products. They can use their credit card to pay. A user can also become a seller to sell their own products.`

const features: string[] = [
	'User Authentication',
	'User Authorization',
	'Cart',
	'Checkout',
	'Stripe Payment',
	'Product selling',
	'Product Search',
]

const confession: ApiData = new ApiData(dashToSpace(CULES_SHOP))
	.addSubtitle(subtitle)
	.addImages(imagePaths)
	.addVisitLink(visitLink)
	.addFrontEndTechStack(frontEndTechStack)
	.addBackEndTechStack(backEndTechStack)
	.addDescription(description)
	.addFeatures(features)

export default confession
