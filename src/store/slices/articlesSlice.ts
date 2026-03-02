import {createAsyncThunk, createSlice, type PayloadAction} from '@reduxjs/toolkit';

import type {RootState} from '../store';
import type {Article} from '../../types/Article';
import {fetchLatestArticles} from '../../api/newsApi';

export type ArticlesState = {
  items: Article[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  query: string;
};

const initialState: ArticlesState = {
  items: [],
  status: 'idle',
  error: null,
  query: '',
};

export const loadArticles = createAsyncThunk('articles/load', async (_, api) => {
  const state = api.getState() as RootState;
  const query = state.articles.query;
  const items = await fetchLatestArticles(query);
  return items;
});

const slice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadArticles.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.concat(action.payload);
      })
      .addCase(loadArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export const {setQuery, clearError} = slice.actions;
export const articlesReducer = slice.reducer;

export const selectArticles = (state: RootState) => state.articles.items;
export const selectQuery = (state: RootState) => state.articles.query;
