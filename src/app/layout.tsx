import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";
import { getStory } from "@/services/storyblok";
import "swiper/css";
import StoryblokProvider from "@/components/StoryblokProvider";
import { storyblokComponents } from "@/storyblok";
import { GlobalsProvider } from "@/components/GlobalsProvider";
import { TanstackQueryProvider } from "@/components/TanstackQueryProvider";

const inter = Noto_Sans({ subsets: ["latin"] });

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: storyblokComponents,
});

export const metadata: Metadata = {
  title: {
    default: "Welcome | Nicky Matthijssen",
    template: "%s | Nicky Matthijssen",
  },
  metadataBase: new URL("https://a.storyblok.com"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: globals } = await getStory("settings/globals");

  return (
    <StoryblokProvider>
      <GlobalsProvider story={globals.story}>
        <TanstackQueryProvider>
          <html lang="en" className="dark">
            <body className={inter.className}>{children}</body>

            <StoryblokBridgeLoader options={{}} />
          </html>
        </TanstackQueryProvider>
      </GlobalsProvider>
    </StoryblokProvider>
  );
}
