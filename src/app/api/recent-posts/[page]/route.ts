import { getStories } from "@/services/storyblok";
import { SbProject } from "@/storyblok/content/Project";
import { ISbStoryData, apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

const limit = 6;

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export async function generateStaticParams() {
  // Fetch one project to get the total amount of projects.
  const { total } = await getStories({
    per_page: 1,
    content_type: "project",
  });

  // Create an empty array the size of the amount of pages and map over it to
  // statically generate the paths.
  const pages = Math.ceil(total / limit);
  return Array.from(Array(pages)).map((_, index) => ({
    page: (index + 1).toString(),
  }));
}

export type RecentPostsResponse = {
  projects: ISbStoryData<SbProject>[];
  meta: {
    current_page: number;
    next_page?: number;
    previous_page?: number;
    total: number;
  };
};

export async function GET(
  _: NextRequest,
  { params }: { params: { page: number } }
) {
  const page = Number(params.page);

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
