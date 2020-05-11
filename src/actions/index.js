import * as actionTypes from './actionTypes';
export const sepeteEkle = (book) => {
  return {
    type: actionTypes.SEPETE_EKLE,
    payload: book,
  };
};

export const removeFromCart = (book) => ({
  type: actionTypes.SEPETTEN_CIKAR,
  payload: book,
});

export const arttir = (book) => ({
  type: actionTypes.ARTTIR,
  payload: book,
});
export const azalt = (book) => ({
  type: actionTypes.AZALT,
  payload: book,
});
