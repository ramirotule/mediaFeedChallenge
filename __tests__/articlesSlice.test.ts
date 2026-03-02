import {configureStore} from '@reduxjs/toolkit';

import {articlesReducer, loadArticles, setQuery} from '../src/store/slices/articlesSlice';
import {favoritesReducer} from '../src/store/slices/favoritesSlice';

import type {Article} from '../src/types/Article';

jest.mock('../src/api/newsApi', () => ({
  fetchLatestArticles: jest.fn(),
}));

const {fetchLatestArticles} = jest.requireMock('../src/api/newsApi') as {
  fetchLatestArticles: jest.Mock;
};

describe('articlesSlice', () => {
  it('debería cargar artículos en base a la query', async () => {
    const store = configureStore({
      reducer: {articles: articlesReducer, favorites: favoritesReducer},
    });

    const mockItems: Article[] = [
      {
        id: 1,
        title: 'Hello',
        summary: 'World',
        imageUrl: null,
        newsSite: 'X',
        publishedAt: null,
        url: null,
        videoUrl: null,
      },
    ];

    fetchLatestArticles.mockResolvedValueOnce(mockItems);

    store.dispatch(setQuery('mars'));
    await store.dispatch(loadArticles() as any);

    expect(fetchLatestArticles).toHaveBeenCalledWith('mars');
    expect(store.getState().articles.items).toHaveLength(1);
  });

  it('fulfilled reemplaza los items con el payload recibido', async () => {
    const store = configureStore({
      reducer: {articles: articlesReducer, favorites: favoritesReducer},
    });

    const mockItems: Article[] = [
      {
        id: 1,
        title: 'Hello',
        summary: 'World',
        imageUrl: null,
        newsSite: 'X',
        publishedAt: null,
        url: null,
        videoUrl: null,
      },
    ];

    fetchLatestArticles.mockResolvedValue(mockItems);

    await store.dispatch(loadArticles() as any);
    await store.dispatch(loadArticles() as any);

    expect(store.getState().articles.items).toHaveLength(1);
  });
});
