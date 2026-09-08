import type { FC } from "react";

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
          <div className="flex flex-col text-primary">
            <span className="text-xl uppercase">BIENVENUE AUX</span>
            <span className="text-8xl font-black uppercase">AÇORES</span>
            <span className="font-medium">Joyau de verdure perdu dans l'Atlantique</span>
          </div>
          <button className="self-start text-emerald-700 bg-white rounded-xl px-8 py-3 text-center font-semibold">
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
};