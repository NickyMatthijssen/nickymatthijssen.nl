import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";
import { GlobalsProvider, TanstackQueryProvider } from "@/components";
import { getStory } from "@/services/storyblok";
import "swiper/css";
import StoryblokProvider from "@/components/StoryblokProvider";
import { storyblokComponents } from "@/storyblok";
import { draftMode } from "next/headers";

const inter = Noto_Sans({ subsets: ["latin"] });

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components: storyblokComponents,
});

export const metadata: Metadata = {
  title: {
    default: "Welcome",
    template: "%s | Nicky Matthijssen",
  },
  metadataBase: new URL("https://a.storyblok.com"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = draftMode();

  const { data: globals } = await getStory("globals");

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
