import * as Icons from "@phosphor-icons/react";
import type { FC } from "react";
import type { BenefitData } from "../data/benefits.data";

type Props = {
  benefit: BenefitData
}

export const Benefit: FC<Props> = function (props: Props) {
  const Icon = Icons[props.benefit.icon] as Icons.Icon;

  return (
    <div className="flex flex-col items-center gap-1 max-w-75">
      <Icon size={50} color="oklch(45.3% 0.124 130.933)" className="bg-gray-200 p-2 rounded-2xl" />
      <p className="font-bold text-lime-800">{props.benefit.label}</p>
      <p className="text-center font-medium text-gray-300">{props.benefit.description}</p>
    </div>
  );
}