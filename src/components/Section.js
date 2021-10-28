export default class Section {
  constructor({data, renderer}, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._container.prepend(element);
  }

  // очистим контейнер
  clear() {
    this._container.innetHTML = '';
  }

  // отрисовка элементов
  renderItems() {
    this.clear();

    this._renderedItems.forEach((item) => {
      this._renderer(item)
    });
  }
}
