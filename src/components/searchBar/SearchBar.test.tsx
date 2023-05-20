import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import SearchBar from './SearchBar';
import { setupStore } from '../../store/store';

describe('SearchBar', () => {
  it('Renders search bar', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchBar = screen.getByPlaceholderText(/search.../i);
    expect(searchBar).toBeInTheDocument();
  });
});
