import React from 'react';

export function setSelect(
  e: React.ChangeEvent<HTMLSelectElement>,
  state: object
) {
  return { ...state, inputRefQuantity: e.target.value };
}

export function setRadio(
  e: React.ChangeEvent<HTMLInputElement>,
  state: object
) {
  return { ...state, inputRadio: e.target.value };
}
