export function validName(name: string) {
  if (name.length < 5 || !name.length) return false;
  return true;
}

export function validDate(date: string) {
  if (!date) return false;
  return true;
}

export function validImg(img: File) {
  if (!img.name) return false;
  return true;
}

export function validRadio(radio: string) {
  if (!radio) return false;
  return true;
}

export function validQuantity(quantity: string) {
  if (!quantity) return false;
  return true;
}
