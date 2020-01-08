import axios from "axios";

const API_KEY = "7977ad532dd84fe5ac3ba68ae0707e7b";

export interface News {
  id: number;
  source: string;
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  content?: string;
};

export async function loadNews() {
  const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`;
  const { data } = await axios.get(url);

  let newsId = 0;
  const newsList: News[] = data.articles.map((article: any) => {
    return {
      id: newsId++,
      source: article.source.name,
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.urlToImage,
      publishedAt: article.publishedAt
    };
  });
  return newsList;
}