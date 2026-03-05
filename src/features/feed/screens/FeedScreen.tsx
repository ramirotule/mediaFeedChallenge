import React, {useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
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
  const error = useAppSelector(s => s.articles.error);
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
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <ArticleListItem
            article={item}
            onPress={() => navigation.navigate('Detail', {articleId: item.id})}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          status !== 'loading' ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                {status === 'failed'
                  ? `Error: ${error || 'No se pudieron cargar las noticias'}`
                  : query.trim().length > 0
                  ? 'No hay ninguna noticia que coincida con la búsqueda'
                  : 'No hay noticias disponibles en este momento.'}
              </Text>
            </View>
          ) : null
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
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
