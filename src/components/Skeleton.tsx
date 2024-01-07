import { cx } from "class-variance-authority";

type SkeletonProps = {
  height?: string;
  width?: string;
  className?: string;
};

export const Skeleton = ({
  height = "16px",
  width = "100px",
  className,
}: SkeletonProps) => (
  <div
    className={cx(className, "bg-neutral-500 rounded-lg animate-pulse")}
    style={{ height, width }}
  />
);
