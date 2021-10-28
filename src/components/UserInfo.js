export default class UserInfo {
  constructor({ name, job }) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
  }

  // вернем объект с данными пользователя
  getUserInfo() {
    const data = {
      name: this._name.textContent,
      job: this._job.textContent
    }

    return data;
  }

  // принимает новые данные пользователя и
  // добавляет их на страницу
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.job;
  }
}
