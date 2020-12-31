import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Link from 'components/Links/MuiLink'
import { nanoid } from 'nanoid'

import navigationOptions, { Option } from './navigationOptions'

function a11yProps(index: any) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	}
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: '100vw',
	},
	appBarStyle: {
		bottom: 0,
		top: 'initial',
	},
}))

export default function FullWidthTabs() {
	const { root, appBarStyle } = useStyles()

	const [value, setValue] = React.useState(0)

	const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue)
	}

	return (
		<div className={root}>
			<AppBar className={appBarStyle} position='fixed' color='default'>
				<Tabs
					value={value}
					indicatorColor='primary'
					onChange={handleChange}
					textColor='primary'
					variant='fullWidth'
					aria-label='full width tabs example'
					orientation='horizontal'
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
			</AppBar>
		</div>
	)
}
