import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  open({ link, name }) {
    this._popupElement = document.querySelector(this._popupSelector);
    this._popupElement.querySelector('.popup__image-title').textContent = name;
    this._popupElement.querySelector('.popup__image').src = link;
    this._popupElement.querySelector('.popup__image').alt = name;

    super.open();
  }
}
