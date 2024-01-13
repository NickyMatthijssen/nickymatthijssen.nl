import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";

type Version = "published" | "draft" | undefined;

export function getStory(slug: string, version?: Version) {
  if (!version) {
    process.env.NEXT_PUBLIC_STORYBLOK_VERSION;
  }

  const api = getStoryblokApi();

  return api.getStory(slug, {
    version,
    resolve_relations: ["project.client"],
  });
}

export function getStories(params: ISbStoriesParams = {}) {
  const api = getStoryblokApi();

  return api.getStories(params);
}
