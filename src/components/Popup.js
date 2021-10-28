export default class Popup {
  constructor(popupSelector) {
    // this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // открытие попапа
  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  // закрытие попапа
  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  // закрытие по esc
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  // добавит слушатель клика по иконке закрытия попапа и оверлей
  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup') ||
      evt.target.classList.contains('popup_close')) {
        this.close();
      }
    })
  }
}
