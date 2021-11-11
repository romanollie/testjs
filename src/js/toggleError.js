class ToggleError {
    constructor() {
        this.element = document.createElement('div');
        this.element.setAttribute('id', 'error');
        this.element.style.display = 'none';
        document.querySelector('#app').append(this.element);
    }

    showError() {
        this.element.style.display = 'block';
    }

    hideError() {
        this.element.style.display = 'none';
    }

    setErrorHtml(text) {
        this.element.innerHTML = text;
    }
}

export default ToggleError;
