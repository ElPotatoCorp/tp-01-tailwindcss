import * as Icons from "@phosphor-icons/react";
import type { FC } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import type { BenefitData } from "../data/benefits.data";

const benefit = tv({
  slots: {
    container: "flex flex-col items-center gap-2 rounded-2xl text-center",
    icon: "rounded-2xl bg-gray-200 p-2",
    label: "font-bold leading-tight",
    description: "font-medium leading-relaxed text-black-300",
  },

  variants: {
    containerColor: {
      none: {
        container: "",
      },
      white: {
        container: "bg-white",
      },
      primary: {
        container: "bg-primary",
      },
      secondary: {
        container: "bg-secondary",
      },
    },

    size: {
      xs: {
        container: "max-w-40 px-4 py-4",
        icon: "h-8 w-8",
        label: "text-base",
        description: "text-xs",
      },

      sm: {
        container: "max-w-55 px-6 py-6",
        icon: "h-10 w-10",
        label: "text-lg",
        description: "text-sm",
      },

      md: {
        container: "max-w-65 px-8 py-8",
        icon: "h-12 w-12",
        label: "text-xl",
        description: "text-base",
      },

      lg: {
        container: "max-w-75 px-10 py-10",
        icon: "h-14 w-14",
        label: "text-2xl",
        description: "text-lg",
      },

      xl: {
        container: "max-w-90 px-12 py-12",
        icon: "h-16 w-16",
        label: "text-3xl",
        description: "text-xl",
      },
    },

    iconColor: {
      none: {
        label: "",
      },
      primary: {
        icon: "text-primary",
      },
      secondary: {
        icon: "text-secondary",
      },
      white: {
        icon: "bg-primary text-white",
      },
    },

    labelColor: {
      none: {
        label: "",
      },
      primary: {
        label: "text-primary",
      },
      secondary: {
        label: "text-secondary",
      },
      white: {
        label: "text-white",
      },
    },

    descriptionColor: {
      none: {
        description: "",
      },
      primary: {
        description: "text-primary",
      },
      secondary: {
        description: "text-secondary",
      },
      white: {
        description: "text-white",
      },
    },
  },

  defaultVariants: {
    containerColor: "none",
    size: "md",
    iconColor: "primary",
    labelColor: "primary",
    descriptionColor: "none",
  },
});

type BenefitVariants = VariantProps<typeof benefit>;

type Props = {
  benefit: BenefitData;
  variants?: BenefitVariants;
};

export const Benefit: FC<Props> = function (props: Props) {

  const styles = benefit(props.variants);

  const Icon = Icons[props.benefit.icon] as Icons.Icon;

  return (
    <div className={styles.container()}>
      <Icon size={50} className={styles.icon()} />
      <p className={styles.label()}>{props.benefit.label}</p>
      <p className={styles.description()}>{props.benefit.description}</p>
    </div>
  );
}