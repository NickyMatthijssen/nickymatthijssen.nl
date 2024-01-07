"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { StoryblokImage } from ".";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

type StoryblokImageGalleryProps = {
  images: StoryblokImage[];
};

export function StoryblokImageGallery({ images }: StoryblokImageGalleryProps) {
  return (
    <Swiper
      loop
      autoplay
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <StoryblokImage
            image={image}
            width={926}
            height={416}
            className="w-full rounded-[16px] max-h-[416px] object-cover mb-[60px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
