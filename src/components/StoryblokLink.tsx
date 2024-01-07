import Link, { LinkProps } from "next/link";

export type SbLink = {
  id: string;
  url?: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
  target?: string;
};

type StoryblokLinkProps = React.PropsWithChildren &
  Omit<LinkProps, "href"> & {
    url: SbLink;
    className?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
  };

export function StoryblokLink({
  url,
  children,
  target,
  ...props
}: StoryblokLinkProps) {
  const isExternal = [url.target, target].includes("_blank") || !!url.url;
  const Component = isExternal ? "a" : Link;

  const path = (!isExternal ? "/" : "") + url.cached_url;

  return (
    <Component href={path} target={target ?? url.target} {...props}>
      {children}
    </Component>
  );
}
