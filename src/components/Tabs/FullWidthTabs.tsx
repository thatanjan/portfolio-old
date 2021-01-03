import React, { useEffect } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Link from 'components/Links/MuiLink'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'

import navigationOptions, {
	Option,
} from 'components/Navigation/navigationOptions'
import useLargerThanMD from 'hooks/useLargerThanMD'

function a11yProps(index: number) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	}
}

const useStyles = makeStyles(({ breakpoints: { up } }: Theme) => ({
	tabsStyle: { width: '70vw', [up('md')]: { width: '100vw' } },
}))

interface Props {
	setIsDrawerOpen?: Function | undefined
}

const FullWidthTabs = ({ setIsDrawerOpen }: Props) => {
	const [value, setValue] = React.useState(0)

	const { tabsStyle } = useStyles()

	const largerThanMD = useLargerThanMD()

	const { pathname } = useRouter()

	useEffect(() => {
		const tabIndex = navigationOptions.findIndex(
			({ href }: Option) => href === pathname
		)

		setValue(tabIndex)
	}, [pathname])

	const handleClick = () => (setIsDrawerOpen ? setIsDrawerOpen(false) : null)

	return (
		<Tabs
			value={value}
			onClick={handleClick}
			indicatorColor='primary'
			textColor='primary'
			variant='fullWidth'
			aria-label='full width tabs example'
			orientation={!largerThanMD ? 'vertical' : 'horizontal'}
			className={tabsStyle}
		>
			{navigationOptions.map(({ href, label }: Option, index: number) => (
				<Link
					key={nanoid()}
					href={href}
					MuiComponent={Tab}
					label={label}
					{...a11yProps(index)}
				/>
			))}
		</Tabs>
	)
}

export default FullWidthTabs
