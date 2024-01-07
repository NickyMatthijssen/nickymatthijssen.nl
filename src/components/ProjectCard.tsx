import Link from "next/link";
import { StoryblokImage } from ".";

type ProjectCardProps = {
  title: string;
  excerpt: string;
  image: StoryblokImage;
  href: string;
};

export function ProjectCard({ title, excerpt, image, href }: ProjectCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[8px] group">
      <div className="absolute inset-0 w-full h-full text-white bg-black/25 flex items-end z-[1]">
        <div className="p-4 mb-6">
          <Link href={href} className="stretched-link text-3xl font-bold">
            {title}
          </Link>

          <p className="text-base">{excerpt}</p>
        </div>
      </div>
      {image ? (
        <StoryblokImage
          className="object-cover min-h-[350px] w-full group-hover:transform group-hover:scale-125 transition-transform"
          image={image}
          width={512}
          height={512}
        />
      ) : (
        <div className="min-h-[350px]" />
      )}
    </div>
  );
}
