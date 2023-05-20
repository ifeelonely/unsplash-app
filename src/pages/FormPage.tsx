import React, { useState } from 'react';
import CardForm from '../components/cardForm/CardForm';
import { ItemProp } from '../components/itemCard/ItemPropInterface';
import ItemsList from '../components/itemsList/ItemsList';
import Modal from '../components/modal/Modal';
import './FormPage.css';
import { useAppSelector } from '../hooks/redux';

function FormPage(): JSX.Element {
  const { cards } = useAppSelector((state) => state.searchReducer);
  const [cardData, setCardData] = useState<ItemProp>();

  const getCardData = (data: ItemProp) => {
    setCardData(data);
  };

  const resetCardData = () => {
    setCardData(undefined);
  };

  return (
    <div className="form-page">
      <div>FormPage</div>
      {cardData ? (
        <Modal resetCardData={resetCardData} card={cardData} />
      ) : null}
      <CardForm />
      <ItemsList getCardData={getCardData} itemsArray={cards} />
    </div>
  );
}

export default FormPage;
