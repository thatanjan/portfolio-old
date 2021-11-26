class Skill {
	name: string

	image: string

	constructor(name: string, image: string) {
		this.name = name
		this.image = `/skills/${image}`
	}
}

export default Skill
