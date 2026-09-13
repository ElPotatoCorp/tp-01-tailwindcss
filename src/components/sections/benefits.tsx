import type { FC } from "react";
import { BENEFITS } from "../../data/benefits.data";
import { Benefit } from "../benefit";
import { Heading } from "../heading";

export const Benefits: FC = function () {
  return (
    <div className="flex flex-col gap-8 my-section">
      <div className="flex flex-col gap-2 text-center">
        <Heading as="h2" size="lg">Un service d'excellence</Heading>
        <Heading as="span" size="sm" color="secondary" weight="medium">Accédez à une large gamme de services compris dans votre séjour</Heading>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((benefit, idx) => <Benefit key={idx} benefit={benefit} />)}
      </div>
    </div>
  );
};