import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

export default function SwiperAutoPlay({ children }) {
	return (
		<>
			<Swiper
				slidesPerView={'auto'}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination]}
				style={{ width: '100%', height: '100%', paddingBottom: '2rem' }}
			>
				{children}
			</Swiper>
		</>
	);
}
