// localStorage.clear()
// Buttons
let appleButton = document.querySelector('.main__appleButton');
let onboardingSkipButton = document.querySelector('.main__onboardingSkipButton');
let onboardingNextButton = document.querySelector('.main__onboardingNextButton');
let onboardingBackButton = document.querySelector('.main__onboardingBackButton');
let startButton = document.querySelector('.main__startButton');
let requestingButton = document.querySelector('.requestingButton');
let requestingButtonBack = document.querySelector('.requestingButtonBack');
let requestingPrevClickedButton = null;

// Containers
let onboardingBox = document.querySelector('.main__onboarding');
let onboardingContentContainer = document.querySelector('.main__onboardingContent');
let onboardingBox1 = document.querySelector('.onboardingBox1');
let onboardingBox2 = document.querySelector('.onboardingBox2');
let onboardingBox3 = document.querySelector('.onboardingBox3');
let onboardingBox4 = document.querySelector('.onboardingBox4');
let onboardingButtonsContainer = document.querySelector('.main__onboardingButtons');
let onboardingStartButtonsContainer = document.querySelector('.main__startButtons');

let requestingContentContainer = document.querySelector('.main__requestingData');;
let requestingButtons = document.querySelector('.main__requestingDataButtons');
let requestingGoal = document.querySelector('.requestingGoal');
let requestingGender = document.querySelector('.requestingGender');
let requestingActivity = document.querySelector('.requestingActivity');
let requestingTall = document.querySelector('.requestingTall');
let requestingWeight = document.querySelector('.requestingWeight');
let requestingAge = document.querySelector('.requestingAge');
let requestingName = document.querySelector('.requestingName');
let requestingRecommendations = document.querySelector('.requestingRecommendations');
let requestingButtonsBox = document.querySelectorAll('.requestingButtonsBox');
let requestingButtonsGoal = document.getElementById('requestingButtonsGoal');
let requestingButtonsGender = document.getElementById('requestingButtonsGender');
let requestingButtonsActivity = document.getElementById('requestingButtonsActivity');

// Inputs
let inputWeight = document.getElementById('weight');
let inputAge = document.getElementById('age');
let inputName = document.getElementById('name');

// Arrays
let userDataArray = [];
let userData = {};
let userTall = {};
let onboardingContent = [onboardingBox1, onboardingBox2, onboardingBox3, onboardingBox4];
let requestingContent = [requestingGoal, requestingGender, requestingActivity, requestingTall, requestingWeight, requestingAge, requestingName, requestingRecommendations];
let requestingInputs = [inputWeight, inputAge, inputName];

// Index
let onboardingCurrentIndex = 0;
let requestingCurrentIndex = 0;

// Elements 
let meterPicker = document.getElementById('meterPicker');
let cmPicker = document.getElementById('cmPicker');
let proteins = document.getElementById('proteins');
let fats = document.getElementById('fats');
let carbs = document.getElementById('carbs');
let calories = document.getElementById('calories');


appleButton.addEventListener('click', openApp);

function openApp() {
  appleButton.style.display = 'none';
  onboardingBox.style.display = 'flex';
  onboardingBox1.style.display = 'flex';
}

onboardingSkipButton.addEventListener('click', function() {
  onboardingBox1.style.display = 'none';
  onboardingButtonsContainer.style.display = 'none';
  onboardingBox4.style.display = 'flex';
  onboardingStartButtonsContainer.style.display = 'flex';
})

onboardingNextButton.addEventListener('click', changeOnboardingContent);

function changeOnboardingContent() {
  onboardingContent[onboardingCurrentIndex].style.display = 'none';
  onboardingSkipButton.style.display = 'none';
  onboardingBackButton.style.display = 'flex';
  onboardingCurrentIndex = (onboardingCurrentIndex + 1);
  onboardingContent[onboardingCurrentIndex].style.display = 'flex';

  if(onboardingCurrentIndex === (onboardingContent.length - 1)) {
    onboardingButtonsContainer.style.display = 'none';
    onboardingStartButtonsContainer.style.display = 'flex';
  }
}

onboardingBackButton.addEventListener('click', function() {
  onboardingContent[onboardingCurrentIndex].style.display = 'none';
  onboardingCurrentIndex = (onboardingCurrentIndex - 1);
  onboardingContent[onboardingCurrentIndex].style.display = 'flex';

  if(onboardingContent[onboardingCurrentIndex].classList.contains('onboardingBox1')) {
    onboardingBackButton.style.display = 'none';
    onboardingSkipButton.style.display = 'flex';
  }
})

function createPicker(min, max, scrollContainer, parameters) {
  for(let i = min; i < max; i++) {
    scrollContainer.insertAdjacentHTML(
      'beforeend',
    `<p data-parameters="${i}_${parameters}" class="pickerNums">${i}</p>`
    );
  }

  scrollContainer.insertAdjacentHTML(
    'beforeend',
  `<p class="pickerNums"></p>`
  );

  scrollContainer.addEventListener('scroll', function(e) {
    let items = scrollContainer.children;
    let index = Math.round((scrollContainer.scrollTop + scrollContainer.clientHeight / 2 - 20) / 50);
    for(let i = 0; i < items.length; i++) {
      items[i].classList.remove('pickerNumsActive');
    }
    items[index].classList.add('pickerNumsActive');
    collectUserDataFromScroll(items[index], parameters);
  });
}

createPicker(0, 3, meterPicker, 'm');
createPicker(0, 100, cmPicker, 'cm');

startButton.addEventListener('click', openRequestingDataForm);

function openRequestingDataForm() {
  onboardingContentContainer.style.display = 'none';
  requestingContentContainer.style.display = 'flex';
}

requestingButton.addEventListener('click', changeContentInRequestForm)

function changeContentInRequestForm() {
  requestingButtonBack.style.display = 'flex';
  requestingContent[requestingCurrentIndex].style.display = 'none';
  requestingCurrentIndex = (requestingCurrentIndex + 1);
  requestingContent[requestingCurrentIndex].style.display = 'flex';

  if(requestingCurrentIndex === (requestingContent.length - 1)) {
    requestingButtonBack.style.display = 'none';
    saveUserDataToLocalStorage(userData, userDataArray);
    calcPFC(userData);
  }
}

requestingButtonBack.addEventListener('click', onRequestingButtonBack);

function onRequestingButtonBack() {
  requestingContent[requestingCurrentIndex].style.display = 'none';
  requestingCurrentIndex = (requestingCurrentIndex - 1);
  requestingContent[requestingCurrentIndex].style.display = 'flex';

  if(requestingContent[requestingCurrentIndex].classList.contains('requestingGoal')) {
    requestingButtonBack.style.display = 'none';
  }
}

requestingButtonsBox.forEach((button) => {
  button.addEventListener('click', function(e) {
    chooseParameters(e);
    collectUserData(e, button.id);
  })
})

function collectUserData(e, key) {
  userData[key] = e.target.dataset[key];
}

function collectUserDataFromScroll(elem, key) {
  userTall[key] = elem.textContent;
  calcTall(userTall);
}

function calcTall(tallObj) {
  let tallInCm = (Number(tallObj.m)* 100) + Number(tallObj.cm);
  userData.tall = tallInCm.toString();
}

function collectUserDataFromInputs(e, key) {
  userData[key] = e.target.value;
}

function chooseParameters(e) {
  if(requestingPrevClickedButton) requestingPrevClickedButton.style.border = 'none';
  e.target.style.border = '1px solid rgba(53, 204, 140, 1)';
  requestingPrevClickedButton = e.target;
}

requestingInputs.forEach((input) => {
  input.addEventListener('input', function(e) {
    collectUserDataFromInputs(e, input.id);
  })
})

function saveUserDataToLocalStorage(userData, userDataArray) {
  let dataFromStorage = localStorage.getItem('userDataArray');
  if(dataFromStorage) {
    let data = JSON.parse(dataFromStorage);
    data.push(userData);
    localStorage.setItem('userDataArray', JSON.stringify(data));
  } else {
    userDataArray.push(userData);
    localStorage.setItem('userDataArray', JSON.stringify(userDataArray));
  }
}

function calcPFC(userData) {
  calcBasalMetabolicRate(userData);
}

function calcBasalMetabolicRate(userData) {
  let basalMetabolicRate = 0;

  if(userData.gender.toLowerCase() === 'male') {
    basalMetabolicRate = Math.round((10 * Number(userData.weight)) + (6.25 * Number(userData.tall)) - (5 * Number(userData.age)) + 5);
  } else if(userData.gender.toLowerCase() === 'female') {
    basalMetabolicRate = Math.round((10 * Number(userData.weight)) + (6.25 * Number(userData.tall)) - (5 * Number(userData.age)) - 161);
  }
  calcTotalDailyEnergyExpenditure(basalMetabolicRate);
}

function calcTotalDailyEnergyExpenditure(basalMetabolicRate) {
  let totalDailyEnergyExpenditure = 0;

  switch(userData.activity.toLowerCase()) {
    case 'sedentary': 
      totalDailyEnergyExpenditure = Math.round(basalMetabolicRate * 1.2);
      break;
    case 'low_active':
      totalDailyEnergyExpenditure = Math.round(basalMetabolicRate * 1.375);
      break;
    case 'active':
      totalDailyEnergyExpenditure = Math.round(basalMetabolicRate * 1.55);
      break;
    case 'very_active':
      totalDailyEnergyExpenditure = Math.round(basalMetabolicRate * 1.725);
      break;
  }
  adjustmentCalcsDependOnGoals(totalDailyEnergyExpenditure);
}

function adjustmentCalcsDependOnGoals(totalDailyEnergyExpenditure) {
  let normDependOnGoal = 0;

  switch(userData.goals.toLowerCase()) {
    case 'keep_weight':
      normDependOnGoal = totalDailyEnergyExpenditure;
      break;
    case 'lose_weight':
      normDependOnGoal = Math.round(totalDailyEnergyExpenditure * 0.8);
      break;
    case 'gain_weight':
      normDependOnGoal = Math.round(totalDailyEnergyExpenditure * 1.1);
      break;
  }

  let proteinsCalcs = Math.round(Number(userData.weight) * (userData.goals === 'gain_weight' ? 2.2 : 1.6));
  let fatsCalcs = Math.round(Number(userData.weight) * (userData.goals === 'gain_weight' ? 1.2 : 1.0));

  let proteinCalories = proteinsCalcs * 4;
  let fatCalories = fatsCalcs * 9;
  let carbsCalcs = Math.round((normDependOnGoal - (proteinCalories + fatCalories)) / 4);

  toWriteResults(normDependOnGoal, proteinsCalcs, fatsCalcs, carbsCalcs);
  toSaveResultsInLocalStorage(normDependOnGoal, proteinsCalcs, fatsCalcs, carbsCalcs)
}

function toWriteResults(normDependOnGoal, proteinsCalcs, fatsCalcs, carbsCalcs) {
  calories.textContent = 'Calories: ' + normDependOnGoal;
  proteins.textContent = 'Proteins: ' + proteinsCalcs + 'g';
  fats.textContent = 'Fats: ' + fatsCalcs + 'g';
  carbs.textContent = 'Carbs: ' + carbsCalcs + 'g';
}

// написати функцію для зберігання результатів розрахунків PFC

// function toSaveResultsInLocalStorage(normDependOnGoal, proteinsCalcs, fatsCalcs, carbsCalcs) {
//   userData.proteins = proteinsCalcs + 'g';
//   userData.fats = fatsCalcs + 'g';
//   userData.carbs = carbsCalcs + 'g';
//   userData.calories = normDependOnGoal;
// }

