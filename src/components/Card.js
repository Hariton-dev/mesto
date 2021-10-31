export default class Card {
  // передадим данные в виде объекта (data) и
  // чтобы выбирать из нескольких шаблонов,
  // сделаем селектор частью конструктора класса
  constructor({ link, name}, cardSelector, handleCardClick) {
    this._link = link;
    this._name = name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  // получим готовую разметку перед размещением на страницу и
  // вернем разметку карточки через (return)
  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    const cardElement =
    document.querySelector(this._cardSelector)
    .content.querySelector('.card').cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }

  // подготовим карточку к публикации (метод добавит данные в разметку)
  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();

    this._cardFoto = this._element.querySelector('.card__photo');
    this._cardTitle = this._element.querySelector('.card__title');

    this._setEventListeners();

    // Добавим данные
    this._cardFoto.src = this._link;
    this._cardTitle.alt = this._name;
    this._cardTitle.textContent = this._name;
    // Вернём элемент наружу
    return this._element;
  };

  // слушатель событий
  _setEventListeners() {
    // открытие картинки
    this._cardFoto
    .addEventListener('click', () => {
      this._handleCardClick({ link: this._link, name: this._name });
    });

    // активизации лайка
    this._element.querySelector('.card__button-icon-heart')
    .addEventListener('click', this._handleLikeClick);

    // удаление карточки
    this._element.querySelector('.card__button-icon-delete')
    .addEventListener('click', () => {
      this._handleDeleteClick();
    });
  };

  // активизации лайка
  _handleLikeClick(evt) {
    evt.target.classList.toggle('card__button-icon-heart_active');
  };

  // удаление карточки
  _handleDeleteClick() {
    this._element.remove();
    // очистим ссылку на DOM-элемент
    this._element = null;
  };

}
