import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'
import { nanoid } from 'nanoid'

const CodeBlock = ({ children, className }: any) => {
	if (!className) return null

	const language = className.replace(/language-/, '')

	defaultProps.theme = vsDark
	return (
		<Highlight {...defaultProps} code={children} language={language}>
			{({
				className: PropsClassName,
				style,
				tokens,
				getLineProps,
				getTokenProps,
			}: any) => (
				<pre className={PropsClassName} style={{ ...style, padding: '20px' }}>
					{tokens.map((line: any, i: any) => (
						<div key={nanoid()} {...getLineProps({ line, key: i })}>
							{line.map((token: any, key: any) => (
								<span key={nanoid()} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	)
}

export default CodeBlock
