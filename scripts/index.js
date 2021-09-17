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

// функция открытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

// функция закрытия popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
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

//////////////////////////////////////////

const cardTemplate = document.querySelector('#card-template').content;
const elements = document.querySelector('.elements');

// функция активизации лайка
function handleLikeClick(evt) {
  evt.target.classList.toggle('card__button-icon-heart_active');
};

// функция удаление карточки
function handleDeleteClick(evt) {
  evt.target.closest('.card').remove();
};

// функция открытия картинки (нужно исправить)
function handleImageClick(cardData) {
  imageImage.src = cardData.link;
  imageImage.alt = cardData.name;
  imageTitle.textContent = cardData.name;
  openPopup(popupImage);
};

// функция создания карточки
function createCard(cardData) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardImage = cardElement.querySelector('.card__photo');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLikeButton = cardElement.querySelector('.card__button-icon-heart');
  const cardDeleteButton = cardElement.querySelector('.card__button-icon-delete');

  cardLikeButton.addEventListener('click', handleLikeClick);

  cardDeleteButton.addEventListener('click', handleDeleteClick);

  cardImage.addEventListener('click', () => {
    handleImageClick(cardData);
  });

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  return cardElement;
};

// добавление карточек при загрузке страницы
function renderCard(cardData) {
  elements.prepend(createCard(cardData));
};

// загрузка карточек на начальную страницу
initialCards.forEach((cardData) => {
  renderCard(cardData);
});

//////////////////////////////////////////

// массив попапов
const popupList = Array.from(document.querySelectorAll('.popup'));

// функция закрытия по esc
function keyHandler(evt) {
  if (evt.key === 'Escape') {
    popupList.forEach((popup) => {
      closePopup(popup);
    })
    evt.target.removeEventListener('click', keyHandler);
  };
};

// закрытие попапа на esc
document.addEventListener('keydown', keyHandler);

// закрытие попапа на оверлей
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', () => {
    closePopup(popup);
  });
});
