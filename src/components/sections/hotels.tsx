import { type FC } from "react";
import { HOTELS } from "../../data/hotels.data";
import { Carrousel } from "../carrousel";
import { HotelCard } from "../hotel-card";

export const Hotels: FC = function () {
  return (
    <div className="flex flex-col gap-6">
      <span className="self-center text-5xl font-semibold">Établissez votre camp de base</span>

      <Carrousel items={HOTELS} render={hotel => <HotelCard hotel={hotel} />} />
    </div>
  );
};