import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadFavoriteKeys, saveFavoriteKeys } from '../src/storage/favoritesStorage';
import { describe, beforeEach, it, expect} from '@jest/globals';


jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
}));

describe('favoritesStorage', () => {
    it('loadFavoriteKeys returns empty array if no data', async () => {
        (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null);
        const keys = await loadFavoriteKeys();
        expect(keys).toEqual([]);
    });

    it('loadFavoriteKeys returns parsed data', async () => {
        const mockData = JSON.stringify(['1', '2']);
        (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(mockData);
        const keys = await loadFavoriteKeys();
        expect(keys).toEqual(['1', '2']);
    });

    it('saveFavoriteKeys calls AsyncStorage.setItem', async () => {
        const keys = ['1', '2'];
        await saveFavoriteKeys(keys);
        expect(AsyncStorage.setItem).toHaveBeenCalledWith('favorites', JSON.stringify(keys));
    });
});
