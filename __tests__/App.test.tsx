/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('../src/navigation/AppNavigator', () => ({
  AppNavigator: () => null,
}));

jest.mock('../src/store/store', () => ({
  store: {
    dispatch: jest.fn(),
    getState: jest.fn(),
    subscribe: jest.fn(),
  },
}));

jest.mock('../src/store/slices/favoritesSlice', () => ({
  hydrateFavorites: () => ({type: 'favorites/hydrate'}),
}));

it('renders correctly', () => {
  renderer.create(<App />);
});
