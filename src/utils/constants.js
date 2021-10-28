// объявление и экспорт констант

export const formEditProfile = document.querySelector('.popup__form_type_edit-profile');
export const formAddCard = document.querySelector('.popup__form_type_add-card');

export const inputName = document.querySelector('.popup__input_type_name');
export const inputJob = document.querySelector('.popup__input_type_job');

export const buttonOpenPopupEditProfile = document.querySelector('.profile__info-edit-button');
export const buttonOpenPopupAddCard = document.querySelector('.profile__add-button');

export const imagePopupSelector = '.popup_type_iamge';
export const userInfoPopupSelector = '.popup_type_edit-profile'
export const newCardPopupSelector = '.popup_type_add-card'
export const userProfileNameSelector = '.profile__info-title';
export const userProfileJobSelector = '.profile__info-subtitle';
export const elementsSelector = '.elements';

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}
