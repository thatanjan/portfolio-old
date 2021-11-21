import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'

import createEmotionCache from 'utils/createEmotionCache'

import darkTheme from 'themes/darkTheme'

import PageLayout from 'components/Layouts/PageLayout'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>My page</title>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<PageLayout>
					<Component {...pageProps} />
				</PageLayout>
			</ThemeProvider>
		</CacheProvider>
	)
}
