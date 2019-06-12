'use strict';

var POSITION_NAME_X = 40;
var POSITION_NAME_Y = 270;

var POSITION_TIME_X = POSITION_NAME_X;
var POSITION_TIME_Y = 100;

var POSITION_RECT_X = 40;
var POSITION_RECT_Y = 250;

var HEIGHT_RECT = 150;

// Функция рисования облака и тени
var renderCloud = function (ctx) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 430, 280);
  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 180, 40);
  ctx.fillText('Список результатов:', 180, 56);
};

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var color = getRandomArbitrary(128, 255);

//  Функция генерации статистики
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], POSITION_NAME_X += 90, POSITION_NAME_Y);
    ctx.fillText(Math.round(times[i]), POSITION_TIME_X += 90, POSITION_TIME_Y);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgb(255, 0, 0)';
    } else {
      ctx.fillStyle = 'rgb(0, 0,' + color + ')';
    }
    console.log((HEIGHT_RECT * (times[i] / -50)) / 100);
    console.log(times[i]);
    ctx.fillRect(POSITION_RECT_X += 90, POSITION_RECT_Y, 40, (HEIGHT_RECT * (times[i] / -50)) / 100);
    ctx.fillStyle = 'black';
  }
};
