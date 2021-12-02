import React from 'react'
import { NextSeo } from 'next-seo'

import CenterLayout from 'components/Layouts/CenterLayout'
import TitleHeader from 'components/Headers/TitleHeader'

import SkillsShow from 'components/Skills/SkillsShow'

import { frontSkills, backSkills, tools } from 'data/skills/AllSkills'

const Skills = () => {
	return (
		<>
			<NextSeo title='Skills' description='Skills page of Anjan Shomodder' />
			<CenterLayout>
				<TitleHeader
					text='My Skills'
					description='I am a Full stack developer. Here are some of the technologies and tools that I work with'
				/>

				<SkillsShow title='Front End Skills' skills={frontSkills} />
				<SkillsShow title='Back End Skills' skills={backSkills} />
				<SkillsShow title='Tools I use' skills={tools} />
			</CenterLayout>
		</>
	)
}

export default Skills
