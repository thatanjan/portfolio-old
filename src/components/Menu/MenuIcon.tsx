import React, { MouseEvent, KeyboardEvent } from 'react'
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

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
            size="large">
			<MenuIcon />
		</IconButton>
    );
}

export default MenuIconComponent
