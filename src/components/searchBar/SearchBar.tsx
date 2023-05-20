import React from 'react';
import './SearchBar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchSlice } from '../../store/reducers/SearchSlice';

function SearchBar(): JSX.Element {
  const { term } = useAppSelector((state) => state.searchReducer);
  const { setTerm } = searchSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="searchBar-container">
      <AiOutlineSearch style={{ color: 'grey' }} />
      <input
        className="searchBar"
        type="text"
        placeholder="Search..."
        value={term}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setTerm(e.target.value))
        }
      />
    </div>
  );
}

export default SearchBar;
