import Project from 'classes/Project/Project'
import Info from 'classes/Project/ProjectInfo'

import readImagePaths from 'utils/readImagePaths'
import {
	javascript,
	react,
	redux,
	nextjs,
	typescript,
	mui,
	nodejs,
	express,
	mongodb,
	graphql,
	mongoose,
	git,
	github,
	vim,
	devtools,
	prettier,
	eslint,
} from 'data/skills/AllSkills'

export const CULES_SHOP = 'cules-shop'

const subtitle = `Cules shop is an open source e-commerce website where people can buy and sell their electronic products.`

const description = [
	`Cules shop is an e-commerce application built with MERN Stack. It has secure user authentican and authorization with JSON web token. User can add product to their carts and checkout their products. They can use their credit card to pay. A user can also become a seller to sell their own products.`,
]

const features: string[] = [
	'User Authentication',
	'User Authorization',
	'Cart',
	'Checkout',
	'Stripe Payment',
	'Product selling',
	'Product Search',
]

const projectInfos = [
	new Info({
		field: 'category',
		value: 'E-Commerce',
	}),
	new Info({
		field: 'type',
		value: 'full stack web application',
	}),
	new Info({
		field: 'live_demo',
		href: 'https://cules-shop.vercel.app/',
		value: CULES_SHOP,
	}),
	new Info({
		field: 'source_code',
		href: `https://github.com/thatanjan/${CULES_SHOP}`,
		value: 'Github',
	}),
]

const frontEndTechs = [javascript, react, redux, nextjs, typescript, mui]

const backEndTechs = [nodejs, express, mongodb, graphql, mongoose]

const toolsUsed = [git, github, vim, devtools, prettier, eslint]

const culesShop = new Project(CULES_SHOP)
	.addSubtitle(subtitle)
	.addDescription(description)
	.addProjectInfos(projectInfos)
	.addFeatures(features)
	.addImages(readImagePaths(CULES_SHOP))
	.addFrontEndTechs(frontEndTechs)
	.addBackEndTechs(backEndTechs)
	.addToolsUsed(toolsUsed)

export default culesShop
