import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Banners from '../../Utils/mocks/Banners';
// Import Swiper styles
import 'swiper/swiper.min.css'

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      { Banners.results.map((banner) => {
        return (
          <SwiperSlide>
            <img src={banner.data.main_image.url} alt={banner.data.name} />
            <span>{banner.data.name}</span>
          </SwiperSlide>
        )
      })}
      
    </Swiper>
  );
};
