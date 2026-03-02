import {favoritesReducer, toggleFavoriteKey} from '../src/store/slices/favoritesSlice';

describe('favoritesSlice', () => {
  it('toggle agrega y quita una key', () => {
    let state = favoritesReducer(undefined, {type: 'init'});

    state = favoritesReducer(state, toggleFavoriteKey('A'));
    expect(state.keys).toEqual(['A']);

    state = favoritesReducer(state, toggleFavoriteKey('A'));
    expect(state.keys).toEqual([]);
  });
});
