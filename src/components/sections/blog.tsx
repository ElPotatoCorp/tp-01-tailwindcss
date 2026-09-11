import type { FC } from "react";
import { BLOG_ARTICLES } from "../../data/blog.data";
import { Blog as BlogComponent } from "../blog";
import { FeaturedArticle } from "../featured-article";
import { Heading } from "../heading";

export const Blog: FC = function () {
  return (
    <div className="flex flex-col gap-6 w-[72%] my-section">
      <Heading as="h2" size="lg">Nos dernières Astuces</Heading>

      <div className="flex flex-row gap-6">
        <BlogComponent blog={BLOG_ARTICLES[0]} />
        <div className="flex flex-col justify-between">
          {BLOG_ARTICLES.map((blog, idx) => idx != 0 ? <FeaturedArticle article={blog} /> : null)}
        </div>
      </div>
    </div>
  );
};