import React, {useEffect, useMemo} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ArticleListItem} from '../../../components/ArticleListItem';
import type {RootStackParamList} from '../../../navigation/AppNavigator';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {hydrateFavorites, persistFavorites} from '../../../store/slices/favoritesSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Tabs'>;

export function FavoritesScreen({navigation}: Props) {
  const dispatch = useAppDispatch();

  const hydrated = useAppSelector(s => s.favorites.hydrated);
  const favoriteKeys = useAppSelector(s => s.favorites.keys);
  const articles = useAppSelector(s => s.articles.items);

  useEffect(() => {
    dispatch(hydrateFavorites());
  }, [dispatch]);

  useEffect(() => {
    if (hydrated) {
      dispatch(persistFavorites());
    }
  }, [dispatch, favoriteKeys, hydrated]);

  const favoriteArticles = useMemo(() => {
    return articles.filter(a => favoriteKeys.includes(String(a.id)));
  }, [articles, favoriteKeys]);

  if (!hydrated) {
    return (
      <View style={styles.center}>
        <Text>Cargando favoritos...</Text>
      </View>
    );
  }

  if (favoriteArticles.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No tenés favoritos.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteArticles}
      keyExtractor={(_, index) => String(index)}
      renderItem={({item}) => (
        <ArticleListItem
          article={item}
          onPress={() => navigation.navigate('Detail', {articleId: item.id})}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
