export const hideError = () => {
    document.querySelector('#error').style.display = 'none';
};

export const showError = () => {
    const errorElement = document.querySelector('#error');

    errorElement.innerHTML = 'Произошла ошибка, попробуйте ещё раз.';
    errorElement.style.display = 'block';
};
