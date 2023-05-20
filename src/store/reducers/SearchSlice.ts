import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ItemProp } from '../../components/itemCard/ItemPropInterface';

interface SearchState {
  term: string;
  searchResults: ItemProp[];
  cards: ItemProp[];
  commonCards: ItemProp[];
  formSubmissions: ItemProp[];
  error: string;
}

const initialState: SearchState = {
  term: '',
  searchResults: [],
  formSubmissions: [],
  cards: [],
  error: '',
  commonCards: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setTerm(state, action: PayloadAction<string>) {
      state.term = action.payload;
    },
    setSearchResults(state, action: PayloadAction<ItemProp[]>) {
      state.searchResults = action.payload;
    },
    setCards(state, action: PayloadAction<ItemProp>) {
      state.cards = [...state.cards, action.payload];
    },
    setSearchError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setFormSubmissions(state, action: PayloadAction<ItemProp>) {
      state.formSubmissions = [...state.formSubmissions, action.payload];
    },
  },
});

export default searchSlice.reducer;
