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

const SAMPLE_VIDEO_URL =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export async function fetchLatestArticles(query: string): Promise<Article[]> {
  // API pública sin auth. Cuando query es vacío, devuelve los últimos artículos.
  const params: Record<string, string | number> = {
    limit: 20,
  };
  if (query.trim().length > 0) {
    params.search = query;
  }

  const response = await client.get<SpaceflightResponse>('/articles/', {params});

  return response.data.results.map(a => {
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
      videoUrl: shouldHaveVideo ? SAMPLE_VIDEO_URL : null,
    } satisfies Article;
  });
}
