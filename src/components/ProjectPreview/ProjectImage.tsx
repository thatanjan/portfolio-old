import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import makeStyles from '@mui/styles/makeStyles';
import { nanoid } from 'nanoid'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

SwiperCore.use([Pagination])

const useStyles = makeStyles({
	boxStyle: {
		margin: '5% auto',
	},
	swiperContainer: {
		paddingBottom: '3rem',
		'& .swiper-pagination-bullet': {
			background: 'white',
		},
	},
})

interface Props {
	imagePaths: string[]
}

const ProjectImage = ({ imagePaths }: Props) => {
	const { boxStyle, swiperContainer } = useStyles()

	return (
		<Box className={boxStyle}>
			<Swiper
				grabCursor
				pagination={{
					clickable: true,
				}}
				loop
				autoplay={{
					delay: 3000,
				}}
				className={swiperContainer}
			>
				{imagePaths.map(imagePath => (
					<SwiperSlide key={nanoid()}>
						<Box>
							<Image src={imagePath} layout='responsive' width={16} height={9} />
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	)
}

export default ProjectImage
