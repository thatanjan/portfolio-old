import Avatar from 'components/Avatar/Avatar'
import useLargerThanMD from 'hooks/useLargerThanMD'

const About = () => {
	const largerThanMD = useLargerThanMD()

	return <div>{!largerThanMD && <Avatar />}</div>
}

export default About
