import React, { useState, useEffect } from 'react';
import './ItemCard.css';
import { ItemProp } from './ItemPropInterface';

export interface ItemCardProps {
  cardProps: ItemProp;
  getCardData: (data: ItemProp) => void;
}

function ItemCard({ cardProps, getCardData }: ItemCardProps): JSX.Element {
  const [imgUrl, setImgUrl] = useState<ArrayBuffer | string | null>('');
  const { imgPath, id } = cardProps;

  useEffect(() => {
    const fileReader = new FileReader();
    if (typeof imgPath === 'object') {
      fileReader.readAsDataURL(imgPath);
      fileReader.onloadend = () => {
        setImgUrl(fileReader.result);
      };
    } else {
      setImgUrl(imgPath.toString());
    }
  }, [imgPath]);

  return (
    <div className="item-card" id={id.toString()}>
      <div className="item-card-container">
        <img src={imgUrl!.toString()} alt="" />
        <button
          id={id.toString()}
          type="button"
          className="btn"
          onClick={() => getCardData(cardProps)}
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
