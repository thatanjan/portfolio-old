const withMDX = require('@next/mdx')({
	extension: /\.mdx$/,
})

const svgLoader = {
	test: /\.svg$/,
	use: ['@svgr/webpack'],
}

module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	webpack(config) {
		config.module.rules.push(svgLoader)
		return config
	},
})
