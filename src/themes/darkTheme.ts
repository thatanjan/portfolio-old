import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { darkThemeBackground } from 'variables/global'

let theme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			paper: darkThemeBackground,
		},
		primary: {
			main: '#ff4600',
		},
		secondary: {
			light: '#015f92',
			main: '#0288d1',
			dark: '#349fda',
		},
	},
})

theme = responsiveFontSizes(theme)

export default theme
