import Avatar from 'components/Avatar/Avatar'
import useLargerThanMD from 'hooks/useLargerThanMD'
import AboutMe from 'components/AboutMe/AboutMe'

const About = () => {
	const largerThanMD = useLargerThanMD()

	return (
		<>
			{!largerThanMD && <Avatar />} <AboutMe />{' '}
		</>
	)
}

export default About
