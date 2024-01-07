"use client";

import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

type TestimonialSliderProps = {
  blok: SbBlokData & {
    testimonials: SbBlokData[];
  };
};

export function TestimonialSlider({ blok }: TestimonialSliderProps) {
  return (
    <Swiper
      loop
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
      {...storyblokEditable(blok)}
    >
      {blok.testimonials.map((testimonial, index) => (
        <SwiperSlide key={testimonial._uid}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.3 }}
          >
            <StoryblokComponent blok={testimonial} />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
