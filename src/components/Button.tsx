import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const button = cva(
  "rounded-md text-sm font-bold text-theme-white py-2.5 px-4 disabled:opacity-60 disabled:point-events-none",
  {
    variants: {
      variant: {
        primary: ["bg-gradient-linear"],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type ButtonProps<T> = VariantProps<typeof button> &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
  React.AriaAttributes & {
    as?: ((props: any) => React.ReactElement) | string;
  };

export function Button<T>({
  children,
  as: Component = "button",
  variant,
  className,
  ...props
}: ButtonProps<T>) {
  return (
    <Component className={button({ variant, className })} {...props}>
      {children}
    </Component>
  );
}
