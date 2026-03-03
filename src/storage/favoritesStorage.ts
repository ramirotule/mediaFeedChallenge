import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'favorites';

export const loadFavoriteKeys = async (): Promise<string[]> => {
    try {
        const data = await AsyncStorage.getItem(FAVORITES_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.warn('Error loading favorites', error);
        return [];
    }
};

export const saveFavoriteKeys = async (keys: string[]) => {
    try {
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(keys));
    } catch (error) {
        console.warn('Error saving favorites', error);
    }
};
