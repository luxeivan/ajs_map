export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[123, 'первая ошибка'], [234, 'вторая ошибка'], [345, 'третья ошибка']]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
