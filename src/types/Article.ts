export type Article = {
  id: number;
  title: string;
  summary?: string | null;
  imageUrl?: string | null;
  newsSite?: string | null;
  publishedAt?: string | null;
  url?: string | null;
  /**
   * URL de video reproducible por react-native-video.
   */
  videoUrl?: string | null;
};
