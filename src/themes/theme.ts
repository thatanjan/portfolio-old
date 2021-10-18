import { createTheme, responsiveFontSizes, adaptV4Theme } from '@mui/material/styles';

const darkTheme = createTheme(adaptV4Theme({
	palette: {
		mode: 'dark',
		background: {
			paper: '#1a1a1a',
		},
		primary: {
			main: '#d84315',
		},
		secondary: {
			light: '#015f92',
			main: '#0288d1',
			dark: '#349fda',
		},
	},
}))

const theme = responsiveFontSizes(darkTheme)

theme.typography.button = {
	...theme.typography.button,
	[theme.breakpoints.down('sm')]: {
		fontSize: '0.775rem',
	},
}

export default theme
