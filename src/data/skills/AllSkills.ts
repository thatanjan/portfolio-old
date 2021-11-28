import Skill from 'classes/Skills/SkillClass'

const git = new Skill('Git', 'git.png')
const react = new Skill('React', 'react.png')
const redux = new Skill('Redux', 'redux.jpeg')
const javascript = new Skill('Javascript', 'javascript.png')
const nextjs = new Skill('Next.js', 'nextjs.png')
const mui = new Skill('Material-UI', 'mui.png')
const typescript = new Skill('TypeScript', 'typescript.png')
const html = new Skill('HTML', 'html.png')
const css = new Skill('CSS', 'css.webp')
const sass = new Skill('Sass', 'sass.png')
const seo = new Skill('SEO', 'seo.png')
const markdown = new Skill('Markdown', 'markdown.webp')

const nodejs = new Skill('Node.js', 'nodejs.png')
const express = new Skill('Express', 'express.png')
const mongodb = new Skill('MongoDB', 'mongodb.png')
const graphql = new Skill('GraphQL', 'graphql.png')
const rest = new Skill('REST', 'rest.png')
const mongoose = new Skill('Mongoose', 'mongoose.png')
const stripe = new Skill('Stripe', 'stripe.jpg')

const vim = new Skill('Vim', 'vim.svg')
const github = new Skill('GitHub', 'github.png')
const vscode = new Skill('VSCode', 'vscode.svg')
const webpack = new Skill('Webpack', 'webpack.svg')
const linux = new Skill('Linux', 'linux.png')
const devtools = new Skill('Browser DevTools', 'devtools.png')
const prettier = new Skill('Prettier', 'prettier.png')
const eslint = new Skill('ESLint', 'eslint.png')
const gulp = new Skill('Gulp', 'gulp.png')

const frontSkills: Skill[] = [
	html,
	css,
	javascript,
	react,
	redux,
	nextjs,
	typescript,
	seo,
	sass,
	mui,
	markdown,
]

const backSkills: Skill[] = [
	nodejs,
	express,
	mongodb,
	graphql,
	rest,
	mongoose,
	stripe,
]

const tools: Skill[] = [
	git,
	github,
	vim,
	vscode,
	webpack,
	linux,
	devtools,
	prettier,
	eslint,
	gulp,
]

export {
	frontSkills,
	backSkills,
	tools,
	html,
	css,
	javascript,
	react,
	redux,
	nextjs,
	typescript,
	seo,
	sass,
	mui,
	markdown,
	nodejs,
	express,
	mongodb,
	graphql,
	rest,
	mongoose,
	stripe,
	git,
	github,
	vim,
	vscode,
	webpack,
	linux,
	devtools,
	prettier,
	eslint,
	gulp,
}
