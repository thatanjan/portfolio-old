import React from 'react'
import Typed from 'typed.js'
import Typography, { TypographyProps } from '@mui/material/Typography'
import Box from '@mui/material/Box'

const professionData = [
	'Full stack developer',
	'Front end developer',
	'Back end developer',
	'Blogger',
	'Youtuber',
]

const Type = () => {
	const el = React.useRef<HTMLHeadingElement>(null)
	const typed = React.useRef<HTMLHeadingElement | null>(null)

	React.useEffect(() => {
		if (el.current || typed.current) {
			const options = {
				strings: professionData,
				typeSpeed: 100,
				backSpeed: 70,
				loop: true,
			}

			typed.current = new Typed(el.current, options)
		}

		return () => {
			typed.current.destroy()
		}
	}, [])

	return (
		<Box
			sx={{
				display: 'inline',
				'& span': {
					fontSize: 'inherit',
				},
			}}
		>
			<Typography
				ref={el}
				style={{ display: 'inline', fontSize: 'inherit', fontWeight: 'inherit' }}
			/>
		</Box>
	)
}

export default Type
