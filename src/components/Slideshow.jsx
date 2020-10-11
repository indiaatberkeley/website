import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"

const Logo = ({ image, alttext }) => (

	<SwiperSlide>
		<img
			src={image.url}
			alt={alttext[0].text}
			width="100%" />
	</SwiperSlide>
);

export default Logo;
