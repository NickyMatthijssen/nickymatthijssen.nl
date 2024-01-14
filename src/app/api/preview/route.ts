import { NextResponse } from "next/server";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getStory } from "@/services/storyblok";

export async function GET(request: Request) {
  if (process.env.NEXT_OUTPUT_MODE === "export") {
    return new Response("", { status: 404 });
  }

  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  // Check the secret and slug parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== process.env.STORYBLOK_PREVIEW_SECRET || !slug) {
    return new Response("Invalid token", { status: 401 });
  }

  draftMode().enable();

  return redirect("/" + slug);
}
