"use client";

import { MotionText } from "@/components/MotionComponents";
import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

type TestimonialSectionProps = {
  blok: SbBlokData & {
    title: string;
    description: string;
    slider: SbBlokData[];
  };
};

export function TestimonialSection({ blok }: TestimonialSectionProps) {
  return (
    <div className="container my-32" {...storyblokEditable(blok)}>
      <div className="text-center mb-[50px]">
        <MotionText
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          size="4xl"
          weight="bold"
          color="gradient"
        >
          {blok.title}
        </MotionText>

        {!!blok.description && (
          <MotionText
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            size="xl"
            weight="normal"
            color="default"
          >
            {blok.description}
          </MotionText>
        )}
      </div>

      <div className="mb-[80px]">
        {blok.slider.map((slider) => (
          <StoryblokComponent blok={slider} key={slider._uid} />
        ))}
      </div>
    </div>
  );
}
