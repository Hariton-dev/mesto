import Card from './Card.js'
import FormValidator from './FormValidator.js'

// объявление констант
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_iamge');

const buttonOpenPopupEditProfile = document.querySelector('.profile__info-edit-button');
const buttonOpenPopupAddCard = document.querySelector('.profile__add-button');

const buttonClosePopupEditProfile = popupEditProfile.querySelector('.popup__close');
const buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close');
const buttonClosePopupImage = popupImage.querySelector('.popup__close');

const formEditProfile = popupEditProfile.querySelector('.popup__form');
const formAddCard = popupAddCard.querySelector('.popup__form');

const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');

const nameInput = formEditProfile.querySelector('.popup__input_type_name');
const jobInput = formEditProfile.querySelector('.popup__input_type_job');

const placeInput = formAddCard.querySelector('.popup__input_type_place');
const urlInput = formAddCard.querySelector('.popup__input_type_url');

const imageImage = popupImage.querySelector('.popup__image');
const imageTitle = popupImage.querySelector('.popup__image-title');

const elements = document.querySelector('.elements');

// массив попапов
const popupList = Array.from(document.querySelectorAll('.popup'));



const initialCards = [
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

// валидация форм
const validationEditProfileForm = new FormValidator(configValidation, formEditProfile) ;
validationEditProfileForm.enableValidation();
const validationAddCardForm = new FormValidator(configValidation, formAddCard);
validationAddCardForm.enableValidation();

// функция открытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler);
};

// функция закрытия popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
};

// обработчик "отправки" формы profileFormSubmitHandler
function profileFormSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
};

// обработчик "отправки" формы addCardSubmitHandler
function addCardSubmitHandler (evt) {
  evt.preventDefault();
  renderCard({name: placeInput.value, link: urlInput.value})
  closePopup(popupAddCard);
  formAddCard.reset();
  // деактивация кнопки сабмита
  validationAddCardForm.disableSubmitButton();
};

// открытие popupEditProfile
buttonOpenPopupEditProfile.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEditProfile);
});

// закрытие popupEditProfile
buttonClosePopupEditProfile.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

// открытие popupAddCard
buttonOpenPopupAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

// закрытие popupAddCard
buttonClosePopupAddCard.addEventListener('click', () => {
  closePopup(popupAddCard);
});

// закрытие popupImage
buttonClosePopupImage.addEventListener('click', () => {
  closePopup(popupImage);
});

// отправка формы formEditProfile
formEditProfile.addEventListener('submit', profileFormSubmitHandler);

// отправка формы formAddCard
formAddCard.addEventListener('submit', addCardSubmitHandler);

// функция открытия картинки
export function handleImageClick(name, link) {
  imageImage.src = link;
  imageImage.alt = name;
  imageTitle.textContent = name;
  openPopup(popupImage);
};

// функция создания карточки
function createCard(cardData) {
  const card = new Card(cardData, '#card-template');
  return card.generateCard();
};

// добавление карточек при загрузке страницы
function renderCard(cardData) {
  elements.prepend(createCard(cardData));
};

// загрузка карточек на начальную страницу
initialCards.forEach((cardData) => {
  renderCard(cardData);
});

// функция закрытия по esc
function keyHandler(evt) {
  if (evt.key === 'Escape') {
    closedOpenedPopup();
  };
};

// функция закрытия открытого попапа
function closedOpenedPopup() {
  const popupOpened = document.querySelector('.popup_opened');
  closePopup(popupOpened);
}

// закрытие попапа на оверлей
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    };
  });
});
