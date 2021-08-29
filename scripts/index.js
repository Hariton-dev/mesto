let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__info-edit-button');
let closePopupButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');
let profileName = document.querySelector('.profile__info-title')
let profileJob = document.querySelector('.profile__info-subtitle')

// функция открытия popup
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// функция закрытия popup
function closePopup() {
  popup.classList.remove('popup_opened');
}

// Обработчик "отправки" формы
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup()
}

// Открытие popup
openPopupButton.addEventListener('click', openPopup);

// Закрытие popup
closePopupButton.addEventListener('click', closePopup);

// Отправка формы
formElement.addEventListener('submit', formSubmitHandler);
