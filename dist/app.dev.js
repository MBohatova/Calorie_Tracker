"use strict";

// Buttons
var appleButton = document.querySelector('.main__appleButton');
var onboardingSkipButton = document.querySelector('.main__onboardingSkipButton');
var onboardingNextButton = document.querySelector('.main__onboardingNextButton');
var onboardingBackButton = document.querySelector('.main__onboardingBackButton');
var startButton = document.querySelector('.main__startButton');
var requestingButton = document.querySelector('.requestingButton');
var requestingButtonBack = document.querySelector('.requestingButtonBack');
var requestingPrevClickedButton = null; // Containers

var onboardingBox = document.querySelector('.main__onboarding');
var onboardingContentContainer = document.querySelector('.main__onboardingContent');
var onboardingBox1 = document.querySelector('.onboardingBox1');
var onboardingBox2 = document.querySelector('.onboardingBox2');
var onboardingBox3 = document.querySelector('.onboardingBox3');
var onboardingBox4 = document.querySelector('.onboardingBox4');
var onboardingButtonsContainer = document.querySelector('.main__onboardingButtons');
var onboardingStartButtonsContainer = document.querySelector('.main__startButtons');
var requestingContentContainer = document.querySelector('.main__requestingData');
;
var requestingButtons = document.querySelector('.main__requestingDataButtons');
var requestingGoal = document.querySelector('.requestingGoal');
var requestingGender = document.querySelector('.requestingGender');
var requestingActivity = document.querySelector('.requestingActivity');
var requestingTall = document.querySelector('.requestingTall');
var requestingWeight = document.querySelector('.requestingWeight');
var requestingAge = document.querySelector('.requestingAge');
var requestingName = document.querySelector('.requestingName');
var requestingButtonsBox = document.querySelectorAll('.requestingButtonsBox');
var requestingButtonsGoal = document.getElementById('requestingButtonsGoal');
var requestingButtonsGender = document.getElementById('requestingButtonsGender');
var requestingButtonsActivity = document.getElementById('requestingButtonsActivity'); // Arrays

var userInfo = {};
var userInfoArray = [];
var onboardingContent = [onboardingBox1, onboardingBox2, onboardingBox3, onboardingBox4];
var requestingContent = [requestingGoal, requestingGender, requestingActivity, requestingTall, requestingWeight, requestingAge, requestingName]; // Index

var onboardingCurrentIndex = 0;
var requestingCurrentIndex = 0;
appleButton.addEventListener('click', openApp);

function openApp() {
  appleButton.style.display = 'none';
  onboardingBox.style.display = 'flex';
  onboardingBox1.style.display = 'flex';
}

onboardingSkipButton.addEventListener('click', function () {
  onboardingBox1.style.display = 'none';
  onboardingButtonsContainer.style.display = 'none';
  onboardingBox4.style.display = 'flex';
  onboardingStartButtonsContainer.style.display = 'flex';
});
onboardingNextButton.addEventListener('click', changeOnboardingContent);

function changeOnboardingContent() {
  onboardingContent[onboardingCurrentIndex].style.display = 'none';
  onboardingSkipButton.style.display = 'none';
  onboardingBackButton.style.display = 'flex';
  onboardingCurrentIndex = onboardingCurrentIndex + 1;
  onboardingContent[onboardingCurrentIndex].style.display = 'flex';

  if (onboardingCurrentIndex === onboardingContent.length - 1) {
    onboardingButtonsContainer.style.display = 'none';
    onboardingStartButtonsContainer.style.display = 'flex';
  }
}

onboardingBackButton.addEventListener('click', function () {
  onboardingContent[onboardingCurrentIndex].style.display = 'none';
  onboardingCurrentIndex = onboardingCurrentIndex - 1;
  onboardingContent[onboardingCurrentIndex].style.display = 'flex';

  if (onboardingContent[onboardingCurrentIndex].classList.contains('onboardingBox1')) {
    onboardingBackButton.style.display = 'none';
    onboardingSkipButton.style.display = 'flex';
  }
}); // для скролера просто створити контейнер, туди згерерити числа, 
// порахувати координати числа, якщо його видно - підкреслити, 
// якщо ні - зроити напівпрозорим або взагалі невидимим
// function createPicker(pickerClass, min, max, defaultValue) {
//   let picker = document.querySelector(pickerClass);
//   for(let i = min; i < max; i++) {
//     let div = document.createElement("div");
//     div.textContent = i;
//     picker.appendChild(div);
//   }
//   picker.scrollTop = (defaultValue - min) * 40;
//   picker.addEventListener('scroll', function() {
//     let items = picker.children;
//     let index = Math.round((picker.scrollTop + picker.cliientHeight / 2 - 20) / 40);
//       for (let i = 0; i < items.length; i++) {
//         items[i].style.borderBottom = 'none';
//       }
//       if (index >= 0 && index < items.length) {
//         items[index].style.borderBottom = '2px solid rgba(53, 204, 140, 1)';
//       }
//   });
// }
// createPicker(".meter", 1, 3, 1);
// createPicker(".centimeter", 0, 100, 70); 

var meterPicker = document.getElementById('meterPicker');
var cmPicker = document.getElementById('cmPicker');
var centimeter = document.querySelector('.centimeter'); // згенерила цирфи у великий контейнер, поверх (або під низ!) цифр 
// треба контейнер з зеленими лініями, щоб коли цифра потрапляла на цей 
// контейнер - вона змінювала колір на чорніший

function createPickerMy(pickerId, min, max) {
  for (var i = min; i < max; i++) {
    var div = document.createElement("div");
    div.textContent = i;
    pickerId.appendChild(div);
  }

  pickerId.addEventListener('scroll', function () {
    var items = pickerId.children;
    var index = Math.round((pickerId.scrollTop + pickerId.clientHeight / 2 - 20) / 40);

    for (var _i = 0; _i < items.length; _i++) {
      items[_i].classList.remove('active');
    }

    console.log(items[index]);
    items[index].classList.add('active');
  });
} // createPickerMy(meterPicker, 1, 3);


createPickerMy(centimeter, 0, 100);
startButton.addEventListener('click', openRequestingDataForm);

function openRequestingDataForm() {
  onboardingContentContainer.style.display = 'none';
  requestingContentContainer.style.display = 'flex';
}

requestingButton.addEventListener('click', changeContentInRequestForm);

function changeContentInRequestForm() {
  requestingButtonBack.style.display = 'flex';
  requestingContent[requestingCurrentIndex].style.display = 'none';
  requestingCurrentIndex = requestingCurrentIndex + 1;
  requestingContent[requestingCurrentIndex].style.display = 'flex';
}

requestingButtonBack.addEventListener('click', onRequestingButtonBack);

function onRequestingButtonBack() {
  requestingContent[requestingCurrentIndex].style.display = 'none';
  requestingCurrentIndex = requestingCurrentIndex - 1;
  requestingContent[requestingCurrentIndex].style.display = 'flex';

  if (requestingContent[requestingCurrentIndex].classList.contains('requestingGoal')) {
    requestingButtonBack.style.display = 'none';
  }
}

function collectUserInfo() {
  requestingButtonsGoal.addEventListener('click', function (e) {
    chooseParameters(e);
    userInfo.goal = e.target.textContent;
  });
  requestingButtonsGender.addEventListener('click', function (e) {
    chooseParameters(e);
    userInfo.gender = e.target.textContent;
  });
  requestingButtonsActivity.addEventListener('click', function (e) {
    chooseParameters(e);
    userInfo.activity = e.target.textContent;
    console.log(userInfo);
  });
}

function chooseParameters(e) {
  if (requestingPrevClickedButton) requestingPrevClickedButton.style.border = 'none';
  e.target.style.border = '1px solid rgba(53, 204, 140, 1)';
  requestingPrevClickedButton = e.target;
}

collectUserInfo();