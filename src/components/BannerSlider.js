import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg from "../images/banner.png";
// Import Swiper styles
import "swiper/css";

const BannerSlider = () => {
  return (
    <div className="my-4">
      <div className="container-fluid">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          Autoplay={true}
          isDuplicate={true}
        >
          <SwiperSlide>
            <img src={bannerImg} className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bannerImg} className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bannerImg} className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bannerImg} className="img-fluid" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default BannerSlider;
