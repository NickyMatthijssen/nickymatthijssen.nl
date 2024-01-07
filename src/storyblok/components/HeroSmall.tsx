"use client";

import { StoryblokImage } from "@/components";
import { MotionText } from "@/components/MotionComponents";
import { useGlobals } from "@/hooks";
import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";
import { motion } from "framer-motion";
import React from "react";

type HeroSmallProps = {
  blok: SbBlokData & {
    headline: string;
    title: string;
    image: StoryblokImage;
  };
};

export function HeroSmall({ blok }: HeroSmallProps) {
  const { socials } = useGlobals();

  return (
    <header
      className="lg:pt-[100px] pb-[85px] bg-theme-850"
      {...storyblokEditable(blok)}
    >
      <div className="flex flex-col sm:flex-row container pt-[20px]">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex-shrink-0 mb-8 sm:mb-0 mx-auto sm:mr-[35px] sm:ml-0"
        >
          <StoryblokImage
            image={blok.image}
            width={211}
            height={211}
            className="rounded-full w-[211px] h-[211px] border"
          />
        </motion.div>

        <div className="text-center sm:text-left">
          <MotionText
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-theme-600"
            size="sm"
            weight="bold"
          >
            {blok.headline}
          </MotionText>

          <MotionText
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-[10px] mb-[15px]"
            color="gradient"
            size="3xl"
            weight="bold"
          >
            {blok.title}
          </MotionText>

          <div className="flex justify-center sm:justify-start space-x-5">
            {socials.map((blok, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (index + 2) * 0.3 }}
                key={blok._uid}
              >
                <StoryblokComponent blok={blok} key={blok._uid} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
