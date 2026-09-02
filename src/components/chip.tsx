import type { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

export const Chip: FC<Props> = function (props: Props) {
  return (
    <span className={props.className ? props.className : "text-white bg-white/30 backdrop-blur-md rounded-full px-3 py-1 text-xs font-semibold uppercase"}>
      {props.children}
    </span>
  );
};