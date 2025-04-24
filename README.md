# 📰 News API App

A simple React + TypeScript application that fetches news articles from the [NewsAPI](https://newsapi.org/) and displays them in a clean UI. Includes a refresh button to load new articles on demand.

## 🚀 Features
- Fetches latest top headlines from NewsAPI
- Displays article title, author, publication date, source, and content
- Allows refreshing to get a new random article
- Built using React + TypeScript

## 🛠️ Tech Stack
- React
- TypeScript
- Vite (or CRA if you're using that)

## 📁 Project Structure
```
src/
├── components/
│   └── NewsCard.tsx   # Displays a single article
├── App.tsx            # Main component that fetches data and renders NewsCard
├── main.tsx           # Entry point
```

## 🔧 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/loid-lab/news-api.git
cd news-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add your API key
Create a `.env` file in the root directory and add your NewsAPI key:
```
NEWS_API_KEY=your_api_key_here
```

Then, in `App.tsx`, make sure you're using:
```ts
const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.NEWS_API_KEY}`);
```

### 4. Run the development server
```bash
npm run dev
```

## 🔁 Future Improvements
- Display multiple articles in a list
- Add pagination
- Improve loading UI
- Style with TailwindCSS or styled-components

## 📄 License
[MIT](LICENSE)

---
Made with ❤️ by Fabio

