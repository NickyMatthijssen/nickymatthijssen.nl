"use client";

import { StoryblokImage } from "@/components";
import { Card } from "@/components/Card";
import { SbBlokData, storyblokEditable } from "@storyblok/react";

type TestimonialProps = {
  blok: SbBlokData & {
    name: string;
    business: string;
    content: string;
    image: StoryblokImage;
  };
};

export function Testimonial({ blok }: TestimonialProps) {
  return (
    <Card variant="transparent" size="fill" {...storyblokEditable(blok)}>
      <div className="flex space-x-4 mb-5">
        <StoryblokImage
          image={blok.image}
          width={48}
          height={48}
          className="w-[48px] h-[48px] rounded-full flex-shrink-0"
        />

        <div>
          <h6 className="font-bold">{blok.name}</h6>

          <span className="text-theme-700 text-[14px]">{blok.business}</span>
        </div>
      </div>

      <p className="text-[14px]">“{blok.content}”</p>
    </Card>
  );
}
