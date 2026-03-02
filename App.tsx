import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import {AppNavigator} from './src/navigation/AppNavigator';
import {store} from './src/store/store';
import {hydrateFavorites} from './src/store/slices/favoritesSlice';

export default function App(): JSX.Element {
  useEffect(() => {
    store.dispatch(hydrateFavorites());
  }, []);

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </Provider>
  );
}
