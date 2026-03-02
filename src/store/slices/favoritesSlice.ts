import {createAsyncThunk, createSlice, type PayloadAction} from '@reduxjs/toolkit';

import type {RootState} from '../store';
import {loadFavoriteKeys, saveFavoriteKeys} from '../../storage/favoritesStorage';

type FavoritesState = {
  keys: string[];
  hydrated: boolean;
};

const initialState: FavoritesState = {
  keys: [],
  hydrated: false,
};

export const hydrateFavorites = createAsyncThunk('favorites/hydrate', async () => {
  return await loadFavoriteKeys();
});

export const persistFavorites = createAsyncThunk(
  'favorites/persist',
  async (_, api) => {
    const state = api.getState() as RootState;
    await saveFavoriteKeys(state.favorites.keys);
  },
);

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavoriteKey(state, action: PayloadAction<string>) {
      const key = action.payload;
      const idx = state.keys.indexOf(key);
      if (idx === -1) {
        state.keys.push(key);
      } else {
        state.keys.splice(idx, 1);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(hydrateFavorites.fulfilled, (state, action) => {
        state.keys = action.payload;
        state.hydrated = true;
      })
      .addCase(hydrateFavorites.rejected, state => {
        state.hydrated = true;
      });
  },
});

export const {toggleFavoriteKey} = slice.actions;
export const favoritesReducer = slice.reducer;

export const selectFavoriteKeys = (state: RootState) => state.favorites.keys;
export const selectIsFavorite = (key: string) => (state: RootState) =>
  state.favorites.keys.includes(key);
