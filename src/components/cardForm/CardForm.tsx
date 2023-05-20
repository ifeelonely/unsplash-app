import React, { useEffect, useState, useRef } from 'react';
import './CardForm.css';
import { CardFormState, CardFormValid } from './CardFormInterface';
import {
  validDate,
  validImg,
  validName,
  validQuantity,
  validRadio,
} from './CardFormValid';
import { searchSlice } from '../../store/reducers/SearchSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

function CardForm(): JSX.Element {
  const { setCards, setFormSubmissions } = searchSlice.actions;
  const cards = useAppSelector((state) => state.searchReducer.cards);
  const dispatch = useAppDispatch();
  const [formState, setFormState] = useState<CardFormState>({
    inputName: '',
    inputDate: '',
    inputQuantity: '',
    inputUsed: false,
    inputRadio: '',
    inputImg: new File([], ''),
    id: cards.length,
  });

  const [validState, setValidState] = useState<CardFormValid>({
    validName: false,
    validDate: false,
    validRadio: false,
    validQuantity: false,
    validImg: false,
    firstRender: true,
    formSent: false,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const img =
      typeof formState.inputImg === 'object'
        ? formState.inputImg
        : new File([], '');
    setValidState({
      ...validState,
      validName: validName(formState.inputName),
      validDate: validDate(formState.inputDate),
      validRadio: validRadio(formState.inputRadio),
      validQuantity: validQuantity(formState.inputQuantity),
      validImg: validImg(img),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState]);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const checkboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.checked });
  };

  const radioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, inputRadio: e.target.value });
  };

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, inputImg: e.target.files![0] });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newCard = {
      imgPath: formState.inputImg,
      name: formState.inputName,
      date: formState.inputDate,
      quantity: formState.inputQuantity,
      isUsed: formState.inputUsed,
      importValue: formState.inputRadio,
      id: formState.id,
    };

    setValidState({
      ...validState,
      firstRender: false,
    });
    const isFormValid =
      validState.validName &&
      validState.validDate &&
      validState.validImg &&
      validState.validQuantity &&
      validState.validRadio;
    if (isFormValid) {
      dispatch(setCards(newCard));
      dispatch(setFormSubmissions(newCard));
      setFormState({
        id: cards.length + 1,
        inputName: '',
        inputDate: '',
        inputQuantity: '',
        inputUsed: false,
        inputRadio: '',
        inputImg: new File([], ''),
      });
      setValidState({
        ...validState,
        firstRender: true,
      });
      fileInputRef!.current!.value = '';
    }
  };

  return (
    <form action="" className="card-form">
      <div className="form-title">
        <span>Card Form</span>
      </div>
      <input
        name="inputName"
        type="text"
        placeholder="Product name..."
        className="form-input"
        value={formState.inputName}
        onChange={inputChange}
      />
      {!validState.validName && !validState.firstRender ? (
        <h1 style={{ color: 'red', fontSize: '12px' }}>At least 5 letters!</h1>
      ) : null}
      <input
        name="inputDate"
        type="date"
        placeholder="Release date..."
        className="form-input"
        value={formState.inputDate}
        onChange={inputChange}
      />
      {!validState.validDate && !validState.firstRender ? (
        <h1 style={{ color: 'red', fontSize: '12px' }}>
          Date format: DD.MM.YY
        </h1>
      ) : null}
      <select
        name="inputQuantity"
        id=""
        className="drop-select"
        value={formState.inputQuantity}
        onChange={selectChange}
      >
        <option disabled value="" defaultChecked>
          Quantity
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      {!validState.validQuantity && !validState.firstRender ? (
        <h1 style={{ color: 'red', fontSize: '12px' }}>Wrong quantity!</h1>
      ) : null}
      <div className="form-checkbox">
        <label htmlFor="used" className="form-label-flex">
          <input
            name="inputUsed"
            type="checkbox"
            id="used"
            onChange={checkboxChange}
          />
          <div>Is it used?</div>
        </label>
      </div>
      <div className="form-radio">
        <label htmlFor="export" className="form-label-flex">
          <input
            type="radio"
            id="export"
            name="radio-exported"
            value="export"
            checked={formState.inputRadio === 'export'}
            onChange={radioChange}
          />
          <div>Export</div>
        </label>
        <label htmlFor="import" className="form-label-flex">
          <input
            type="radio"
            id="import"
            name="radio-exported"
            value="import"
            checked={formState.inputRadio === 'import'}
            onChange={radioChange}
          />
          <div>Import</div>
        </label>
      </div>
      {!validState.validRadio && !validState.firstRender ? (
        <h1 style={{ color: 'red', fontSize: '12px' }}>Choose a value!</h1>
      ) : null}
      <input type="file" onChange={fileChange} ref={fileInputRef} />
      {!validState.validImg && !validState.firstRender ? (
        <h1 style={{ color: 'red', fontSize: '12px' }}>Choose an image!</h1>
      ) : null}
      <button type="submit" className="btn submit-btn" onClick={handleSubmit}>
        Submit
      </button>
      {validState.formSent ? (
        <div
          style={{
            color: 'var(--main-purple)',
            fontSize: '20px',
            textAlign: 'center',
          }}
        >
          Form has been sent!
        </div>
      ) : null}
    </form>
  );
}

export default CardForm;
