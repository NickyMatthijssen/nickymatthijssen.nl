import { StoryblokImage, Text } from "@/components";
import { SbBlokData, storyblokEditable } from "@storyblok/react";

type ServiceProps = {
  blok: SbBlokData & {
    icon: StoryblokImage;
    title: string;
    description: string;
  };
};

export function Service({ blok }: ServiceProps) {
  return (
    <div className="mb-[50px]" {...storyblokEditable(blok)}>
      <div className="w-[60px] h-[60px] rounded-full mb-4 bg-theme-950 flex items-center justify-center">
        {blok.icon && (
          <StoryblokImage image={blok.icon} width={60} height={60} />
        )}
      </div>

      <Text as="h3" size="xl" color="light" className="mb-4">
        {blok.title}
      </Text>

      <Text as="p" size="base" className="text-theme-700">
        {blok.description}
      </Text>
    </div>
  );
}
