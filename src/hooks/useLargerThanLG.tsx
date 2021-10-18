import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const useLargerThanMd = (): boolean => {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('lg'))

	return matches
}

export default useLargerThanMd
