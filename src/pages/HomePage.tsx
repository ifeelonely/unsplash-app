import React, { useState, useEffect } from 'react';
import { DiReact } from 'react-icons/di';
import SearchBar from '../components/searchBar/SearchBar';
import ItemsList from '../components/itemsList/ItemsList';
import Modal from '../components/modal/Modal';
import { ItemProp } from '../components/itemCard/ItemPropInterface';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { unsplashApi } from '../services/CardsService';
import { Response } from './interfaces/HomePageInterface';
import { searchSlice } from '../store/reducers/SearchSlice';
import './styles/HomePage.css';

function HomePage(): JSX.Element {
  const { term, searchResults } = useAppSelector(
    (state) => state.searchReducer
  );
  const [fetchCards, results] = unsplashApi.useLazyGetCardsQuery();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [cardData, setCardData] = useState<ItemProp>();

  useEffect(() => {
    if (results.isSuccess)
      dispatch(
        searchSlice.actions.setSearchResults(
          results.data.results.map((item: Response) => {
            const newCard = {
              imgPath: item.urls.regular,
              name: item.user.name,
              date: item.created_at,
              quantity: item.likes.toString(),
              isUsed: item.liked_by_user,
              importValue: item.alt_description,
              id: item.id,
            };
            return newCard;
          })
        )
      );
  }, [results]);

  const onSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    fetchCards(term).then(() => setIsLoading(false));
  };

  const getCardData = (data: ItemProp) => {
    setCardData(data);
  };

  const resetCardData = () => {
    setCardData(undefined);
  };

  return (
    <div className="home-page">
      <div>HomePage</div>
      {cardData ? (
        <Modal resetCardData={resetCardData} card={cardData} />
      ) : null}
      <form onSubmit={onSearchSubmit}>
        <SearchBar />
      </form>
      <div className="items__list">
        {!isLoading && !searchResults.length ? (
          <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>
            Cards not found!
          </h1>
        ) : null}
        {isLoading ? (
          <DiReact className="spinner" />
        ) : (
          <ItemsList getCardData={getCardData} itemsArray={searchResults} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
