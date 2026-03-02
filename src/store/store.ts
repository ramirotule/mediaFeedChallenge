import {configureStore} from '@reduxjs/toolkit';

import {articlesReducer} from './slices/articlesSlice';
import {favoritesReducer} from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    favorites: favoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // Deshabilitar el middleware de serialización en desarrollo para mejorar rendimiento
      serializableCheck: {
        // Solo verificar en producción o con estados pequeños
        warnAfter: 128, // Aumentar el threshold de 32ms a 128ms
      },
      // Deshabilitar completamente si sigue siendo lento:
      // serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
