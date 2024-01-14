"use client";

import { useGlobals } from "@/components/GlobalsProvider";
import Link from "next/link";
import { StoryblokComponent } from "@storyblok/react/rsc";
import { StoryblokImage } from "@/components/StoryblokImage";
import { NavigationProvider } from "@/components/NavigationProvider";

export function Navigation() {
  const { navigation } = useGlobals();

  return (
    <NavigationProvider>
      <nav className="py-3">
        <div className="container flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <StoryblokImage
                image={navigation.logo}
                width={300}
                height={46}
                className="w-[300] h-[46px] object-contain object-left"
              />
            </Link>
          </div>

          <div className="flex-shrink-0 flex">
            {navigation.links.map((blok) => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
          </div>
        </div>
      </nav>
    </NavigationProvider>
  );
}
