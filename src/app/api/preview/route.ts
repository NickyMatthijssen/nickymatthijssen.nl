import { NextResponse } from "next/server";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getStory } from "@/services/storyblok";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN || !slug) {
    return new Response("Invalid token", { status: 401 });
  }

  draftMode().enable();

  return redirect("/" + slug);
}
