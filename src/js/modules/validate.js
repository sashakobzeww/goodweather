import IMask from 'imask';
import { Notyf } from 'notyf';

const notyf = new Notyf({
  position: {
    x: "center",
    y: "top"
  },
  types: [
    {
      type: "error",
      icon: false
    }
  ],
  duration: 2000
});

const tels = document.querySelectorAll("input[type='tel']");
var maskOptions = {
  mask: '+{7} (000) 000 - 00 - 00',
  lazy: false,
};
tels.forEach(function (tel) {
  const mask = new IMask(tel, maskOptions);
});

var classPhone = 'js-phone';
var phoneRegex = /\+7 \([0-9]{3}\) [0-9]{3} - [0-9]{2}\ - [0-9]{2}/g;
var phoneInputs = document.getElementsByClassName(classPhone);
Array.prototype.forEach.call(phoneInputs, function (element) {
  element.addEventListener('change', function (e) {
    var result = e.target.value.match(phoneRegex);
    if (result === null) {
      e.target.value = '';
    }
  });
});

function formSerialize(form) {
  var serialized = [];
  var formData = new FormData(form);
  formData.forEach(function (value, key) {
    serialized.push(key + '=' + value);
  })
  return serialized.join('&');
}

function validation(form) {
  var inputs = form.querySelectorAll('input.required, textarea.required');
  var errors = 0;
  inputs.forEach(function (element) {
    var parent = element.parentNode;
    var hasError = false;
    if (element.getAttribute('type') === 'checkbox') {
      if (!element.checked) {
        hasError = true;
      }
    } else if (element.getAttribute('type') === 'tel' || element.getAttribute('type') === 'text') {
      switch (checkField(element)) {
        case 1:
          errors++;
          parent.classList.add('error_field');
          notyf.error('Пожалуйста, заполните поле');
          return;
          break;
        case 2:
          errors++;
          parent.classList.add('error_field');
          notyf.error('Пожалуйста, введите корректный номер');
          return;
          break;
        case 3:
          errors++;
          parent.classList.add('error_field');
          notyf.error('Пожалуйста, введите корректный код региона');
          return;
          break;
      }
    } else {
      var length = element.value.length;
      if (length === 0) {
        hasError = true;
      }
    }
    if (hasError) {
      errors++;
      parent.classList.add('error_field');
    } else {
      parent.classList.remove('error_field');
    }
  });
  if (errors !== 0) {
    form.querySelector('.error_field').focus();
    return false;
  }
  var data = formSerialize(form);
  var request = new XMLHttpRequest();
  request.open('POST', form.getAttribute("action"), true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      eval(form.getAttribute('data-onsubmit'));
    }
  }
  request.send(data);
  return true;
}
var codes = ['904', '900', '901', '902', '903', '905', '906', '908', '909', '910', '911', '912', '913', '914', '915', '916', '917', '918', '919', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929', '930', '931', '932', '933', '934', '936', '937', '938', '939', '950', '951', '952', '953', '958', '960', '961', '962', '963', '964', '965', '966', '967', '968', '969', '978', '980', '981', '982', '983', '984', '985', '986', '987', '988', '989', '992', '994', '995', '996', '997', '999'];

function checkField(input) {
  var parent = input.parentNode;
  if (input.value === '') {
    return 1;
  } else if (input.type === 'tel' && isInvalidPhoneNumber(input)) {
    return 2;
  } else if (input.type === 'tel' && isInvalidRegion(input)) {
    return 3;
  }
  return true;
}

function isInvalidPhoneNumber(input) {
  var numbers = input.value.match(/\d+/g).join('');
  var length = numbers.length;
  if (length > 11) input.value = input.value.substring(0, input.value.length - 1);;
  return numbers.length < 11;
}

function isInvalidRegion(input) {
  var code = input.value.match(/9\d{2}/);
  return code ? codes.indexOf(code[0]) == -1 : true;
}
document.querySelectorAll('form').forEach(function (element) {
  element.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validation(this)) {
      // действие после успеха
    }
    return false;
  })
});