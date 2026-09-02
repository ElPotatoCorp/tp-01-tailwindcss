import type { FC, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const chip = tv({
  base: 'flex flex-row px-3 py-1 items-center gap-1 font-semibold uppercase',
  variants: {
    textSize: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    textColor: {
      none: '',
      white: 'text-white',
      black: 'text-black',
      primary: 'text-primary',
      secondary: 'text-secondary',
    },
    bgColor: {
      transparent: 'transparent',
      white: 'bg-white',
      black: 'bg-black',
      primary: 'bg-primary',
      secondary: 'bg-secondary',
    },
    bgEffect: {
      none: '',
      blurryglass: 'bg-white/30 backdrop-blur-md',
    },
    shape: {
      pill: 'rounded-full',
      rounded: 'rounded',
    },
  },
  defaultVariants: {
    textSize: 'xs',
    textColor: 'white',
    bgColor: 'white',
    bgEffect: 'blurryglass',
    shape: 'pill',
  },
})

type ChipVariants = VariantProps<typeof chip>;

type Props = {
  children?: ReactNode;
  variants?: ChipVariants;
};

export const Chip: FC<Props> = function (props: Props) {
  const style = chip(props.variants);

  return (
    <div className={style}>
      {props.children}
    </div>
  );
};
