import type { FC } from "react";
import { BENEFITS } from "../../data/benefits.data";
import { Benefit } from "../benefit";

export const Benefits: FC = function () {
  return (
    <div className="flex flex-col gap-8 my-section">
      <div className="flex flex-col gap-2 text-center">
        <span className="text-4xl font-semibold">Un service d'excellence</span>
        <span>Accédez à une large gamme de services compris dans votre séjour</span>
      </div>

      <div className="flex flex-row justify-evenly">
        {BENEFITS.map((benefit, idx) => <Benefit key={idx} benefit={benefit} />)}
      </div>
    </div>
  );
};