'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');
setupBlock.querySelector('.setup-similar').classList.remove('hidden');

// Блок подготовки данных для массива

// 1. Функция подготовки имен персонажей
var Min = 0;
var Max = 8;
var namesMas = [];
var surNamesMas = [];

var getNames = function (massiv1, min, max) {
  for (var i = 0; i < Max; i++) {
    var ranName = Min + Math.floor(Math.random() * (max + 1 - min));
    namesMas.push(NAMES[ranName]);
  }
  return namesMas;
};
getNames(namesMas, Min, Max);

var getSurnames = function (massiv2, min, max) {
  for (var i = 0; i < Max; i++) {
    var ranName1 = Min + Math.floor(Math.random() * (max + 1 - min));
    surNamesMas.push(SURNAMES[ranName1]);
  }
  return surNamesMas;
};
getSurnames(surNamesMas, Min, Max);

var namesAndSurnames = [];
for (var i = 0; i < Max; i++) {
  namesAndSurnames.push(namesMas[i] + ' ' + surNamesMas[i]);
}

// 2. Функция выбора цвета мантии

var getCoatColor = function (min, max) {
  var color1 = Math.floor(Math.random() * (max - min) + min);
  return COAT_COLORS[color1];
};

// 3. Функция выбора цвета глаз

var getEyesColor = function (min, max) {
  var color2 = Math.floor(Math.random() * (max - min) + min);
  return EYES_COLORS[color2];
};

// 4. Создание массива похожих персонажей

var personages = [
  {
    name: namesAndSurnames[0],
    propCoatColor: getCoatColor(0, 6),
    propEyesColor: getEyesColor(0, 5)
  },
  {
    name: namesAndSurnames[1],
    propCoatColor: getCoatColor(0, 6),
    propEyesColor: getEyesColor(0, 5)
  },
  {
    name: namesAndSurnames[2],
    propCoatColor: getCoatColor(0, 6),
    propEyesColor: getEyesColor(0, 5)
  },
  {
    name: namesAndSurnames[3],
    propCoatColor: getCoatColor(0, 6),
    propEyesColor: getEyesColor(0, 5)
  },
  {
    name: namesAndSurnames[4],
    propCoatColor: getCoatColor(0, 6),
    propEyesColor: getEyesColor(0, 5)
  },
  {
    name: namesAndSurnames[5],
    propCoatColor: getCoatColor(0, 6),
    propEyesColor: getEyesColor(0, 5)
  },
  {
    name: namesAndSurnames[6],
    propCoatColor: getCoatColor(0, 6),
    propEyesColor: getEyesColor(0, 5)
  },
  {
    name: namesAndSurnames[7],
    propCoatColor: getCoatColor(0, 6),
    propEyesColor: getEyesColor(0, 5)
  }
];

// Создание блока похожих персонажей
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (arr) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = arr.name;
  wizardElement.querySelector('.wizard-coat').style.fill = arr.propCoatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = arr.propEyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var k = 0; k < SURNAMES.length; k++) {
  fragment.appendChild(renderWizard(personages[k]));
}
similarListElement.appendChild(fragment);


