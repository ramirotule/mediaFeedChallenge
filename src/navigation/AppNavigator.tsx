import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {FeedScreen} from '../features/feed/screens/FeedScreen';
import {ArticleDetailScreen} from '../features/feed/screens/ArticleDetailScreen';
import {FavoritesScreen} from '../features/favorites/screens/FavoritesScreen';

export type RootStackParamList = {
  Tabs: undefined;
  Detail: {articleId: number};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type TabsParamList = {
  Feed: undefined;
  Favorites: undefined;
};

const Tabs = createBottomTabNavigator<TabsParamList>();

// Iconos simples usando emojis/unicode
function FeedIcon({color}: {color: string}) {
  return <Text style={{fontSize: 24, color}}>📰</Text>;
}

function FavoritesIcon({color}: {color: string}) {
  return <Text style={{fontSize: 24, color}}>⭐</Text>;
}

function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: '#999',
      }}>
      <Tabs.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({color}) => <FeedIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({color}) => <FavoritesIcon color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Tabs"
          component={TabsNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Detail"
          component={ArticleDetailScreen}
          options={({route}) => {
            // Obtener el artículo para mostrar su título en el header
            // Nota: esto requiere acceso al store, así que usamos una función
            return {
              title: 'Media Feed - Challenge',
              headerBackTitle: 'Atrás',
            };
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
