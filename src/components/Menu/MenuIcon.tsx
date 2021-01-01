import React, { MouseEvent, KeyboardEvent } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		menuButton: {
			marginRight: theme.spacing(2),
		},
	})
)

interface Props {
	toggle: (event: KeyboardEvent | MouseEvent) => void
}

const MenuIconComponent = ({ toggle }: Props) => {
	const { menuButton } = useStyles()
	return (
		<IconButton
			edge='start'
			className={menuButton}
			color='inherit'
			aria-label='menu'
			onClick={toggle}
		>
			<MenuIcon />
		</IconButton>
	)
}

export default MenuIconComponent
