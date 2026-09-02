import { ActivityCard } from "./components/activity-card";
import { Benefit } from "./components/benefit";
import { Blog } from "./components/blog";
import { Button } from "./components/button";
import { FeaturedArticle } from "./components/featured-article";
import { Heading } from "./components/heading";
import { HotelCard } from "./components/hotel-card";
import { ACTIVITIES } from "./data/activities.data";
import { BENEFITS } from "./data/benefits.data";
import { BLOG_ARTICLES } from "./data/blog.data";
import { HOTELS } from "./data/hotels.data";

function App() {
  return (
    <div className="m-5 flex flex-col gap-5">
      <div>
        <Button>Primary</Button>
        <Button color="secondary" size="md">Secondary</Button>
        <Button color="white" size="md" shape="pill">White</Button>
      </div>
      <div className="flex flex-col">
        <Heading as="h2">Heading Display</Heading>
        <Heading as="h2" size="lg">Heading LG</Heading>
        <Heading as="h2" size="md">Heading MD</Heading>
        <Heading as="h2" size="sm">Heading SM</Heading>
      </div>
      <div className="flex flex-col gap-5">
        {BENEFITS.map((benefit, idx) => <Benefit key={idx} benefit={benefit} />)}
      </div>
      <div className="flex flex-col gap-5">
        {ACTIVITIES.map(activity => <ActivityCard key={activity.id} activity={activity} />)}
      </div>
      <div className="flex flex-col gap-5">
        {HOTELS.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />)}
      </div>
      <div className="flex flex-col gap-5">
        {BLOG_ARTICLES.map(blog => <Blog key={blog.id} blog={blog} />)}
      </div>
      <div className="flex flex-col gap-5">
        {BLOG_ARTICLES.map(article => <FeaturedArticle key={article.id} article={article} />)}
      </div>
    </div>
  );
}

export default App
