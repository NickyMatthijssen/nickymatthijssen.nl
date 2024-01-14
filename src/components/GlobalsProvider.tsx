"use client";

import { ISbStoryData, SbBlokData } from "@storyblok/react";
import { createContext, useContext } from "react";
import { NavItem } from "@/components/NavItem";
import { SbLink } from "@/components/StoryblokLink";
import { StoryblokImage } from "@/components/StoryblokImage";
import { SbContactInformation } from "@/storyblok/components/ContactInformation";
import { SocialType } from "@/storyblok/components/Social";
import { SbNavigationLink } from "@/storyblok/components/NavigationLink";

type Navigation = {
  logo: StoryblokImage;
  links: SbNavigationLink[];
};

type Social = {
  _uid: string;
  url: SbLink;
  platform: SocialType;
};

type Footer = {
  logo: StoryblokImage;
  description: string;
  address: string;
  copyright: string;
  navigation: Array<NavItem & SbBlokData>;
  contact_information: SbContactInformation[];
};

type Globals = {
  navigation: Navigation;
  socials: Social[];
  footer: Footer;
};

type GlobalsProviderProps = React.PropsWithChildren & {
  story: ISbStoryData<{
    [index: string]: any;
  }>;
};

export const globalsContext = createContext<Globals>({} as Globals);

export const useGlobals = () => useContext(globalsContext);

export function GlobalsProvider({
  children,
  story,
}: GlobalsProviderProps): React.ReactElement {
  const globals: Globals = {
    navigation: story.content.navigation[0] ?? undefined,
    socials: story.content.socials ?? [],
    footer: story.content.footer[0] ?? undefined,
  };

  return (
    <globalsContext.Provider value={globals}>
      {children}
    </globalsContext.Provider>
  );
}
