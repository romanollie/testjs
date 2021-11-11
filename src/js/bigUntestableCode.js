import { getItemsRequest, toggleFavoriteRequest } from './requests';
import { hideLoader, showLoader } from './loader';
import { hideError, showError } from './toggleError';

export default () => {
    hideError();
    showLoader();

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                showError();
            } else {
                const appElement = document.querySelector('#app');

                appElement.innerHTML = data.html;
                appElement.style.display = 'block';

                Array.from(appElement.querySelector('button')).forEach((button) => {
                    button.addEventListener('click', (e) => {
                        e.preventDefault();

                        e.currentTarget.textContent = 'Загрузка...';

                        toggleFavoriteRequest(e.currentTarget.dataset.id)
                            .then(({ data: buttonData }) => {
                                if (buttonData.result === 'set') {
                                    e.currentTarget.textContent = '🌝';
                                } else {
                                    e.currentTarget.textContent = '🌚';
                                }
                            });
                    });
                });
            }
        })
        .catch((e) => {
            const errorElement = document.querySelector('#error');

            errorElement.innerHTML = e.message;
            errorElement.style.display = 'block';
        })
        .finally(() => {
            hideLoader();
        });
};
