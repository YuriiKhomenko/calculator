'use strict';
var NUMBERS = {
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6,
    55: 7,
    56: 8,
    57: 9,
    48: 0,
    107: '+',
    109: '-',
    111: '/',
    106: '*',
    110: '.'
};
var DELETE_CODES = [8, 46];
var EQUALS_CODES = [187, 13];
var ESC_CODE = [27];

var input = document.querySelector('.input');
var cancelButton = document.querySelector('.ac');
var buttonsNumeric = document.querySelectorAll('.numeric');
var equalsButton = document.querySelector('.equals');
var deleteButton = document.querySelector('.delete');

var deleteChar = function () {
   if (input.value !== '') {
       input.value = input.value.slice(0, -1);
   }
};
var getResult = function () {
    if (input.value !== '') {
        input.value = eval(input.value);
    } 
};
var clearInput = function () {
    input.value = '';
};

var stringArray = Object.keys(NUMBERS);
var numbersArray = [];
for (var i = 0; i < stringArray.length; i++) {
    numbersArray.push(parseInt(stringArray[i]));
}
for (var i = 0; i < buttonsNumeric.length; i++) {
    var button = buttonsNumeric[i];
    button.addEventListener('click', function (evt) {
        input.value += evt.target.textContent;
    });
}

cancelButton.addEventListener('click', clearInput);
equalsButton.addEventListener('click', getResult);
deleteButton.addEventListener('click', deleteChar);
document.addEventListener('keydown', function (evt) {
    if (evt.keyCode == DELETE_CODES[0] || evt.keyCode == DELETE_CODES[1]) {
        deleteChar();
    } else if (evt.keyCode == EQUALS_CODES[0] || evt.keyCode == EQUALS_CODES[1]) {
        getResult();
    } else if (evt.keyCode == ESC_CODE[0]) {
        clearInput();
    } else {
        var key = numbersArray.indexOf(evt.keyCode);
        if (key >= 0) {
            input.value += NUMBERS[evt.keyCode];
        }
    }
});
