import axios from 'axios';

import type {Article} from '../types/Article';

const client = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v4',
  timeout: 10000,
});

type SpaceflightApiArticle = {
  id: number;
  title: string;
  summary?: string | null;
  image_url?: string | null;
  news_site?: string | null;
  published_at?: string | null;
  url?: string | null;
};

type SpaceflightResponse = {
  results: SpaceflightApiArticle[];
};

const SAMPLE_VIDEOS = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
];

export async function fetchLatestArticles(query: string): Promise<Article[]> {
  const trimmedQuery = query.trim();

  const params: Record<string, string | number> = {
    limit: trimmedQuery.length > 0 ? 100 : 20,
  };
  
  if (trimmedQuery.length > 0) {
    params.search = trimmedQuery;
  }

  const response = await client.get<SpaceflightResponse>('/articles/', {params});
  const rawResults = response.data.results;

  // Mapeamos primero para tener el objeto final
  const allArticles = rawResults.map(a => {
    const shouldDropImage = a.id % 5 === 0;
    const shouldHaveVideo = a.id % 7 === 0;

    return {
      id: a.id,
      title: a.title,
      summary: a.summary,
      imageUrl: shouldDropImage ? null : a.image_url ?? null,
      newsSite: a.news_site ?? null,
      publishedAt: a.published_at ?? null,
      url: a.url ?? null,
      // Video de ejemplo para algunas noticias
      videoUrl: shouldHaveVideo
        ? SAMPLE_VIDEOS[Math.floor(Math.random() * SAMPLE_VIDEOS.length)]
        : null,
    } satisfies Article;
  });

  if (trimmedQuery.length === 0) {
    return allArticles.slice(0, 20);
  }

  // Filtro estricto: todas las palabras deben estar en el título
  const queryWords = trimmedQuery.toLowerCase().split(/\s+/).filter(w => w.length > 0);
  
  const filtered = allArticles.filter(article => {
    const title = article.title.toLowerCase();
    const matchesAll = queryWords.every(word => title.includes(word));
    return matchesAll;
  });
  
  return filtered.slice(0, 20);
}
