import type { FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

type Props = VariantProps<typeof heading> & {
  as: "h1" | "h2" | "h3" | "span";
  children?: ReactNode;
};

const heading = tv({
  variants: {
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      white: 'text-white',
      black: 'text-black',
    },
    size: {
      display: 'text-[64px] md:text-[96px]',
      lg: 'text-[32px] md:text-[48px]',
      md: 'text-[16px] md:text-[30px]',
      sm: 'text-[8px] md:text-[20px] font-semibold',
    },
    weight: {
      bold: 'font-bold',
      semi: 'font-semibold',
      medium: 'font-medium',
      normal: 'font-normal',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'display',
    weight: 'bold',
  },
});

export const Heading: FC<Props> = function (props: Props) {
  const Comp = props.as;
  return (
    <Comp {...props} className={heading(props)} />
  );
};