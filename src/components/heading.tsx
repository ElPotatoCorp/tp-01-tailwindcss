import type { FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

type Props = VariantProps<typeof heading> & {
  as: "h1" | "h2" | "h3";
  children?: ReactNode;
};

const heading = tv({
  base: 'font-bold',
  variants: {
    color: {
      primary: 'text-secondary',
    },
    size: {
      display: 'text-[96px]',
      lg: 'text-[48px]',
      md: 'text-[30px]',
      sm: 'text-[20px] font-semibold',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'display',
  },
});

export const Heading: FC<Props> = function (props: Props) {
  const Comp = props.as;
  return (
    <Comp {...props} className={heading(props)} />
  );
};