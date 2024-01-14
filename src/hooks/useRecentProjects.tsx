"use client";

import { RecentPostsResponse } from "@/app/api/recent-posts/[page]/route";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export function useRecentProjects() {
  const {
    isFetching,
    isFetchingNextPage,
    isError,
    data,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["recent-projects"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetch(`/api/recent-posts/${pageParam}`);

      return (await response.json()) as RecentPostsResponse;
    },
    getNextPageParam: (lastPage) => lastPage.meta.next_page,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const groups = useMemo(
    () => data?.pages.map(({ projects }) => [...projects]),
    [data]
  );

  return {
    groups,
    isFetching,
    isFetchingNextPage,
    isError,
    hasNextPage,
    next: fetchNextPage,
  };
}
