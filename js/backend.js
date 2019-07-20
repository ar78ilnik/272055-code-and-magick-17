// Модуль backend.load - загружает данные на сервер

'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });
    xhr.open('POST', URL);
    xhr.send(data);
  };
})();

// Модуль backend.save - скачивает данные с сервера

(function () {
  var URL = 'https://js.dump.academy/code-and-magick/data';
  window.load = function (onError, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.response = 'json';
    xhr.open('GET', URL);
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.open('GET', URL);
    xhr.send();
  };
})();
