import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popupImageTitle = this._popupElement.querySelector('.popup__image-title');
    this._popupImage = this._popupElement.querySelector('.popup__image');
  }

  open({ link, name }) {
    this._popupImageTitle.textContent = name;
    this._popupImage.src = link;
    this._popupImage.alt = name;

    super.open();
  }
}
