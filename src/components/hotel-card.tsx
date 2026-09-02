import { StarIcon } from "@phosphor-icons/react";
import type { FC } from "react";
import type { HotelData } from "../data/hotels.data";

type Props = {
  hotel: HotelData;
};

export const HotelCard: FC<Props> = function ({ hotel }) {
  return (
    <div className="flex w-75 flex-col overflow-hidden rounded-2xl bg-white">
      <div className="relative aspect-card w-full">
        <img
          src={hotel.cover}
          alt={hotel.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

        <div className="absolute inset-x-3 bottom-3 flex flex-col text-white">
          <span className="text-sm font-medium">
            <StarIcon weight="fill" />
            {hotel.rating} ({hotel.reviews})
          </span>

          <h3 className="text-xl font-bold">{hotel.title}</h3>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col font-bold">
              <p className="text-xs">À partir de</p>
              <p className="text-xl">{hotel.price}€<span className="text-xs">/nuit</span></p>
            </div>

            <div className="w-7 h-7 bg-white rounded-full text-center content-center text-primary font-medium text-xl">
              &gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};