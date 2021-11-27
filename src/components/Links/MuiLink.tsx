/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

const NextComposed = React.forwardRef(function NextComposed(
	props: any,
	ref: any
) {
	const { as, href, ...other } = props

	return (
		<NextLink href={href} as={as}>
			<a ref={ref} {...other} />
		</NextLink>
	)
})

interface Props {
	MuiComponent: Function
	href: string | any
	as?: string
	[key: string]: any
	button?: boolean
}

function Link(props: Props) {
	const {
		MuiComponent,
		href,
		activeClassName = 'active',
		className: classNameProps,
		innerRef,
		naked,
		button,
		...other
	} = props

	const router = useRouter()
	const pathname = typeof href === 'string' ? href : href.pathname
	const className = clsx(classNameProps, {
		[activeClassName]: router.pathname === pathname && activeClassName,
	})

	if (naked) {
		return (
			<NextComposed className={className} ref={innerRef} href={href} {...other} />
		)
	}

	const linkStyle = {
		textDecoration: 'none',
		color: 'secondary.dark',

		'&:hover': {
			textDecoration: 'underline',
		},
	}

	if (button) {
		return (
			<MuiComponent
				component={NextComposed}
				className={className}
				ref={innerRef}
				href={href}
				{...other}
			/>
		)
	}

	return (
		<MuiComponent
			component={NextComposed}
			className={className}
			ref={innerRef}
			href={href}
			{...other}
			sx={linkStyle}
		/>
	)
}

export default React.forwardRef((props: Props, ref: any) => (
	<Link {...props} innerRef={ref} />
))
