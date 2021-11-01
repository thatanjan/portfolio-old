export class Tech {
	name: string

	avatar: string

	constructor(name: string, avatar: string) {
		this.name = name
		this.avatar = avatar
	}
}

export const javascript = new Tech(
	'Javascript',
	'https://web.archive.org/web/20190831204424if_/https://2ch.pm/b/thumb/202995921/15672793792330s.jpg'
)

export const react = new Tech(
	'ReactJS',
	'https://cdn.auth0.com/blog/reactjs16/logo.png'
)

export const typescript = new Tech(
	'TypeScript',
	'https://authfix-le-gaulois.tech/wp-content/uploads/2019/03/ts-320x320.png'
)

export const mui = new Tech(
	'Material UI',
	'https://i.pinimg.com/236x/e4/9d/a7/e49da7a0eeedfa732124d9aabeae3062.jpg?nii=t'
)

export const nodejs = new Tech(
	'NodeJS',
	'https://www.linux.org/data/avatars/o/78/78445.jpg?1554259998'
)

export const graphql = new Tech(
	'Graphql',
	'https://2.bp.blogspot.com/-5F6wnAKb3Dk/XDaOYcVj5NI/AAAAAAAAUUY/qsSuYCPfBnIS0c54WDLCUy4c-PNdHaSPgCLcBGAs/s640/Complete%2Bguide%2Bto%2Bbuilding%2Ba%2BGraphQL%2BAPI.jpg'
)

export const express = new Tech(
	'ExpressJS',
	'https://dz8fbjd9gwp2s.cloudfront.net/orgData/5e85a31d0cf2fc4c81d60c2f/pages/assets/images/II7lBexpress.png'
)

export const mongodb = new Tech(
	'MongoDB',
	'https://onmogul.s3.amazonaws.com/uploads/user/avatar/3077013/4bf54bb806.png'
)

export const mdx = new Tech(
	'MDX (Markdown)',
	'https://im0-tub-com.yandex.net/i?id=d4bbb58a9cec9f3fba8fe8be2cbe0406&n=13&exp=1'
)

const nextjsImageUrl =
	'https://images.viblo.asia/a587cb51-7daf-4219-9cb9-875ca90ec031.png'

export const nextjsApiRoutes = new Tech('NextJS Api Routes', nextjsImageUrl)

export const nextjs = new Tech('NextJS', nextjsImageUrl)

export const stripe = new Tech(
	'Stripe',
	'https://novator.co.uk/wp-content/uploads/2019/11/stripe.jpg'
)

export const redux = new Tech(
	'Redux',
	'https://uploads-ssl.webflow.com/5eacc8815c6b73d93d13b2f5/5ed819a41bec6275eade8334_Redux-p-800.jpeg'
)
