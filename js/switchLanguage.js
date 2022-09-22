// Объявление переменных
const langSwitch = document.querySelector('#englishSwitch');

let currentLanguage = window.location.href.match(/RU|EN/)[0];

if (currentLanguage == 'RU'){
    langSwitch.checked = false;
}else{
    langSwitch.checked = true;
}

langSwitch.onchange = function(){
    if (currentLanguage == 'RU'){
        location = 'indexEN.html';
    } else {
        location = 'indexRU.html';
    }
}