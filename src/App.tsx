import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

type News = {
  title: string;
  author: string;
  publishedAt: string;
  content: string;
  source?: {
    name?: string;
    id?: string;
  };
};

export default function App() {
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function getAsync() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
          import.meta.env.VITE_NEWS_API_KEY
        }`
      );
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();
      const randomIndex = Math.floor(Math.random() * data.articles.length);
      setNews(data.articles[randomIndex]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAsync();
  }, []);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="app">
      <div className="app-container">
        {news ? <NewsCard news={news} refresh={getAsync} /> : <p>No news to display</p>}
      </div>
    </div>
  );
}