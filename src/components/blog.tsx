import type { FC } from "react";
import type { BlogData } from "../data/blog.data";

type Props = {
  blog: BlogData;
};

export const HotelCard: FC<Props> = function ({ blog }) {
  return (
    <div className="flex w-75 flex-col overflow-hidden rounded-2xl bg-white">
      <div className="relative aspect-card w-full">
        <img
          src={blog.cover}
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

        <div className="absolute inset-x-3 bottom-3 flex flex-col text-white">
          <span className="text-sm font-medium">
            {blog.date.toDateString()}
          </span>
          <h3 className="text-xl font-bold">{blog.title}</h3>
        </div>
      </div>
    </div>
  );
};