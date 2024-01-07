"use client";

import { ProjectCard, ProjectCardSkeleton, Skeleton } from "@/components";
import { Text } from "@/components/Text";
import { useRecentProjects } from "@/hooks";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { ClipLoader } from "react-spinners";
import { MotionText } from "@/components/MotionComponents";

type LatestProjectsSectionType = {
  blok: SbBlokData & {
    title: string;
    description: string;
  };
};

export function LatestProjectsSection({ blok }: LatestProjectsSectionType) {
  const { groups, isFetching, isFetchingNextPage, hasNextPage, next } =
    useRecentProjects();

  return (
    <section className="container my-32" {...storyblokEditable(blok)}>
      <div className="text-center mb-[50px]">
        <MotionText
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          size="4xl"
          weight="bold"
          color="gradient"
        >
          {blok.title}
        </MotionText>

        <MotionText
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          size="xl"
          weight="normal"
          color="default"
        >
          {blok.description}
        </MotionText>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {groups?.map((projects, group) => (
          <React.Fragment key={group}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
              >
                <ProjectCard
                  title={project.content.title}
                  excerpt={project.content.excerpt}
                  href={`/${project.full_slug}`}
                  image={project.content.gallery[0]}
                />
              </motion.div>
            ))}
          </React.Fragment>
        ))}

        {isFetching && (
          <>
            {Array.from(Array(6)).map((_, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={index}
              >
                <ProjectCardSkeleton />
              </motion.div>
            ))}
          </>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        {isFetching && !isFetchingNextPage ? (
          <Skeleton className="mx-auto" width="92px" height="38px" />
        ) : (
          <>
            {hasNextPage ? (
              <Button
                onClick={() => next()}
                disabled={isFetchingNextPage}
                className="mx-auto flex items-center space-x-2"
              >
                {isFetching && (
                  <ClipLoader color="var(--colors-theme-white)" size={14} />
                )}
                <span>See more</span>
              </Button>
            ) : (
              <Button disabled>No more pages available</Button>
            )}
          </>
        )}
      </motion.div>
    </section>
  );
}
