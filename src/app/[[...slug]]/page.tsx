import { getStory } from "@/services/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 60 * 60;

type DynamicPageProps = {
  params: {
    slug: string[];
  };
};

async function getStoryBySlugArray(slugs: string[]) {
  const slug = slugs?.join("/") ?? "home";
  const { data } = await getStory(slug);

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
