// Обявление переменых
const themeSwitch = document.querySelector('#nightThemeSwitch');
const themeLink = document.querySelector("#themeLink");

// Добавление прослушивателя событий и функции для изменения темы
themeSwitch.onchange = function(){
    activeTheme = themeLink.getAttribute('href').substring(themeLink.getAttribute('href').indexOf('themes/')+7, themeLink.getAttribute('href').indexOf('.css'));
    if (activeTheme == 'mainTheme'){
        themeLink.setAttribute('href', "./styles/themes/darkTheme.css");
    } else {
        themeLink.setAttribute('href', "./styles/themes/mainTheme.css");
    }
}
