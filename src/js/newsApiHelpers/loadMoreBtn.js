class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    console.log(selector);
    this.refs = this.getRefs(selector);
    hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.label = refs.button.querySelector('.label');
    refs.spiner = refs.button.querySelector('.spinner');
    return refs;
  }

  enable() {
    this.refs.button.disabled = false;
    this.refs.label.textContent = 'Показати ще';
    this.refs.spiner.classList.add('is-hidden');
  }

  disabled() {
    this.refs.button.disabled = true;
    this.refs.label.textContent = 'Завантажуєм';
    this.refs.spiner.classList.remove('is-hidden');
  }

  show() {
    this.refs.spiner.classList.remove('is-hidden');
  }
  hide() {
    this.refs.spiner.classList.add('is-hidden');
  }
}
export { LoadMoreBtn };
