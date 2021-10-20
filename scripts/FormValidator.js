export default class FormValidator {
  constructor(configValidation, form) {
    this._configValidation = configValidation;
    this._formElement = form;
    // добавили в массив (inputList) из формы (formElement) все инпуты (inputSelector)
    this._inputList = Array.from(this._formElement.querySelectorAll(this._configValidation.inputSelector));
    this.__submitButton = this._formElement.querySelector(this._configValidation.submitButtonSelector);
  }

  // функция включения видимости ошибки
  _showInputError(inputElement) {
    inputElement.classList.add(this._configValidation.inputErrorClass);
    // сначала наполняем элемент контентом (стандартным браузерным текстом)
    this._errorElement.textContent = inputElement.validationMessage;
    // только потом показываем его на экран (наоборот не надо)
    this._errorElement.classList.add(this._configValidation.errorClass);
  };

  // функция скрытия видимости ошибки
  _hideInputError(inputElement) {
    inputElement.classList.remove(this._configValidation.inputErrorClass);
    this._errorElement.classList.remove(this._configValidation.errorClass);
    this._errorElement.textContent = '';
  };

  // функция проверки валидности поля
  _checkInputValidity(inputElement) {
    // находим (errorElement), который привязан к нашему полю (inputElement)
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    // если поле (inputElement) не валидное, тогда:
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    };
  };

  // функция поиска ошибки в форме
  _hasInvalidInput() {
    // пройдемся по всем инпутам (inputList)
    return this._inputList.some((inputElement) => {
      // если хотя бы один из них не валидный,
		  // то (some) вернет true, иначе вернет false
      return !inputElement.validity.valid;
    });
  };

  // функция проверка на пустые поля
  _hasNotInputValues() {
    // если хотя бы в одном поле есть непустое значение
	  // то тогда нужно вернуть false
    return this._inputList.every((inputElement) => {
      return inputElement.value.length === 0;
    });
  };

  // функция выключения кнопки
  disableSubmitButton() {
    this.__submitButton.classList.add(this._configValidation.inactiveButtonClass);
    this.__submitButton.disabled = true;
  };

  // функция включения кнопки
  _enableSubmitButton() {
    this.__submitButton.classList.remove(this._configValidation.inactiveButtonClass);
    this.__submitButton.disabled = false;
  };

  // функция проверки кнопки сабмита и переключение состояния кнопки
  _toggleButtonState() {
    // если есть хотя бы один невалидный инпут или нету никаких значений, отключим кнопку
    if (this._hasInvalidInput() || this._hasNotInputValues()) {
      this.disableSubmitButton();
    } else {
      // иначе включим кнопку
      this._enableSubmitButton();
    };
  };

  // навешиваем обработчики событий на формы
  _setEventListeners() {
    // для каждой формы (formElement) навесили свой обработчик событий (submit)
    this._formElement.addEventListener('submit', (evt) => {
      // отключаем действия по-умолчанию
      evt.preventDefault();
    });

    this._inputList.forEach((inputElement) => {
      // для каждого инпута (inputElement) навесим свой обработчик событий (input)
      inputElement.addEventListener('input', () => {
        // проверяем валидоность поля, чтобы окрасить в красный цвет и вывести ошибку
        this._checkInputValidity(inputElement);
        // переключаем состояние кнопки (submit) всей формы, если потребуется
        this._toggleButtonState();
      });
    });

    this._toggleButtonState();
  };

  // функция включает валидацию формы
  enableValidation() {
    this._setEventListeners()
  };
};
