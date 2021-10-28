import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  open({ link, name }) {
    this._popupElement.querySelector('.popup__image-title').textContent = name;
    const imageElement = this._popupElement.querySelector('.popup__image')
    imageElement.src = link;
    imageElement.alt = name;

    super.open();
  }
}
