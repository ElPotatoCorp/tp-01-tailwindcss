import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { tv, type VariantProps } from "tailwind-variants";

type Props = VariantProps<typeof button> & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const button = tv({
  base: 'font-semibold tracking-wide disabled:opacity-50 cursor-pointer active:scale-105 hover:scale-110 transition-all duration-300',
  variants: {
    color: {
      primary: 'primary-text',
      white: 'bg-white',
      secondary: 'bg-secondary',
    },
    size: {
      sm: 'py-3 px-6 rounded-xl',
      md: 'lg: py-4 px-8 rounded-2xl text-lg',
    },
    shape: {
      pill: 'rounded-full!',
      rounded: '',
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    shape: 'rounded'
  }
});

export const Button: FC<Props> = function (props: Props) {
  return (
    <button {...props} className={button(props)} />
  );
};