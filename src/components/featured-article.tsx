import type { FC } from "react";
import type { BlogData } from "../data/blog.data";

type Props = {
  article: BlogData;
};

export const FeaturedArticle: FC<Props> = function ({ article }) {
  return (
    <div className="flex flex-row gap-3 w-150">
      <img className="max-w-40 w-full max-h-40 h-full rounded-3xl" src={article.cover} />
      <div className="flex flex-col justify-center w-75">
        <p className="text-sm text-secondary font-medium">
          {article.date.toLocaleDateString('fr-fr')}
        </p>
        <p className="text-primary text-lg font-bold">
          {article.title}
        </p>
        <p className="text-secondary text-xs font-medium">
          {article.excerpt}
        </p>
      </div>
    </div>
  );
};