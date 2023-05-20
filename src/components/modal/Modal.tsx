import React, { useState } from 'react';
import './Modal.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ItemProp } from '../itemCard/ItemPropInterface';

interface ModalProps {
  card: ItemProp;
  resetCardData: () => void;
}

function Modal({ card, resetCardData }: ModalProps) {
  const { name, date, quantity, isUsed, importValue } = card;
  const [visible, setVisible] = useState<boolean>(true);
  return (
    <div
      className="modal"
      onClick={() => {
        resetCardData();
        setVisible(false);
      }}
      style={{ opacity: visible ? '1' : '0', zIndex: visible ? '1' : '-1' }}
    >
      <div className="modal__inner">
        <AiOutlineCloseCircle className="close__btn" />
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="card-about">
            <p>Name: {name}</p>
            <p>Date: {date}</p>
            <div className="card-media">
              <p className="card-likes">quantity: {quantity}</p>
              <p className="card-views">
                Second-handed: {isUsed ? 'Second-handed' : 'New'}
              </p>
              <p>Import type: {importValue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
