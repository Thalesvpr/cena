import React from "react";
import { useNews } from "@/hooks/useNews";
import { NewsCard } from "./NewsCard";

export const NewsSection: React.FC = () => {
  const { news } = useNews();

  return (
    <section className="space-y-4">
      {news.map((item) => (
        <NewsCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          date={item.date}
          images={item.images}
        />
      ))}
    </section>
  );
};
