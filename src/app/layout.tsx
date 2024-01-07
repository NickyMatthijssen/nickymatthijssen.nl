import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";
import {
  Footer,
  GlobalsProvider,
  Navigation,
  TanstackQueryProvider,
} from "@/components";
import { getStory } from "@/services/storyblok";
import "swiper/css";
import StoryblokProvider from "@/components/StoryblokProvider";
import { storyblokComponents } from "@/storyblok";
import { PageAnimation } from "@/components/PageAnimation";

export const revalidate = 0;

const inter = Noto_Sans({ subsets: ["latin"] });

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: storyblokComponents,
});

export const metadata: Metadata = {
  title: {
    default: "Welcome",
    template: "%s | Nicky Matthijssen",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: globals } = await getStory("globals");

  return (
    <StoryblokProvider>
      <GlobalsProvider story={globals.story}>
        <TanstackQueryProvider>
          <html lang="en" className="dark">
            <body className={inter.className}>
              <PageAnimation>
                <Navigation />

                <main>{children}</main>

                <Footer />
              </PageAnimation>
            </body>

            <StoryblokBridgeLoader options={{}} />
          </html>
        </TanstackQueryProvider>
      </GlobalsProvider>
    </StoryblokProvider>
  );
}
