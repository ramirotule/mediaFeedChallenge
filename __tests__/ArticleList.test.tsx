import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ArticleListItem} from '../src/components/ArticleListItem';
import {useAppDispatch, useAppSelector} from '../src/store/hooks';
import {toggleFavoriteKey} from '../src/store/slices/favoritesSlice';
import { describe, beforeEach, afterEach, it, expect} from '@jest/globals';

jest.mock('../src/store/hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock('../src/store/slices/favoritesSlice', () => ({
  toggleFavoriteKey: jest.fn(),
}));

describe('ArticleListItem', () => {
  const mockArticle = {
    id: 1,
    title: 'Test Article',
    summary: 'Summary',
    imageUrl: null,
    newsSite: 'SpaceX',
    publishedAt: '2021-01-01',
    url: 'http://test.com',
    videoUrl: null,
  };

  const mockDispatch = jest.fn();

  beforeEach(() => {
    (useAppDispatch as any).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    (useAppSelector as any).mockReturnValue(false);
    const {getByText} = render(
      <ArticleListItem article={mockArticle} onPress={() => {}} />,
    );

    expect(getByText('Test Article')).toBeTruthy();
    expect(getByText('SpaceX')).toBeTruthy();
    expect(getByText('☆')).toBeTruthy();
  });

  it('shows filled star when is favorite', () => {
    (useAppSelector as any).mockReturnValue(true);
    const {getByText} = render(
      <ArticleListItem article={mockArticle} onPress={() => {}} />,
    );

    expect(getByText('★')).toBeTruthy();
  });

  it('dispatches toggleFavoriteKey when star is pressed', () => {
    (useAppSelector as any).mockReturnValue(false);
    const {getByRole} = render(
      <ArticleListItem article={mockArticle} onPress={() => {}} />,
    );

    const starButton = getByRole('button');
    fireEvent.press(starButton);

    expect(toggleFavoriteKey).toHaveBeenCalledWith('1');
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('calls onPress when container is pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <ArticleListItem article={mockArticle} onPress={onPressMock} />,
    );

    fireEvent.press(getByText('Test Article'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
