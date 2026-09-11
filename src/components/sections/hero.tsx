import type { FC } from "react";
import { Heading } from "../heading";

export const Hero: FC = function () {
  return (
    <div className="# mx-8 my-4 overflow-hidden rounded-2xl bg-white">
      <div className="relative aspect-video">
        <img
          src="img/cover.jpeg"
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-10 flex flex-col justify-between">
          <div className="flex flex-col text-primary leading-tight">
            <Heading as="span" size="sm" weight="normal" uppercase>Bienvenue aux</Heading>
            <Heading as="h1" uppercase>Açores</Heading>
            <Heading as="span" size="sm" weight="medium">Joyau de verdure perdu dans l'Atlantique</Heading>
          </div>
          <button className="self-start text-emerald-700 bg-white rounded-xl px-8 py-3 text-center font-semibold">
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
};