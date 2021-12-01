import React from 'react'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { nanoid } from 'nanoid'

import AboutMeQuestion from 'classes/aboutMe/AboutMeQuestion'

interface Props {
	data: AboutMeQuestion[]
}

const AboutMeQuestions = ({ data }: Props) => {
	return (
		<>
			{data.map(({ question, answer }, index) => (
				<Accordion
					key={nanoid()}
					TransitionProps={{ unmountOnExit: true }}
					defaultExpanded={!index}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography>{question}</Typography>
					</AccordionSummary>
					<AccordionDetails> {answer}</AccordionDetails>
				</Accordion>
			))}
		</>
	)
}

export default AboutMeQuestions
