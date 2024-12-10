import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import "./Slider.css";

const Slider = ({ images }: { images: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const handleThumbsSwiper = (swiper: SwiperType) => {
    setThumbsSwiper(swiper);
  };

  return (
    <section className="laptop:w-[900px] mx-auto">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="main-slider mb-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="h-full">
            <img
              src={image}
              alt="image"
              className="h-full object-cover rounded-lg select-none max-h-[424px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={handleThumbsSwiper}
        spaceBetween={10}
        slidesPerView={2.2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          536: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="thumbs-slider">
            <img
              src={image}
              alt=""
              className={`cursor-pointer rounded-lg opacity-80 hover:opacity-100 object-cover`}
              width={0}
              height={0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
