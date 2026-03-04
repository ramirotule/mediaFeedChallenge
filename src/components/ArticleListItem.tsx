import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../store/hooks';
import {toggleFavoriteKey} from '../store/slices/favoritesSlice';

import type {Article} from '../types/Article';

type Props = {
  article: Article;
  onPress: () => void;
};

export function ArticleListItem({article, onPress}: Props) {
  const dispatch = useAppDispatch();

  const favoriteKey = String(article.id);
  const isFavorite = useAppSelector(s => s.favorites.keys.includes(favoriteKey));

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <View style={styles.main}>
          <Text numberOfLines={2} style={styles.title}>
            {article.title}
          </Text>
          <Text numberOfLines={1} style={styles.meta}>
            {article.newsSite}
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => dispatch(toggleFavoriteKey(favoriteKey))}
          style={styles.star}>
          <Text style={styles.starText}>{isFavorite ? '★' : '☆'}</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {flexDirection: 'row', alignItems: 'center', gap: 12},
  main: {flex: 1},
  title: {fontSize: 16, fontWeight: '600'},
  meta: {fontSize: 12, color: '#666', marginTop: 4},
  star: {padding: 6},
  starText: {fontSize: 20},
});
