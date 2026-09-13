import type { FC } from "react";
import type { BlogData } from "../../data/blog.data";

type Props = {
  article: BlogData;
};

export const Article: FC<Props> = function ({ article }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 w-full">
      <img
        src={article.cover}
        alt={article.title}
        className="w-full aspect-video rounded-3xl object-cover md:w-40 md:max-w-40 md:aspect-square md:shrink-0"
      />
      <div className="flex flex-col justify-center gap-1 min-w-0">
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