import { type FC } from "react";
import { HOTELS } from "../../data/hotels.data";
import { Carrousel } from "../carrousel";
import { Heading } from "../heading";
import { HotelCard } from "../hotel-card";

export const Hotels: FC = function () {
  return (
    <div className="flex flex-col gap-6 my-section">
      <div className="text-center">
        <Heading as="h2" size="lg">Établissez votre camp de base</Heading>
      </div>

      <Carrousel items={HOTELS} render={hotel => <HotelCard hotel={hotel} />} />
    </div>
  );
};