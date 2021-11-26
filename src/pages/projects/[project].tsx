import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import CenterLayout from 'components/Layouts/CenterLayout'
import ProjectImageSlideShow from 'components/Slides/ImageSlideShow'

interface Props {}

const Project = (props: Props) => {
	return (
		<CenterLayout>
			<ProjectImageSlideShow images={['/anime_19.jpg', '/anime_19.jpg']} />

			<Typography variant='h2' gutterBottom>
				Confession
			</Typography>

			<Typography gutterBottom>
				Elit ut eius repellendus nihil facere. Numquam neque asperiores iusto libero
				fugiat obcaecati sit incidunt Consectetur architecto nesciunt iste modi
				illum. Recusandae similique fuga provident incidunt praesentium? Sit
				consectetur cumque cumque aut eaque. Vel voluptatem fugiat quo tempore
				recusandae dolor, nihil distinctio tenetur? Modi consequuntur magnam tempora
				repellat quis Saepe laudantium itaque sapiente saepe corporis Facilis soluta
				atque dolor optio quae numquam. Minima exercitationem in sit perferendis
				animi a similique Incidunt dicta quis repudiandae quae delectus Tempora
				obcaecati expedita sed dicta obcaecati inventore. Cum odit impedit explicabo
				earum iure maiores? Neque adipisci nobis nostrum minus repudiandae? Nostrum
				distinctio non quis?
			</Typography>
		</CenterLayout>
	)
}

export default Project
