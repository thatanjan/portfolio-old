import React from 'react'

import Image from 'next/image'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import { nanoid } from 'nanoid'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

SwiperCore.use([Pagination, Navigation, Autoplay])

const CustomSwiperContainer = styled(Swiper)<SwiperProps>(({ theme }) => ({
	paddingBottom: '3rem',
	'& .swiper-pagination-bullet': {
		background: 'white',
	},
	'& .swiper-button-next:after': {
		fontSize: '2rem !important',
		color: theme.palette.secondary.main,
	},
	'& .swiper-button-prev:after': {
		fontSize: '2rem !important',
		color: theme.palette.secondary.main,
	},
}))

interface Props {
	images: string[]
}

const ProjectImageSlideShow = ({ images }: Props) => {
	return (
		<Box sx={{ margin: '2rem auto' }}>
			<CustomSwiperContainer
				grabCursor
				pagination={{
					clickable: true,
				}}
				loop
				autoplay={{
					delay: 3000,
				}}
				navigation
			>
				{images.map((imagePath) => (
					<SwiperSlide key={nanoid()}>
						<Box>
							<Image src={imagePath} layout='responsive' width={16} height={9} />
						</Box>
					</SwiperSlide>
				))}
			</CustomSwiperContainer>
		</Box>
	)
}

export default ProjectImageSlideShow
