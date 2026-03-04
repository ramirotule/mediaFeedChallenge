import React, {useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ArticleListItem} from '../../../components/ArticleListItem';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {
  loadArticles,
  selectArticles,
  selectQuery,
  setQuery,
} from '../../../store/slices/articlesSlice';

import type {RootStackParamList} from '../../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Tabs'>;

export function FeedScreen({navigation}: Props) {
  const dispatch = useAppDispatch();

  const query = useAppSelector(selectQuery);
  const status = useAppSelector(s => s.articles.status);
  const articles = useAppSelector(selectArticles);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(loadArticles());
    }, 200);
    return () => clearTimeout(handler);
  }, [dispatch, query]);


  const data = useMemo(() => {
    return articles;
  }, [articles]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(loadArticles());
    setTimeout(() => setRefreshing(false), 700);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={text => dispatch(setQuery(text))}
        placeholder="Buscar noticias..."
        style={styles.search}
        autoCorrect={false}
        autoCapitalize="none"
      />

      {status === 'loading' && data.length === 0 ? (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      ) : null}

      <FlatList
        data={data}
        keyExtractor={(_, index) => String(index)}
        renderItem={({item}) => (
          <ArticleListItem
            article={item}
            onPress={() => navigation.navigate('Detail', {articleId: item.id})}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, 
  },
  search: {
    margin: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  loading: {paddingTop: 20},
});
