import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
  formEditProfile,
  formAddCard,
  inputName,
  inputJob,
  buttonOpenPopupEditProfile,
  buttonOpenPopupAddCard,
  imagePopupSelector,
  userInfoPopupSelector,
  newCardPopupSelector,
  userProfileNameSelector,
  userProfileJobSelector,
  elementsSelector,
  initialCards,
  configValidation
} from '../utils/constants.js'

// валидация форм
const validationEditProfileForm = new FormValidator(configValidation, formEditProfile) ;
validationEditProfileForm.enableValidation();
const validationAddCardForm = new FormValidator(configValidation, formAddCard);
validationAddCardForm.enableValidation();

const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

const userInfo = new UserInfo({ name: userProfileNameSelector, job: userProfileJobSelector });

// экземпляр профиля
const userInfoPopup = new PopupWithForm(userInfoPopupSelector, (data) => {
  userInfo.setUserInfo(data);
})
userInfoPopup.setEventListeners();

// функция создания карточки
const createCard = (data) => {
  const card = new Card(data, '#card-template', ({ link, name }) => {
    imagePopup.open({ link, name })
  });

  return card.generateCard();
};

// загрузка карточек на начальную страницу
const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item))
  }
}, elementsSelector);

cardList.renderItems();

// экземпляр добавления новой карточки
const newCardPopup = new PopupWithForm(newCardPopupSelector, (data) => {
  const newCard = {
    link: data.url,
    name: data.place
  }
  cardList.addItem(createCard(newCard));
})
newCardPopup.setEventListeners();

const setValuesUserProfilePopup = () => {
  const userData = userInfo.getUserInfo();
  inputName.value = userData.name;
  inputJob.value = userData.job;
  validationEditProfileForm.resetValidation();
  userInfoPopup.open();
}

// открытие попапа профиля
buttonOpenPopupEditProfile.addEventListener('click', setValuesUserProfilePopup);

buttonOpenPopupAddCard.addEventListener('click', () => {
  validationAddCardForm.resetValidation();
  newCardPopup.open();
})


