import {
  DetailList,
  DetailListItem,
  DetailListSpacer,
  DetailListTitle,
  SbLink,
  StoryblokImage,
  StoryblokImageGallery,
  StoryblokLink,
  Text,
} from "@/components";
import { Card } from "@/components/Card";
import { ISbStoryData, SbBlokData } from "@storyblok/react/rsc";
import Markdown from "react-markdown";

type SbClient = {};

export type SbProject = SbBlokData & {
  title: string;
  gallery: StoryblokImage[];
  details: string;
  excerpt: string;
  preview_url?: SbLink;
  github_url?: SbLink;
  client?: ISbStoryData<SbClient>;
};

type ProjectProps = {
  blok: SbProject;
};

export function Project({ blok, ...rest }: ProjectProps) {
  console.log(rest);
  console.log(blok);
  return (
    <div className="container">
      <Text
        as="h1"
        size="4xl"
        weight="bold"
        color="gradient"
        className="text-center"
      >
        {blok.title}
      </Text>

      <div className="mt-[30px] mb-[50px]">
        <StoryblokImageGallery images={blok.gallery} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <section>
            <Text size="3xl" weight="bold" color="light" className="mb-[30px]">
              Project Details
            </Text>

            <Markdown>{blok.details}</Markdown>
          </section>
        </div>

        <aside>
          <Card className="!p-[25px]">
            <Text
              as="h2"
              size="xl"
              weight="bold"
              color="gradient"
              className="mb-[40px] pb-[10px] relative before:content-['faef'] before:h-[3px] before:w-[96px] before:bg-brand-1 before:absolute before:left-0 before:bottom-0"
            >
              {blok.title}
            </Text>

            <DetailList>
              {blok.client && (
                <>
                  <DetailListTitle>Client</DetailListTitle>
                  <DetailListItem>{blok.client.name}</DetailListItem>
                </>
              )}

              {blok.preview_url && (
                <>
                  <DetailListSpacer />
                  <DetailListTitle>Preview</DetailListTitle>
                  <DetailListItem>
                    <StoryblokLink url={blok.preview_url} target="_blank">
                      {blok.preview_url.cached_url}
                    </StoryblokLink>
                  </DetailListItem>
                </>
              )}

              {blok.github_url && (
                <>
                  <DetailListSpacer />
                  <DetailListTitle>Repository</DetailListTitle>
                  <DetailListItem>
                    <StoryblokLink url={blok.github_url} target="_blank">
                      {blok.github_url.cached_url}
                    </StoryblokLink>
                  </DetailListItem>
                </>
              )}
            </DetailList>
          </Card>
        </aside>
      </div>
    </div>
  );
}
