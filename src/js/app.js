class App {
    constructor() {
        this.element = document.createElement('div');
        this.element.setAttribute('id', 'app');
    }

    showApp() {
        document.body.appendChild(this.element);
    }

    hideApp() {
        document.body.removeChild(this.element);
    }

    setAppHtml(text) {
        this.element.innerHTML = text;
    }

    addEventListenersToButtons(event) {
        this.element.querySelectorAll('button').forEach((button) => {
            button.addEventListener('click', event);
        });
    }
}

export default App;
