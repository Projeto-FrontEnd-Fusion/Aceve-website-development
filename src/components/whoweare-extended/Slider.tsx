import Image from "next/image";
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
  const [thumbsSwiper, setThumbsSwiper] = useState< SwiperType | null>(null);

  // const [activeImage, setActiveImage] = useState(0);
  // const imagesSliced = images.slice(activeImage, activeImage + 4);
  // const handleNexImage = () => {
  //   setActiveImage(() => (activeImage + 1) % images.length);
  // };
  // console.log(imagesSliced);

  // const handlePrevImage = () => {
  //   setActiveImage(() => (activeImage - 1 + images.length) % images.length);
  // };

  const handleThumbsSwiper = (swiper: SwiperType) => {
    setThumbsSwiper(swiper);
  };

  return (
    <section > 
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="max-w-[956px] max-h-[424px] mb-4"
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
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="thumbs-slider">
            <img
              src={image}
              alt=""
              className={`cursor-pointer rounded-lg opacity-80 hover:opacity-100  `}
              width={200}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
