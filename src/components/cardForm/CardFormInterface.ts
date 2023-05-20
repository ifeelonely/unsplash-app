export interface CardFormState {
  inputName: string;
  inputDate: string;
  inputQuantity: string;
  inputUsed: boolean;
  inputRadio: string;
  inputImg: File | string;
  id: number;
}

export interface CardFormValid {
  validName: boolean;
  validDate: boolean;
  validRadio: boolean;
  validQuantity: boolean;
  validImg: boolean;
  firstRender: boolean;
  formSent: boolean;
}
