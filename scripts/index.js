let popup = document.querySelector('.popup');
let popupButton = document.querySelector('.profile__info-edit-button');
let closeButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');
let profileName = document.querySelector('.profile__info-title')
let profileJob = document.querySelector('.profile__info-subtitle')

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopup()
}

function togglePopup() {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

popupButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler);
