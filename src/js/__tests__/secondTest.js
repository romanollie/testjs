/**
 * @jest-environment jsdom
 */

import App from '../app';

const app = new App();

describe('Группа Тестов', () => {
    beforeAll(() => {
        app.showApp();
    });

    afterAll(() => {
        app.hideApp();
    });

    it('Тест на добавление контента на страницу в блок #app', () => {
        app.setAppHtml('some text');

        expect(app).toMatchSnapshot();
    });
});
