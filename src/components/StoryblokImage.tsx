"use client";

import Image, { ImageProps } from "next/image";

type StoryblokImageProps = Omit<ImageProps, "src" | "alt"> & {
  image: StoryblokImage;
};

export type StoryblokImage = {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: object;
  is_private: string | boolean;
  is_external_url: boolean;
};

export function StoryblokImage({ image, ...props }: StoryblokImageProps) {
  return (
    <Image src={image.filename} alt={image.alt} {...props} loader={loader} />
  );
}

type Loader = {
  src: string;
  width?: number;
  quality?: number;
};

function loader({ src, width, quality }: Loader) {
  return `${src}/m/${width}x0/filters:quality(${quality || 75})`;
}
