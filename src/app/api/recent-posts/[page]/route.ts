import { getStories } from "@/services/storyblok";
import { SbProject } from "@/storyblok/content/Project";
import { ISbStoryData, apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export type RecentPostsResponse = {
  projects: ISbStoryData<SbProject>[];
  meta: {
    page: number;
    next_page?: number;
    previous_page?: number;
    total: number;
  };
};

export async function GET(
  _: NextRequest,
  { params }: { params: { page: number } }
) {
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin],
  });

  const page = Number(params.page);
  const limit = 6;

  if (isNaN(page)) {
    return NextResponse.json(
      {
        message: "Page does not exist.",
      },
      { status: 404 }
    );
  }

  const {
    data: { stories: projects },
    total,
  } = await getStories({
    per_page: limit,
    page,
    sort_by: "created_at:desc",
    content_type: "project",
  });

  return NextResponse.json({
    projects,
    meta: {
      current_page: page,
      next_page: Math.ceil(total / limit) > page ? page + 1 : undefined,
      previous_page: page > 1 ? page - 1 : undefined,
      total,
    },
  });
}
