import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useLargerThanMd = (): boolean => {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('lg'))

	return matches
}

export default useLargerThanMd
