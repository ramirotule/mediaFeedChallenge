import React from 'react';
import { render } from '@testing-library/react-native';
import { FavoritesScreen } from '../src/features/favorites/screens/FavoritesScreen';
import { useAppDispatch, useAppSelector } from '../src/store/hooks';
import { describe, beforeEach, it, expect} from '@jest/globals';


jest.mock('../src/store/hooks', () => ({
    useAppDispatch: jest.fn(),
    useAppSelector: jest.fn(),
}));

jest.mock('../src/store/slices/favoritesSlice', () => ({
    hydrateFavorites: jest.fn(),
    persistFavorites: jest.fn(),
}));

describe('FavoritesScreen', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    });

    it('muestra el mensaje de "Cargando" si no está hidratado', () => {
        (useAppSelector as jest.Mock).mockImplementation(selector => {
            const state = {
                favorites: { hydrated: false, keys: [] },
                articles: { items: [] },
            };
            return selector(state);
        });

        const { getByText } = render(<FavoritesScreen navigation={{} as any} route={{} as any} />);
        expect(getByText('Cargando favoritos...')).toBeTruthy();
    });

    it('muestra el mensaje de "No tenés favoritos" si está vacío', () => {
        (useAppSelector as jest.Mock).mockImplementation(selector => {
            const state = {
                favorites: { hydrated: true, keys: [] },
                articles: { items: [] },
            };
            return selector(state);
        });

        const { getByText } = render(<FavoritesScreen navigation={{} as any} route={{} as any} />);
        expect(getByText('No tenés favoritos.')).toBeTruthy();
    });

    it('muestra la lista de favoritos si hay elementos', () => {
        (useAppSelector as jest.Mock).mockImplementation(selector => {
            const state = {
                favorites: { hydrated: true, keys: ['1'] },
                articles: { items: [{ id: 1, title: 'Fav Article', newsSite: 'NASA' }] },
            };
            return selector(state);
        });

        const { getByText } = render(<FavoritesScreen navigation={{} as any} route={{} as any} />);
        expect(getByText('Fav Article')).toBeTruthy();
    });
});
