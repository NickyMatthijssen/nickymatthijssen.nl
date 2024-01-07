import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const text = cva("", {
  variants: {
    color: {
      default: "text-theme-500",
      light: "text-theme-white",
      gradient: ["bg-gradient-linear bg-clip-text text-transparent"],
    },
    size: {
      "3xs": "text-3xs",
      "2xs": "text-2xs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
  },
});

type TextProps = VariantProps<typeof text> &
  React.PropsWithChildren & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "dt" | "dd";
    className?: string;
  };

export const Text = React.forwardRef(
  (
    {
      children,
      as: Component = "p",
      color,
      size,
      weight,
      className,
    }: TextProps,
    ref: any
  ) => (
    <Component className={text({ color, size, weight, className })} ref={ref}>
      {children}
    </Component>
  )
);
Text.displayName = "Text";
