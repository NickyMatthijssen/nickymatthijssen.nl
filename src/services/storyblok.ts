import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";

type Version = "published" | "draft" | undefined;

export function getStory(slug: string) {
  const api = getStoryblokApi();

  return api.getStory(slug, {
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION as Version,
    resolve_relations: ["project.client"],
  });
}

export function getStories(params: ISbStoriesParams = {}) {
  const api = getStoryblokApi();

  return api.getStories(params);
}
