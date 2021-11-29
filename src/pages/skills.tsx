import React from 'react'

import CenterLayout from 'components/Layouts/CenterLayout'
import TitleHeader from 'components/Headers/TitleHeader'

import SkillsShow from 'components/Skills/SkillsShow'

import { frontSkills, backSkills, tools } from 'data/skills/AllSkills'

interface Props {}

const Skills = (props: Props) => {
	return (
		<CenterLayout>
			<TitleHeader
				text='My Skills'
				description='A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.'
			/>

			<SkillsShow title='Front End Skills' skills={frontSkills} />
			<SkillsShow title='Back End Skills' skills={backSkills} />
			<SkillsShow title='Tools I use' skills={tools} />
		</CenterLayout>
	)
}

export default Skills
