import type { FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

type Props = VariantProps<typeof heading> & {
  children?: ReactNode
};

const heading = tv({
  base: 'font-bold',
  variants: {
    color: {
      primary: 'secondary-text',
    },
    size: {
      display: 'text-[96px]',
      lg: 'text-[48px]',
      md: 'text-[30px]',
      sm: 'text-[20px] font-semibold',
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'display',
  }
});

export const Heading: FC<Props> = function (props: Props) {
  return (
    <h1 {...props} className={heading(props)} />
  );
};