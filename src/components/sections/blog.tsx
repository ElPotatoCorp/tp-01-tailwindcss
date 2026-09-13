import type { FC } from "react";
import { BLOG_ARTICLES } from "../../data/blog.data";
import { Blog as BlogComponent } from "../blog";
import { FeaturedArticle } from "../featured-article";
import { Heading } from "../heading";

export const Blog: FC = function () {
  return (
    <div className="flex flex-col gap-6 my-section">
      <Heading as="h2" size="lg">Nos dernières Astuces</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <BlogComponent blog={BLOG_ARTICLES[0]} />

        <div className="flex flex-col gap-6 h-full justify-between">
          {BLOG_ARTICLES.map((article, idx) => idx !== 0 ? <FeaturedArticle key={idx} article={article} /> : null)}
        </div>
      </div>
    </div>
  );
};