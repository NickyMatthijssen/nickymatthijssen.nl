"use client";

import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useState } from "react";

type TestimonialSliderProps = {
  blok: SbBlokData & {
    testimonials: SbBlokData[];
  };
};

export function TestimonialSlider({ blok }: TestimonialSliderProps) {
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(3);

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
      onBreakpoint={(swiper, params) =>
        setCurrentSlidesPerView(params.slidesPerView)
      }
      {...storyblokEditable(blok)}
    >
      {blok.testimonials.map((testimonial, index) => {
        const isAboveSlidesPerView = index + 1 > currentSlidesPerView;

        return (
          <SwiperSlide key={testimonial._uid}>
            <motion.div
              initial={{
                opacity: isAboveSlidesPerView ? 1 : 0,
                y: isAboveSlidesPerView ? 0 : 50,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: isAboveSlidesPerView ? 0 : index * 0.3,
              }}
              key={`slide-${index}-${currentSlidesPerView}`}
            >
              <StoryblokComponent blok={testimonial} />
            </motion.div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
