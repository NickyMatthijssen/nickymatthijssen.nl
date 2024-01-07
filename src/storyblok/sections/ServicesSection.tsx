"use client";

import { Card } from "@/components/Card";
import { MotionText } from "@/components/MotionComponents";
import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

type ServicesSectionProps = {
  blok: SbBlokData & {
    title: string;
    description: string;
    services: SbBlokData[];
  };
};

export function ServicesSection({ blok }: ServicesSectionProps) {
  return (
    <section className="container my-32" {...storyblokEditable(blok)}>
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

        <MotionText
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          size="xl"
          weight="normal"
          color="default"
        >
          {blok.description}
        </MotionText>
      </div>

      <Card className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 !pt-[70px] md:!px-[100px] !pb-[20px]">
        {blok.services.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </Card>
    </section>
  );
}
