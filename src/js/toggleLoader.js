class ToggleLoader {
    constructor() {
        this.element = document.createElement('div');
        this.element.setAttribute('id', 'loader');
        this.element.innerHTML = 'Loading...';
        this.element.style.display = 'none';
        document.querySelector('#app').append(this.element);
    }

    showLoader() {
        this.element.style.display = 'block';
    }

    hideLoader() {
        this.element.style.display = 'none';
    }
}

export default ToggleLoader;
