// Объявление основных переменных
const numInput = document.querySelector('.inputs input:first-child');
const inputNotation = document.querySelector('#inputNotation');
const outputNotation = document.querySelector('#outputNotation');
const button = document.querySelector('.button');
const resultPlace = document.querySelector('.result');

// Функция проверяющая корректность введённого числа
const isNumberCorrect = function(v){
    if (/^([A-Za-z0-9]+[.,]{1}[A-Za-z0-9]+|[A-Za-z0-9]+)$/.test(v)){
        return true
    } else {
        return false
    }
}

// Функция проверяющая принадлежит ли число указанной системе счисления
const isInNumberSystem = function(value,numberSystem){
    if ((typeof(value)!='string') || (typeof(numberSystem)!='number')){
        return -1
    }
    for (i of value){
        if (i==','||i=='.'){
            continue
        }
        if (isNaN(parseInt(i,numberSystem))){
            return false
        }
    }
    return true
}

//  Функция для перевода числа в десятичную систему счисления
const convertToDecimal = function(value, valueNumberSystem){
    if ((typeof(value)!='string') || (typeof(valueNumberSystem)!='number')){
        return -1
    }
    if (value.includes('.')){
        let intPart = value.substring(0,value.indexOf('.')).toLowerCase();
        let fractPart = value.substring(value.indexOf('.')+1).toLowerCase();
        let result = 0;
        let intPower = intPart.length-1;
        let fractPower = -1;
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        for (i of intPart){
            if (!isNaN(parseInt(i))){
                result += Number(i)*valueNumberSystem**intPower;
            }else{
                result += (alphabet.indexOf(i)+10)*valueNumberSystem**intPower;
            }
            intPower--;
        }
        for (i of fractPart){
            if (!isNaN(parseInt(i))){
                result += Number(i)*valueNumberSystem**fractPower;
            }else{
                result += (alphabet.indexOf(i)+10)*valueNumberSystem**fractPower;
            }
            fractPower--;
        }
        return(result);
    } else {
        return parseInt(value,valueNumberSystem)
    }
    
}

// Функция для перевода числа из десятичной системы в другую
const convertFromDecimal = function(value, numberSystem){
    if (typeof(numberSystem)!='number'){
        return -1
    }
    return Number(value).toString(numberSystem);
}

// Функция выполняющая перевод числа из одной сс в другую
const convertNumber = function(value, valueNumberSystem, convertNumberSystem){
    if ((typeof(value)!='string') || (typeof(valueNumberSystem)!='number') || (typeof(convertNumberSystem)!='number')){
        return -1
    }
    if (isNumberCorrect(value)) {
        let v = value.replace(',','.');
        if (isInNumberSystem(v,valueNumberSystem)){
            if (valueNumberSystem == 10){
                return convertFromDecimal(v,convertNumberSystem);
            } else if (convertNumberSystem == 10){
                return convertToDecimal(v, valueNumberSystem);
            } else if (valueNumberSystem == convertNumberSystem){
                return v;
            } else {
                return convertFromDecimal(convertToDecimal(v,valueNumberSystem), convertNumberSystem);
            }
        } else {
            return -3
        }
    } else {
        return -2
    }
}

// Добавление прослушивателя на кнопку
button.addEventListener('click', ()=>{
    let result = convertNumber(numInput.value, Number(inputNotation.value), Number(outputNotation.value));
    if (result == -2){
        resultPlace.innerHTML = '';
        alert('Некорректная запись числа')
    } else if (result == -3){
        resultPlace.innerHTML = '';
        alert('Число не соответствует указанной системе счисления')
    } else {
        resultPlace.innerHTML=result;
    }
})

