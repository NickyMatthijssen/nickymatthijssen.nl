import { VariantProps, cva } from "class-variance-authority";

const card = cva(
  "rounded-2xl border border-theme-800 pt-[30px] px-[24px] pb-[50px]",
  {
    variants: {
      variant: {
        primary: "bg-theme-850",
        transparent: "bg-transparent",
      },
      size: {
        auto: "h-auto",
        fill: "h-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "auto",
    },
  }
);

type CardProps = React.PropsWithChildren &
  VariantProps<typeof card> & {
    className?: string;
  };

export function Card({ children, variant, size, className }: CardProps) {
  return <div className={card({ variant, size, className })}>{children}</div>;
}
