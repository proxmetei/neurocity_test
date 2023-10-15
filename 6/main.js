const nameError = document.querySelector("#name + span.error");
const phoneError = document.querySelector("#phone + span.error");
const passwordError = document.querySelector("#password + span.error");
const passwordCheckError = document.querySelector("#passwordCheck + span.error");

document.getElementById('myform').addEventListener('submit', (event) => {
    event.preventDefault();
    /^[a-zA-Zа-яёА-яЁ]{3,30}$/.test(event.target.elements.name.value) ?
    nameError.textContent="" :nameError.textContent = "Ошибка в имени пользователя";

    /^\+{0,1}[0-9]{10,15}$/.test(event.target.elements.phone.value) ? phoneError.textContent="" 
    : phoneError.textContent= "Ошибка в номере телефона";

    /^(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]{8,40}$/.test(event.target.elements.password.value) ? passwordError.textContent = ""
     :passwordError.textContent = "Ошибка в пароле";

    event.target.elements.password.value !== event.target.elements.passwordCheck.value ?
        passwordCheckError.textContent = "Пароли не совпадают" : passwordCheckError.textContent = "";
})