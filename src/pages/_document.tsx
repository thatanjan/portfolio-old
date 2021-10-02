import React from 'react'
import Document, { Html, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { NextSeo } from 'next-seo'

const description =
	"Portfolio website of Anjan Shomodder. Anjan is a full stack web developer, Blogger and instructor at Cules Coding youtube channel. Creator of open source Social media application 'Confession'"

export default class MyDocument extends Document {
	render() {
		return (
			<>
				<Html lang='en' prefix='og: https://ogp.me/ns#'>
					<NextSeo
						title='Anjan'
						description={description}
						additionalLinkTags={[
							{
								rel: 'stylesheet',
								href:
									'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
							},
						]}
						openGraph={{
							title: 'Anjan',
							description,
							locale: 'en_US',
							type: 'profile',
							profile: {
								firstName: 'Anjan',
								lastName: 'Shomodder',
								gender: 'Male',
								username: 'thatanjan',
							},
							url: 'https://www.thatanjan.me/',
						}}
					/>
					<body>
						<Main />
						<NextScript />
					</body>
				</Html>
			</>
		)
	}
}

MyDocument.getInitialProps = async ctx => {
	const sheets = new ServerStyleSheets()
	const originalRenderPage = ctx.renderPage

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: App => props => sheets.collect(<App {...props} />),
		})

	const initialProps = await Document.getInitialProps(ctx)

	return {
		...initialProps,

		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
		],
	}
}
