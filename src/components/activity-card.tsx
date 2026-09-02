import { StarIcon } from "@phosphor-icons/react";
import type { FC } from "react";
import type { ActivityData } from "../data/activities.data";
import { Chip } from "./chip";

type Props = {
  activity: ActivityData;
};

export const ActivityCard: FC<Props> = function ({ activity }) {
  return (
    <div className="flex w-75 flex-col overflow-hidden rounded-2xl bg-white">
      <div className="relative aspect-card w-full">
        <img
          src={activity.cover}
          alt={activity.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-black/20" />

        <div className="absolute inset-x-3 top-3 flex items-center justify-between">
          <Chip>{activity.duration}</Chip>
          <Chip>
            <StarIcon weight="fill" />
            {activity.rating} ({activity.reviews})
          </Chip>
        </div>

        <div className="absolute inset-x-3 bottom-1.5 flex flex-col gap-2 text-white">
          <span className="text-sm font-medium">
            {activity.type === "experience" ? "Expérience" : "Randonnée"}
          </span>
          <h3 className="text-lg font-bold">{activity.title}</h3>
          <div className="flex flex-wrap gap-2">
            {activity.tags.map((tag) => (
              <Chip key={tag}>#{tag}</Chip>
            ))}
          </div>

          <button className="text-emerald-700 bg-white rounded-xl mx-5 my-2 py-2 text-center font-semibold">
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
};