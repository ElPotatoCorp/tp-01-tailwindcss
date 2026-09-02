import type { FC } from "react";
import type { BlogData } from "../data/blog.data";

type Props = {
  blog: BlogData;
};

export const Blog: FC<Props> = function ({ blog }) {
  return (
    <div className="flex w-75 flex-col overflow-hidden rounded-2xl bg-white">
      <div className="relative aspect-card w-full group">
        <img
          src={blog.cover}
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 p-8 text-xl text-justify text-transparent group-hover:text-white font-semibold bg-linear-to-t from-black/65 via-black/10 to-transparent  hover:bg-black/65 transition-colors content-center">
          {blog.excerpt}
        </div>

        <div className="absolute inset-x-3 bottom-3 flex flex-col text-white group-hover:translate-y-32 transition-transform duration-500">
          <span className="text-sm font-medium">
            {blog.date.toLocaleDateString('fr-fr')}
          </span>
          <h3 className="text-xl font-bold">{blog.title}</h3>
        </div>
      </div>
    </div>
  );
};