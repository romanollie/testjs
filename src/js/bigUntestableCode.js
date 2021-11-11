import { getItemsRequest, toggleFavoriteRequest } from './requests';
import App from './app';
import ToggleError from './toggleError';
import ToggleLoader from './toggleLoader';

const app = new App();
const loader = new ToggleLoader();
const error = new ToggleError();

export default () => {
    error.hideError();
    loader.showLoader();

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                error.setErrorHtml('Произошла ошибка, попробуйте ещё раз.');
                error.showError();
            } else {
                app.setAppHtml(data.html);
                app.showApp();

                app.addEventListenersToButtons((e) => {
                    e.preventDefault();

                    e.currentTarget.textContent = 'Загрузка...';

                    toggleFavoriteRequest(e.currentTarget.dataset.id).then(
                        ({ data: buttonData }) => {
                            if (buttonData.result === 'set') {
                                e.currentTarget.textContent = '🌝';
                            } else {
                                e.currentTarget.textContent = '🌚';
                            }
                        },
                    );
                });
            }
        })
        .catch((e) => {
            error.setErrorHtml(e.message);
            error.showError();
        })
        .finally(() => {
            loader.hideLoader();
        });
};
