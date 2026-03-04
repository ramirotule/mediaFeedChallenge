import React, {useMemo} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import Video from 'react-native-video';

import type {RootStackParamList} from '../../../navigation/AppNavigator';
import {useAppSelector} from '../../../store/hooks';

const FALLBACK_VIDEO_URL =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export function ArticleDetailScreen({route}: Props) {
  const {articleId} = route.params;

  const article = useAppSelector(s =>
    s.articles.items.find(a => a.id === articleId),
  );

  const videoUrl = article?.videoUrl ? article.videoUrl : FALLBACK_VIDEO_URL

  if (!article) {
    return (
      <View style={styles.center}>
        <Text>No se encontró la noticia.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.meta}>{article.newsSite}</Text>

      <View style={styles.videoWrap}>
        <Video
          source={{uri: videoUrl}}
          style={styles.video}
          resizeMode="contain"
          paused={false}
        />
      </View>

      <Text style={styles.summary}>{article.summary!.trim()}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {padding: 16, gap: 10},
  title: {fontSize: 20, fontWeight: '700'},
  meta: {fontSize: 12, color: '#666'},
  videoWrap: {
    height: 220,
    backgroundColor: '#000',
    borderRadius: 12,
    overflow: 'hidden',
  },
  video: {width: '100%', height: '100%'},
  summary: {fontSize: 15, lineHeight: 20},
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
