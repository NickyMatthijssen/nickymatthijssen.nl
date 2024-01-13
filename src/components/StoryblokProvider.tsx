"use client";

import { storyblokComponents } from "@/storyblok";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components: storyblokComponents,
});

export default function StoryblokProvider({
  children,
}: React.PropsWithChildren) {
  return <>{children}</>;
}
