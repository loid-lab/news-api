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
  
  export default function NewsCard({
    news,
    refresh,
  }: {
    news: News;
    refresh: () => void;
  }) {
    return (
      <div className="news-card">
        <h1>{news.title}</h1>
        <p><strong>{news.author}</strong></p>
        <p><strong>Published At: {news.publishedAt}</strong></p>
        <p><strong>Source: {news.source?.name} {news.source?.id}</strong></p>
        <p><strong>{news.content}</strong></p>
        <button onClick={refresh}>Refresh</button>
      </div>
    );
  }