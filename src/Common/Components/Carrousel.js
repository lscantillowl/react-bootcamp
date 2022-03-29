import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.min.css'


// import required modules
import { Pagination, Navigation } from "swiper";

import Categories from "../../Utils/mocks/Categories";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {Categories.results.map((category) => {
          return (
            <SwiperSlide>
              <img src={category.data.main_image.url} alt={category.data.name} />
              <span>{category.data.name}</span>
            </SwiperSlide>
          );
        }
        )}
        
      </Swiper>
    </>
  );
}
