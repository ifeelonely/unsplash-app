import React from 'react';
import ItemCard from '../itemCard/ItemCard';
import { ItemProp } from '../itemCard/ItemPropInterface';
import './ItemsList.css';

interface ItemsListProps {
  itemsArray: ItemProp[];
  getCardData: (data: ItemProp) => void;
}

function ItemsList({ itemsArray, getCardData }: ItemsListProps) {
  return (
    <div className="items-list">
      {itemsArray.map((item) => {
        return (
          <ItemCard getCardData={getCardData} cardProps={item} key={item.id} />
        );
      })}
    </div>
  );
}

export default ItemsList;
