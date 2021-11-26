import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import CenterLayout from 'components/Layouts/CenterLayout'
import ProjectImageSlideShow from 'components/Slides/ImageSlideShow'

interface Props {}

const Project = (props: Props) => {
	return (
		<>
			<Grid container justifyContent='center'>
				<Grid
					item
					container
					xs={11}
					md={10}
					lg={9}
					xl={8}
					justifyContent='space-between'
				>
					<Grid item xs={12}>
						<ProjectImageSlideShow images={['/anime_19.jpg', '/anime_19.jpg']} />
					</Grid>

					<Grid item xs={12} xl={7}>
						<Typography variant='h2' gutterBottom>
							Confession
						</Typography>

						<Typography gutterBottom sx={{ lineHeight: 2 }}>
							Elit ut eius repellendus nihil facere. Numquam neque asperiores iusto
							libero fugiat obcaecati sit incidunt Consectetur architecto nesciunt iste
							modi illum. Recusandae similique fuga provident incidunt praesentium? Sit
							consectetur cumque cumque aut eaque. Vel voluptatem fugiat quo tempore
							recusandae dolor, nihil distinctio tenetur? Modi consequuntur magnam
							tempora repellat quis Saepe laudantium itaque sapiente saepe corporis
							Facilis soluta atque dolor optio quae numquam. Minima exercitationem in
							sit perferendis animi a similique Incidunt dicta quis repudiandae quae
							delectus Tempora obcaecati expedita sed dicta obcaecati inventore. Cum
							odit impedit explicabo earum iure maiores? Neque adipisci nobis nostrum
							minus repudiandae? Nostrum distinctio non quis?
						</Typography>
					</Grid>
					<Grid item xs={12} xl={4} pt={10}>
						<Typography variant='h4'>Project Info</Typography>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}

export default Project
