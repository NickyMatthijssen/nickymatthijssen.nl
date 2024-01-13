"use client";

import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

type PageProps = {
  blok: SbBlokData & { blocks: SbBlokData[] };
};

export function Page({ blok }: PageProps) {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.blocks.map((block) => (
        <StoryblokComponent blok={block} key={block._uid} />
      ))}
    </div>
  );
}
