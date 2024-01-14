import { getStories, getStory } from "@/services/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";

type DynamicPageProps = {
  params: {
    slug: string[];
  };
};

export async function generateStaticParams() {
  const { data } = await getStories({
    excluding_slugs: "settings/*",
  });

  return data.stories.map((story) => ({
    slug: story.full_slug === "index" ? [""] : story.full_slug.split("/"),
  }));
}

async function getStoryBySlugArray(slugs?: string[]) {
  const { isEnabled } = draftMode();

  const slug = slugs?.join("/") ?? "index";
  const { data } = await getStory(slug, isEnabled ? "draft" : "published");

  return data;
}

export async function generateMetadata({
  params: { slug },
}: DynamicPageProps): Promise<Metadata> {
  try {
    const data = await getStoryBySlugArray(slug);
    const meta = data.story.content?.meta;
    if (!meta) {
      throw new Error();
    }

    return {
      title: !!meta.title ? meta.title : data.story.name,
      description: meta.description,
      twitter: {
        title: meta.twitter_title,
        description: meta.twitter_description,
        images: [meta.twitter_image],
      },
      openGraph: {
        title: meta.og_title,
        description: meta.og_description,
        images: [meta.og_image],
      },
    };
  } catch (_) {
    return {};
  }
}

export default async function DynamicPage({
  params: { slug },
}: DynamicPageProps) {
  try {
    const data = await getStoryBySlugArray(slug);

    return <StoryblokStory story={data.story} />;
  } catch (_) {
    notFound();
  }
}
