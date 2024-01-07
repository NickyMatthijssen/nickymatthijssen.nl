"use client";

import { SbLink, StoryblokLink } from "@/components";
import { SbBlokData, storyblokEditable } from "@storyblok/react";

export type SbNavigationLink = SbBlokData & {
  label: string;
  url: SbLink;
};

type NavigationLinkProps = {
  blok: SbNavigationLink;
};

export function NavigationLink({ blok }: NavigationLinkProps) {
  return (
    <StoryblokLink
      url={blok.url}
      className="py-[23px] px-[17px] text-base"
      {...storyblokEditable(blok)}
    >
      {blok.label}
    </StoryblokLink>
  );
}
