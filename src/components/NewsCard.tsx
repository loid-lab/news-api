import { useState, useEffect } from "react";

type News = {
  title: string;
  author: string;
  publishedAt: string;
  content: string;
  url: string;
  source?: {
    name?: string;
    id?: string;
  };
};

export default function NewsCard() {
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      );
      if (!res.ok) throw new Error(`Error fetching data ${res.status}`);
      const data = await res.json();
      const randomIndex = Math.floor(Math.random() * data.articles.length);
      setNews(data.articles[randomIndex]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="news-card">
      <h1>📰 News Highlight</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {news && (
        <div className="news">
          <h2>{news.title}</h2>
          <p><strong>Source:</strong> {news.source?.name ?? "Unknown"}</p>
          <p><strong>Author:</strong> {news.author ?? "Unknown"}</p>
          <p><strong>Published:</strong> {new Date(news.publishedAt).toLocaleString()}</p>
          <p>{news.content ?? "No content available."}</p>
          {news.url && (
            <p>
              <a href={news.url} target="_blank" rel="noopener noreferrer">
                🔗 Read full article
              </a>
            </p>
          )}
        </div>
      )}
      <button onClick={fetchNews} disabled={loading}>
        🔄 Show Another Article
      </button>
    </div>
  );
}