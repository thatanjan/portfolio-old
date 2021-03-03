import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
		background: {
			paper: '#1a1a1a',
		},
		primary: {
			main: '#d84315',
		},
	},
})

const theme = responsiveFontSizes(darkTheme)

export default theme
