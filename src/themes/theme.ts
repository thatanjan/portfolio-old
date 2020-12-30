import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
	},
})

const theme = responsiveFontSizes(darkTheme)

export default theme
