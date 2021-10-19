import React from 'react'
import Document, { Html, Main, Head, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { NextSeo } from 'next-seo'

const description =
	"Portfolio website of Anjan Shomodder. Anjan is a full stack web developer, Blogger and instructor at Cules Coding youtube channel. Creator of open source Social media application 'Confession'"

export default class MyDocument extends Document {
	render() {
		return (
			<>
				<Html lang='en' prefix='og: https://ogp.me/ns#'>
					<Head>
						<link
							rel='apple-touch-icon'
							sizes='57x57'
							href='/favicons/apple-icon-57x57.png'
						/>
						<link
							rel='apple-touch-icon'
							sizes='60x60'
							href='/favicons/apple-icon-60x60.png'
						/>
						<link
							rel='apple-touch-icon'
							sizes='72x72'
							href='/favicons/apple-icon-72x72.png'
						/>
						<link
							rel='apple-touch-icon'
							sizes='76x76'
							href='/favicons/apple-icon-76x76.png'
						/>
						<link
							rel='apple-touch-icon'
							sizes='114x114'
							href='/favicons/apple-icon-114x114.png'
						/>
						<link
							rel='apple-touch-icon'
							sizes='120x120'
							href='/favicons/apple-icon-120x120.png'
						/>
						<link
							rel='apple-touch-icon'
							sizes='144x144'
							href='/favicons/apple-icon-144x144.png'
						/>
						<link
							rel='apple-touch-icon'
							sizes='152x152'
							href='/favicons/apple-icon-152x152.png'
						/>
						<link
							rel='apple-touch-icon'
							sizes='180x180'
							href='/favicons/apple-icon-180x180.png'
						/>
						<link
							rel='icon'
							type='image/png'
							sizes='192x192'
							href='/favicons/android-icon-192x192.png'
						/>
						<link
							rel='icon'
							type='image/png'
							sizes='32x32'
							href='/favicons/favicon-32x32.png'
						/>
						<link
							rel='icon'
							type='image/png'
							sizes='96x96'
							href='/favicons/favicon-96x96.png'
						/>
						<link
							rel='icon'
							type='image/png'
							sizes='16x16'
							href='/favicons/favicon-16x16.png'
						/>
						<link rel='manifest' href='/favicons/manifest.json' />
						<meta name='msapplication-TileColor' content='#ffffff' />
						<meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
					</Head>
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
