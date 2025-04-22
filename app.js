// localStorage.clear();
// Buttons
let appleButton = document.querySelector('.main__appleButton');
let onboardingSkipButton = document.querySelector('.main__onboardingSkipButton');
let onboardingNextButton = document.querySelector('.main__onboardingNextButton');
let onboardingBackButton = document.querySelector('.main__onboardingBackButton');
let startButton = document.querySelector('.main__startButton');
let requestingButton = document.querySelector('.requestingButton');
let requestingButtonBack = document.querySelector('.requestingButtonBack');
let requestingPrevClickedButton = null;
let prevButton = null;
let calendarCancelBtn = document.getElementById('calendarCancelBtn');
let calendarOkBtn = document.getElementById('calendarOkBtn');
let plusButton = document.getElementById('plusButton');
let minusButton = document.getElementById('minusButton');
let createMealButton = document.getElementById('createMeal');
let cancelEatenAmountBtn = document.getElementById('cancelEatenAmountBtn');
let okEatenAmountBtn = document.getElementById('okEatenAmountBtn');
let closeMealPageBtn = document.getElementById('closeMealPageBtn');
let createEatenMealsListBtn = document.getElementById('createEatenMealsListBtn');
let backSearchButton = document.getElementById('backSearchButton');
let saveMealsButton = document.getElementById('saveMealsButton');
let backProfileButton = document.getElementById('backProfileButton');
let openUserInfoButton = document.getElementById('openUserInfoButton');
let backMeButton = document.getElementById('backMeButton');
let backButtonCalendar = document.querySelector('.backButtonCalendar');
let nextButtonCalendar = document.querySelector('.nextButtonCalendar');
let doneButton = document.getElementById('doneButton');
let saveEditedUserButton = document.getElementById('saveEditedUserButton');
let updateCancelButton = document.getElementById('updateCancelButton');
let updateOkButton = document.getElementById('updateOkButton');
let openCalorieIntakeButton = document.getElementById('openCalorieIntakeButton');
let changeCalorieIntakeBackButton = document.getElementById('changeCalorieIntakeBackButton');
let changeNutrientsIntakeDoneBtn = document.getElementById('changeNutrientsIntakeDoneBtn');
let saveEditedNutrientsButton = document.getElementById('saveEditedNutrientsButton');

// Containers
let onboardingBox = document.querySelector('.main__onboarding');
let onboardingContentContainer = document.querySelector('.main__onboardingContent');
let onboardingBox1 = document.querySelector('.onboardingBox1');
let onboardingBox2 = document.querySelector('.onboardingBox2');
let onboardingBox3 = document.querySelector('.onboardingBox3');
let onboardingBox4 = document.querySelector('.onboardingBox4');
let onboardingButtonsContainer = document.querySelector('.main__onboardingButtons');
let onboardingStartButtonsContainer = document.querySelector('.main__startButtons');
let homePage = document.querySelector('.main__homePage');
let homePageBlock = document.querySelector('.main__homePageBox');
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
let nums = document.querySelector('.nums');
let searchFoodContainer = document.getElementById('searchFoodContainer');
let foodContainer = document.getElementById('foodContainer');
let eatenInfoForm = document.getElementById('eatenInfoForm');
let eatenInfoCalories = document.getElementById('eatenInfoCalories');
let mealPage = document.getElementById('mealPage');
let eatenMealsList = document.getElementById('eatenMealsList');
let mealCaloriesBlock = document.getElementById('mealcaloriesBlock');
let mealsBlock = document.getElementById('mealsBlock');
let editOrDeleteButtonsBox = document.querySelector('.editOrDeleteButtonsBox');
let profileBlock = document.querySelector('.profileBlock');
let changeUserInfoBlock = document.getElementById('changeUserInfoBlock');
let changeInfoElemsBlock = document.getElementById('changeInfoElemsBlock');
let toolsForChangeUserInfo = document.getElementById('toolsForChangeUserInfo');
let changeWindow = document.getElementById('changeWindow');
let changingInputContainer = document.getElementById('changingInputContainer');
let changeInfoChooseToolBox = document.querySelector('.changeInfoChooseToolBox');
let changeInfoGoalsBlock = document.getElementById('changeInfoGoalsBlock');
let updInfoWindow = document.getElementById('updInfoWindow');
let changeCalorieIntakeBlock = document.getElementById('changeCalorieIntakeBlock');
let changeNutrientsIntakeBlock = document.getElementById('changeNutrientsIntakeBlock');
let calendarItem = document.querySelector('.calendarItem');
let logOut = document.querySelector('.logOutBlock');

// Inputs
let inputWeight = document.getElementById('weight');
let inputAge = document.getElementById('age');
let inputName = document.getElementById('name');
let searchInput = document.getElementById('searchInput');
let eatenAmountInput = document.getElementById('eatenAmountInput');
let inputUpdate = document.getElementById('inputUpdate');
let sliderTheme = document.querySelector('.inputForSwitch');

// Arrays & objects
let userDataArray = [];
let userData = {};
let mealData = {};
let userTall = {};
let caloriesArr = [];
let proteinsArr = [];
let fatsArr = [];
let carbsArr = [];
let onboardingContent = [onboardingBox1, onboardingBox2, onboardingBox3, onboardingBox4];
let requestingContent = [requestingGoal, requestingGender, requestingActivity, requestingTall, requestingWeight, requestingAge, requestingName, requestingRecommendations, homePage];
let requestingInputs = [inputWeight, inputAge, inputName];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const foodData = [
  { name: "Apple", calories: 52, protein: 0.3, fat: 0.2, carbs: 14 },
  { name: "Banana", calories: 89, protein: 1.1, fat: 0.3, carbs: 23 },
  { name: "Orange", calories: 47, protein: 0.9, fat: 0.1, carbs: 12 },
  { name: "Chicken breast", calories: 165, protein: 31, fat: 3.6, carbs: 0 },
  { name: "Beef", calories: 250, protein: 26, fat: 17, carbs: 0 },
  { name: "Pork chop", calories: 242, protein: 27, fat: 14, carbs: 0 },
  { name: "Salmon", calories: 208, protein: 20, fat: 13, carbs: 0 },
  { name: "Tuna", calories: 144, protein: 30, fat: 1.3, carbs: 0 },
  { name: "Egg", calories: 155, protein: 13, fat: 11, carbs: 1.1 },
  { name: "Milk 2.5%", calories: 50, protein: 3.3, fat: 2.5, carbs: 5 },
  { name: "Hard cheese", calories: 402, protein: 25, fat: 33, carbs: 1.3 },
  { name: "Cottage cheese 5%", calories: 120, protein: 17, fat: 5, carbs: 3.5 },
  { name: "White rice", calories: 130, protein: 2.7, fat: 0.3, carbs: 28 },
  { name: "Buckwheat", calories: 343, protein: 13, fat: 3.4, carbs: 71 },
  { name: "Oatmeal", calories: 379, protein: 13, fat: 6.5, carbs: 67 },
  { name: "Potato", calories: 77, protein: 2, fat: 0.1, carbs: 17 },
  { name: "Carrot", calories: 41, protein: 0.9, fat: 0.2, carbs: 10 },
  { name: "Tomato", calories: 18, protein: 0.9, fat: 0.2, carbs: 4 },
  { name: "Cucumber", calories: 15, protein: 0.7, fat: 0.1, carbs: 3.6 },
  { name: "White cabbage", calories: 25, protein: 1.3, fat: 0.1, carbs: 6 },
  { name: "Walnuts", calories: 654, protein: 15, fat: 65, carbs: 14 },
  { name: "Almonds", calories: 579, protein: 21, fat: 49, carbs: 22 },
  { name: "Peanuts", calories: 567, protein: 25, fat: 49, carbs: 16 },
  { name: "Dark chocolate 70%", calories: 598, protein: 7.8, fat: 42, carbs: 46 },
  { name: "Rye bread", calories: 259, protein: 8.5, fat: 3.3, carbs: 48 },
  { name: "Olive oil", calories: 884, protein: 0, fat: 100, carbs: 0 },
  { name: "Sunflower oil", calories: 884, protein: 0, fat: 100, carbs: 0 },
  { name: "Honey", calories: 304, protein: 0.3, fat: 0, carbs: 82 },
  { name: "Sugar", calories: 387, protein: 0, fat: 0, carbs: 100 },
  { name: "Salt", calories: 0, protein: 0, fat: 0, carbs: 0 },
  { name: "Black coffee", calories: 2, protein: 0.3, fat: 0, carbs: 0 },
  { name: "Green tea", calories: 1, protein: 0.2, fat: 0, carbs: 0.3 },
  { name: "Avocado", calories: 160, protein: 2, fat: 15, carbs: 9 },
  { name: "Pistachios", calories: 562, protein: 20, fat: 45, carbs: 28 },
  { name: "Kiwi", calories: 61, protein: 1.1, fat: 0.5, carbs: 15 },
  { name: "Blueberry", calories: 57, protein: 0.7, fat: 0.3, carbs: 14 },
  { name: "Raspberry", calories: 52, protein: 1.2, fat: 0.7, carbs: 12 },
  { name: "Lentils", calories: 116, protein: 9, fat: 0.4, carbs: 20 },
  { name: "Red beans", calories: 127, protein: 8.7, fat: 0.5, carbs: 23 },
  { name: "Celery", calories: 16, protein: 0.7, fat: 0.2, carbs: 3.6 },
  { name: "Broccoli", calories: 55, protein: 3.7, fat: 0.6, carbs: 11 }
];

let goalEdited = document.getElementById('goalEdited');
let ageEdited = document.getElementById('ageEdited');
let tallEdited = document.getElementById('tallEdited');
let weightEdited = document.getElementById('weightEdited');
let genderEdited = document.getElementById('genderEdited');
let activityEdited = document.getElementById('activityEdited');

let userInfoArrayForMeBlock = [goalEdited, ageEdited, tallEdited, weightEdited, genderEdited, activityEdited];

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
let normDependOnGoal = 0;
let proteinsCalcs;
let fatsCalcs;
let carbsCalcs;
let todaysDate = document.getElementById('todaysDate');
let proteinsTextElem = document.getElementById('proteinsTextElem');
let fatsTextElem = document.getElementById('fatsTextElem');
let carbsTextElem = document.getElementById('carbsTextElem');
let caloriesTextElem = document.getElementById('caloriesTextElem');
let calendarButton = document.querySelector('.calendarButton');
let calendar = document.querySelector('.calendar');
let monthYearSelectContainer = document.getElementById('monthYearSelectContainer');
let userName = document.getElementById('userName');
let waterNormIndicator = document.getElementById('waterNormIndicator');
let mealName = document.getElementById('mealName');
let proteinsColor = document.getElementById('proteinsColor');
let fatsColor = document.getElementById('fatsColor');
let carbsColor = document.getElementById('carbsColor');
let caloriesColor = document.getElementById('caloriesColor');
let waterColorIndicator = document.getElementById('waterColorIndicator');
let waterPercentNum = document.getElementById('waterPercentNum');
let waterIntakeTime = document.getElementById('waterIntakeTime');
let drunkWater = 0;
let currentFood = "";
let currentGrams = 0;
let controlBar = document.getElementById('controlBar');
let personInfoMenu = document.getElementById('personInfoMenu');
let personProfileName = document.getElementById('personProfileName');
let nameOfChangingInfo = document.getElementById('nameOfChangingInfo');
let changeInfoMeterPicker = document.getElementById('changeInfoMeterPicker');
let changeInfoCmPicker = document.getElementById('changeInfoCmPicker');
let changeInfoFromInput = 0;
let currentMonthIndex;
let currentYear;

appleButton.addEventListener('click', openApp);

function openApp() {
  let dataFromStorage = localStorage.getItem('userDataArray');
  if(dataFromStorage) {
    let data = JSON.parse(dataFromStorage);
    appleButton.style.display = 'none';
    writeDefaultValuesDataInDom();
    toWriteDataInDomElems(data[0]);
    homePage.style.display = 'flex';
    scrollTo(0, 0);
    generateMealsFromLocalStorage(data[0]);
    calcWaterNorm(data[0]);
    writeWaterDataInDom(data[0]);
  } else {
    appleButton.style.display = 'none';
    onboardingBox.style.display = 'flex';
    onboardingBox1.style.display = 'flex';
  }
}

function generateMealsFromLocalStorage(userInfoObject) {
  mealsBlock.innerHTML = '';

  Object.keys(userInfoObject).forEach((key) => {
    if(key.includes('Meal')) {
      generateMeal(key, userInfoObject[key]['eaten_Values']['calories'], userInfoObject[key]['time'], userInfoObject[key]['date'])
    }
  })
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
  let dataInfo = localStorage.getItem('userDataArray') || null;
  let data = JSON.parse(dataInfo) || null;
  scrollContainer.innerHTML = '';

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
    
    if(!data) {
      checkIfHaveAllDataBlocks(requestingButton, scrollContainer.closest('.main__requestingBox').classList[1]);
    }
  });
}

startButton.addEventListener('click', openRequestingDataForm);

function openRequestingDataForm() {
  onboardingContentContainer.style.display = 'none';
  scrollTo(0, 0);
  requestingContentContainer.style.display = 'flex';
  createPicker(0, 3, meterPicker, 'm');
  createPicker(0, 100, cmPicker, 'cm');
  checkIfHaveAllDataBlocks(requestingButton, requestingContent[requestingCurrentIndex].classList[1]);
}

requestingButton.addEventListener('click', changeContentInRequestForm)

function changeContentInRequestForm() {
  requestingButtonBack.style.display = 'flex';
  requestingContent[requestingCurrentIndex].style.display = 'none';
  requestingCurrentIndex = (requestingCurrentIndex + 1);
  requestingContent[requestingCurrentIndex].style.display = 'flex';

  if((requestingCurrentIndex !== (requestingContent.length - 2)) && (requestingCurrentIndex !== (requestingContent.length - 1))) {
    checkIfHaveAllDataBlocks(this, requestingContent[requestingCurrentIndex].classList[1]);
  }

  if(requestingCurrentIndex === (requestingContent.length - 2)) {
    calcPFC(userData);
    activateButton(requestingButton);
  }

  if(requestingCurrentIndex === (requestingContent.length - 1)) {
    requestingButtons.style.display = 'none';
    toSaveCalcResultsInLocalStorage(normDependOnGoal, proteinsCalcs, fatsCalcs, carbsCalcs, userData);
    toWriteDataInDomElems(userData);
    writeDefaultValuesDataInDom();
    calcWaterNorm(userData);
  }
}

function checkIfHaveAllDataBlocks(button, uniqueBlockClassName) {
  let blockName = findBlockNameInfo(uniqueBlockClassName);

  if(!Object.keys(userData).length) {
    deactivateButton(button);
  }

  Object.keys(userData).forEach((key) => {
    if(key.includes(blockName)) {
      activateButton(button);
    } else {
      deactivateButton(button);
    }
  })
}

function findBlockNameInfo(uniqueBlockClassName) {
  let blockName = '';
  for(let i = 0; i < uniqueBlockClassName.length; i++) {
    if(uniqueBlockClassName[i] === uniqueBlockClassName[i].toUpperCase()) {
      blockName = uniqueBlockClassName.slice(i).toLowerCase();
      return blockName;
    }
  }
}

function activateButton(button) {
  button.style.backgroundColor = 'rgba(53, 204, 140, 1)';
  button.removeAttribute('disabled', true);
}

function deactivateButton(button) {
  button.style.backgroundColor = 'rgba(171, 232, 206, 1)';
  button.setAttribute('disabled', true);
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
  let blockName = button.closest('.main__requestingBox').classList[1];

  button.addEventListener('click', function(e) {
    chooseParameters(e);
    collectUserData(e, button.id);
    checkIfHaveAllDataBlocks(requestingButton, blockName)
  })
})

function collectUserData(e, key) {
  let result = (e.target.dataset[key]).split('_').join(' ');
  userData[key] = result;
}

function capitalizeFirstLetter(string) {
  if(!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function collectUserDataFromScroll(elem, key) {
  userTall[key] = elem.textContent;
  calcTall(userTall);
}

function calcTall(tallObj) {
  if(tallObj.m && tallObj.cm) {
    let tallInCm = (Number(tallObj.m) * 100) + Number(tallObj.cm);
    userData.tall = tallInCm.toString();
  }
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
  let blockName = input.closest('.main__requestingBox').classList[1];
  input.addEventListener('input', function(e) {
    collectUserDataFromInputs(e, input.id);
    checkIfHaveAllDataBlocks(requestingButton, blockName);
  })
})

function saveUserDataToLocalStorage(userData, userDataArray) {
  let dataFromStorage = localStorage.getItem('userDataArray');
  if(dataFromStorage) {
    let data = JSON.parse(dataFromStorage);

    Object.keys(userData).forEach((key) => {
      data[0][key] = userData[key];
    });

    Object.keys(data[0]).forEach(key => {
      if (key.includes('Meal') && !userData.hasOwnProperty(key)) {
        delete data[0][key];
      }
    });

    localStorage.setItem('userDataArray', JSON.stringify(data));
  } else {
    userDataArray.push(userData);
    localStorage.setItem('userDataArray', JSON.stringify(userDataArray));
  }
  userData = {};
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
  calcTotalDailyEnergyExpenditure(basalMetabolicRate, userData);
}

function calcTotalDailyEnergyExpenditure(basalMetabolicRate, userData) {
  let totalDailyEnergyExpenditure = 0;
  switch(userData.activity.toLowerCase()) {
    case 'sedentary':
      totalDailyEnergyExpenditure = Math.round(basalMetabolicRate * 1.2);
      break;
    case 'low active':
      totalDailyEnergyExpenditure = Math.round(basalMetabolicRate * 1.375);
      break;
    case 'active':
      totalDailyEnergyExpenditure = Math.round(basalMetabolicRate * 1.55);
      break;
    case 'very active':
      totalDailyEnergyExpenditure = Math.round(basalMetabolicRate * 1.725);
      break;
  }
  adjustmentCalcsDependOnGoals(totalDailyEnergyExpenditure, userData);
}

function adjustmentCalcsDependOnGoals(totalDailyEnergyExpenditure, userData) {
  switch(userData.goals.toLowerCase()) {
    case 'keep weight':
      normDependOnGoal = totalDailyEnergyExpenditure;
      break;
    case 'lose weight':
      normDependOnGoal = Math.round(totalDailyEnergyExpenditure * 0.8);
      break;
    case 'gain weight':
      normDependOnGoal = Math.round(totalDailyEnergyExpenditure * 1.1);
      break;
  }

  proteinsCalcs = Math.round(Number(userData.weight) * (userData.goals === 'gain weight' ? 2.2 : 1.6));
  fatsCalcs = Math.round(Number(userData.weight) * (userData.goals === 'gain weight' ? 1.2 : 1.0));

  let proteinCalories = proteinsCalcs * 4;
  let fatCalories = fatsCalcs * 9;
  carbsCalcs = Math.round((normDependOnGoal - (proteinCalories + fatCalories)) / 4);

  toWriteResults(normDependOnGoal, proteinsCalcs, fatsCalcs, carbsCalcs);
  toSaveCalcResultsInLocalStorage(normDependOnGoal, proteinsCalcs, fatsCalcs, carbsCalcs, userData)
}

function toWriteResults(normDependOnGoal, proteinsCalcs, fatsCalcs, carbsCalcs) {
  calories.textContent = 'Calories: ' + normDependOnGoal;
  proteins.textContent = 'Proteins: ' + proteinsCalcs + 'g';
  fats.textContent = 'Fats: ' + fatsCalcs + 'g';
  carbs.textContent = 'Carbs: ' + carbsCalcs + 'g';
}

function toSaveCalcResultsInLocalStorage(normDependOnGoal, proteinsCalcs, fatsCalcs, carbsCalcs, userData) {
  userData.proteins = proteinsCalcs;
  userData.fats = fatsCalcs;
  userData.carbs = carbsCalcs;
  userData.calories = normDependOnGoal;
  saveUserDataToLocalStorage(userData, userDataArray);
}

function toWriteDataInDomElems(userData) {
  userName.textContent = userData.name;
  toWriteEatenAndNormValuesInDom();
};

function toWriteEatenAndNormValuesInDom() {
  let calcCaloriesArr = [];
  let calcProteinsArr = [];
  let calcCarbsArr = [];
  let calcFatsArr = [];

  let dataFromStorage = JSON.parse(localStorage.getItem('userDataArray'))[0];
  Object.keys(dataFromStorage).forEach((key) => {
    if (key.includes('Meal')) {
      caloriesTextElem.textContent = calcSumOfValues(dataFromStorage, calcCaloriesArr, key, 'calories') + ' / ' + dataFromStorage.calories;
      proteinsTextElem.textContent = calcSumOfValues(dataFromStorage, calcProteinsArr, key, 'proteins') + ' / ' + dataFromStorage.proteins;
      fatsTextElem.textContent = calcSumOfValues(dataFromStorage, calcCarbsArr, key, 'fats') + ' / ' + dataFromStorage.fats;
      carbsTextElem.textContent = calcSumOfValues(dataFromStorage, calcFatsArr, key, 'carbs') + ' / ' + dataFromStorage.carbs;
    } else {
      writeDefaultValuesDataInDom();
    }
  })
  calcColorIndicatorWidth(caloriesTextElem.textContent, caloriesColor);
  calcColorIndicatorWidth(proteinsTextElem.textContent, proteinsColor);
  calcColorIndicatorWidth(fatsTextElem.textContent, fatsColor);
  calcColorIndicatorWidth(carbsTextElem.textContent, carbsColor);
}

function calcColorIndicatorWidth(eatenNum, elem) {
  let eatenAndNormNumsArray = eatenNum.split(' / ');
  let elemWidth = Math.round((Number(eatenAndNormNumsArray[0]) / Number(eatenAndNormNumsArray[1])) * 100);

  if(elemWidth > 0) {
    elem.style.width = elemWidth + '%';
  }

  if(elemWidth > 100) {
    elem.style.width = '100%';
  }
}

function calcSumOfValues(dataObj, arr, keyMeal, keyValue) {
  arr.push(dataObj[keyMeal]['eaten_Values'][keyValue]);
  return arr.reduce((prevElem, currentElem) => prevElem + currentElem);
}

function writeDefaultValuesDataInDom() {
  let dataFromStorage = JSON.parse(localStorage.getItem('userDataArray'))[0];
  caloriesTextElem.textContent = dataFromStorage.calories;
  proteinsTextElem.textContent = dataFromStorage.proteins;
  fatsTextElem.textContent = dataFromStorage.fats;
  carbsTextElem.textContent = dataFromStorage.carbs;
}

calendarButton.addEventListener('click', onCalendarButtonHandler);

function onCalendarButtonHandler() {
  homePageBlock.style.display = 'none';
  calendar.style.display = 'flex';
  toWriteTodaysDate();
  generateDefaultCalendar();
  generateMonthAndYearElems();
}

function generateMonthAndYearElems() {
  let thisYear = new Date().getFullYear();
  let thisMonthIndex = new Date().getMonth();

  monthYearSelectContainer.innerHTML = '';
  months.forEach((month) => {
    monthYearSelectContainer.insertAdjacentHTML('beforeend',
      `<option class="optionMonth">${month} ${thisYear}</option>`)
  })

  monthYearSelectContainer.value = `${months[thisMonthIndex]} ${thisYear}`;
  monthYearSelectContainer.addEventListener('change', createDaysInCalendar);
}

function toWriteTodaysDate() {
  const today = new Date();
  const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const day = daysShort[today.getDay()];
  const month = monthsShort[today.getMonth()];
  const date = today.getDate();
  
  const formattedDate = `${day}, ${month} ${date}`;

  todaysDate.textContent = formattedDate;
}

function createDaysInCalendar() {
  let dateArr = this.value.split(' ');
  let monthIndex = months.indexOf(dateArr[0]);
  let currMonth = new Date().toLocaleString("en-US", { month: "long" });
  let year = Number(dateArr[1]);
  let daysInMonth;
  let firstDayOfWeek;

  if (monthIndex !== -1) {
    daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    firstDayOfWeek = new Date(year, monthIndex, 1).getDay();
  }

  nums.innerHTML = '';
  for(let i = 1; i < (firstDayOfWeek === 0 ? 6 : firstDayOfWeek); i++) {
    nums.insertAdjacentHTML('beforeend', 
      `<div class="num empty"></div>`
    )
  }

  for(let i = 1; i <= daysInMonth; i++) {
    nums.insertAdjacentHTML('beforeend', 
      `<div class="num">${i}</div>`
   );
  }

  if(dateArr[0] === currMonth) {
    toStyleCurrentDate();
  }

  addEventListenersToDays();
}

function generateDefaultCalendar() {
  let monthIndex = new Date().getMonth();
  let year = new Date().getFullYear();
  let daysInMonth;
  let firstDayOfWeek;

  if (monthIndex !== -1) {
    daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    firstDayOfWeek = new Date(year, monthIndex, 1).getDay();
  }

  nums.innerHTML = '';
  for(let i = 1; i < (firstDayOfWeek === 0 ? 6 : firstDayOfWeek); i++) {
    nums.insertAdjacentHTML('beforeend', 
      `<div class="num empty"></div>`
    )
  }

  for(let i = 1; i <= daysInMonth; i++) {
    nums.insertAdjacentHTML('beforeend', 
      `<div class="num">${i}</div>`
   );
  }
  toStyleCurrentDate();
  addEventListenersToDays();
}

function toStyleCurrentDate() {
  let date = new Date().getDate();
  let allDays = document.querySelectorAll('.num');

  allDays.forEach((day) => {
    if(Number(day.textContent) === date) {
      day.classList.add('currentDate');
    }
  })
}

nextButtonCalendar.addEventListener('click', onNextButtonCalendarHandler);
backButtonCalendar.addEventListener('click', onBackButtonCalendarHandler);

function onNextButtonCalendarHandler() {
  initCalendarFromString(monthYearSelectContainer.value);
  goToNextMonth();
}

function onBackButtonCalendarHandler() {
  initCalendarFromString(monthYearSelectContainer.value);
  goToPrevMonth();
}

function initCalendarFromString(currentMonthString) {
  const [monthName, yearString] = currentMonthString.split(' ');
  currentMonthIndex = months.indexOf(monthName);
  currentYear = parseInt(yearString);
  generateNextMonth(currentMonthIndex, currentYear);
}

function generateNextMonth(monthIndex, year) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  let firstDayOfWeek = new Date(year, monthIndex, 1).getDay();
  if (firstDayOfWeek === 0) firstDayOfWeek = 7;

  nums.innerHTML = '';

  for (let i = 1; i < firstDayOfWeek; i++) {
    nums.insertAdjacentHTML('beforeend', `<div class="num empty"></div>`);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    nums.insertAdjacentHTML('beforeend', `<div class="num">${i}</div>`);
  }
  addEventListenersToDays();
  monthYearSelectContainer.value = `${months[monthIndex]} ${year}`;
}

function goToNextMonth() {
  currentMonthIndex++;
  if (currentMonthIndex > 11) {
    currentMonthIndex = 0;
  }
  generateNextMonth(currentMonthIndex, currentYear);
}

function goToPrevMonth() {
  currentMonthIndex--;
  if (currentMonthIndex < 0) {
    currentMonthIndex = 11;
  }
  generateNextMonth(currentMonthIndex, currentYear);
}

calendarCancelBtn.addEventListener('click', onCancelCalendarButtonHandler);
calendarOkBtn.addEventListener('click', onOkCalendarButtonHandler);

function onCancelCalendarButtonHandler() {
  calendar.style.display = 'none';
  homePageBlock.style.display = 'flex';
}

function onOkCalendarButtonHandler() {
  calendar.style.display = 'none';
  homePageBlock.style.display = 'flex';
}

let prevClickedDay = null;

function addEventListenersToDays() {
  let allDays = document.querySelectorAll('.num');

  allDays.forEach((day) => {
    day.addEventListener('click', function(e) {
      chooseDay(e)
    })
  })
}

function chooseDay(e) {
  if(prevClickedDay) prevClickedDay.classList.remove('activeDate');
  e.target.classList.add('activeDate');
  prevClickedDay = e.target;
  chooseDateOfEating(e.target);
}

function chooseDateOfEating(choosenDay) {
  let monthAndYear = [];
  let date = '';
  if(choosenDay) {
    monthAndYear = monthYearSelectContainer.value.split(' ');
    date = choosenDay.textContent + '.' + findMonthNumber(monthAndYear[0]) + '.' + monthAndYear[1];
    writeChoosenDateToMealData(date);
  }
}

function writeChoosenDateToMealData(date) {
  mealData.date = date;
}

function findMonthNumber(monthFromCalendar) {
  let result = 0;
  months.find((month, index) => {
    if(month.includes(monthFromCalendar)) {
      result = index + 1;
    }
  })
  return result;
}

createMealButton.addEventListener('click', onCreateMealButtonHandler);

function onCreateMealButtonHandler() {
  mealPage.style.display = 'flex';
  homePageBlock.style.display = 'none';
  scrollTo(0, 0);
  controlBar.style.display = 'none';
  writeMealName();
  generateDefaultCPFCValues();
}

function writeMealName() {
  let dataFromLocalStorage = JSON.parse(localStorage.getItem('userDataArray'))[0];
  Object.keys(dataFromLocalStorage).forEach((key) => {
    if(key.includes('Meal')) {
      mealName.innerHTML = '';
      let newKeyArr = key.split(' ');
      let newKey = 'Meal ' + (Number(newKeyArr[1]) + 1);
      mealName.textContent = newKey;
    }
  })
}

function generateDefaultCPFCValues() {
  mealCaloriesBlock.innerHTML = '';
  mealCaloriesBlock.insertAdjacentHTML('beforeend', `
    <div class="mealCaloriesElem">
      <div class="mealCaloriesNum">0</div>
      <p class="mealCaloriesP">Calories</p>
    </div>

    <div class="mealCaloriesElem">
      <div class="mealCaloriesNum">0</div>
      <p class="mealCaloriesP">Proteins</p>
    </div>

    <div class="mealCaloriesElem">
      <div class="mealCaloriesNum">0</div>
      <p class="mealCaloriesP">Fats</p>
    </div>

    <div class="mealCaloriesElem">
      <div class="mealCaloriesNum">0</div>
      <p class="mealCaloriesP">Carbs</p>
    </div>
  `)
}

createEatenMealsListBtn.addEventListener('click', onCreateEatenMealsListBtnHandler);

function onCreateEatenMealsListBtnHandler() {
  searchFoodContainer.style.display = 'flex';
  scrollTo(0, 0);
  saveMealsButton.style.display = 'none';
  generateAllFoodVariants();
}

closeMealPageBtn.addEventListener('click', onCloseMealPageBtn);

function onCloseMealPageBtn() {
  mealPage.style.display = 'none';
  homePageBlock.style.display = 'flex';
  controlBar.style.display = 'flex';
  eatenMealsList.innerHTML = '';
  dailyMealsData = {};
  mealData = {};
}

searchInput.addEventListener('input', searchByInput);

function searchByInput() {
  foodContainer.innerHTML = '';
  let searchString = searchInput.value.toLowerCase();

  foodData.filter(food => {
    if(food.name.toLowerCase().includes(searchString)) {
      generateFoodAlgorithm(foodContainer, food);
    }
  })
}

function generateAllFoodVariants() {
  foodData.forEach((food) => {
    generateFoodAlgorithm(foodContainer, food);
  })
}

function generateFoodAlgorithm(container, elem) {
  container.insertAdjacentHTML('beforeend', `
    <div class="foodBox">
        <h4 class="foodH">${elem.name}</h4>
        <p class="foodP">${elem.calories} cal / 100g</p>
      </div>
  `)
  addEventListenerToFoodBox();
}

function addEventListenerToFoodBox() {
  let foodBoxes = document.querySelectorAll('.foodBox');
  let onClickToFoodBox;

  foodBoxes.forEach((foodBox) => {
    onClickToFoodBox = () => onFoodBoxHandler(foodBox)
    foodBox.removeEventListener('click', onClickToFoodBox);
    foodBox.addEventListener('click', onClickToFoodBox);
  })
}

function onFoodBoxHandler(elem) {
  eatenInfoCalories.innerHTML = '';
  eatenAmountInput.value = '';
  eatenInfoForm.style.display = 'flex';
  let eatenAmountFormBox = document.querySelector('.eatenAmountFormBox');

  foodData.filter((foodObj) => {
    if(elem.textContent.includes(foodObj.name)) {
        eatenInfoCalories.insertAdjacentHTML('beforeend', `
        <h3 id="foodName" class="eatenAmountH">${foodObj.name}</h3>

        <div class="caloriesBlock">
  
          <div class="caloriesElem">
            <div id="normOfCalories" class="caloriesNum">${foodObj.calories}</div>
            <p class="caloriesP">Calories</p>
          </div>

          <div class="caloriesElem">
            <div id="normOfProteins" class="caloriesNum">${foodObj.protein}</div>
            <p class="caloriesP">Proteins</p>
          </div>

          <div class="caloriesElem">
            <div id="normOfFats" class="caloriesNum">${foodObj.fat}</div>
            <p class="caloriesP">Fats</p>
          </div>

          <div class="caloriesElem">
            <div id="normOfCarbs" class="caloriesNum">${foodObj.carbs}</div>
            <p class="caloriesP">Carbs</p>
          </div>
  
        </div>
     `)
    }
  })
}

clearSearchButton.addEventListener('click', function() {
  if(searchInput.value === '') {
    searchFoodContainer.style.display = 'none';
    saveMealsButton.style.display = 'flex';
  }
  searchInput.value = '';
  generateAllFoodVariants();
})

backSearchButton.addEventListener('click', function() {
  searchFoodContainer.style.display = 'none';
  saveMealsButton.style.display = 'flex';
})

eatenAmountInput.removeEventListener('input', eatenAmountInputHandler);
eatenAmountInput.addEventListener('input', eatenAmountInputHandler);

function eatenAmountInputHandler(e) {
  currentFood = document.getElementById('foodName').textContent;
  currentGrams = Number(e.target.value);
}

okEatenAmountBtn.removeEventListener('click', onOkEatenAmountBtnHandler);
okEatenAmountBtn.addEventListener('click', onOkEatenAmountBtnHandler);

function onOkEatenAmountBtnHandler() {
  if(currentFood && currentGrams > 0) {
    eatenMealsList.innerHTML = '';
    mealCaloriesBlock.innerHTML = '';
    activateButton(saveMealsButton);
    chooseIfCreateNewMealOrRecreateSavedMeal(currentGrams);
    calcEatenCPFC();
  }
  eatenInfoForm.style.display = 'none';
}

cancelEatenAmountBtn.removeEventListener('click', onCancelEatenAmountBtnHandler);
cancelEatenAmountBtn.addEventListener('click', onCancelEatenAmountBtnHandler);

function onCancelEatenAmountBtnHandler() {
  eatenInfoForm.style.display = 'none';
}

function calcEatenCPFC() {
  eatenMealsList.innerHTML = '';

  let totalCalories = 0;
  let totalProteins = 0;
  let totalFats = 0;
  let totalCarbs = 0;

  for (let foodName in mealData) {
    let choosenFoodElem = foodData.find(elem => elem.name === foodName);
    
    if (choosenFoodElem) {
      let eatenGramsNum = mealData[foodName];

      let eatenCaloriesNum = Math.round((eatenGramsNum * choosenFoodElem.calories) / 100);
      let eatenProteinsNum = Math.round((eatenGramsNum * choosenFoodElem.protein) / 100);
      let eatenFatsNum = Math.round((eatenGramsNum * choosenFoodElem.fat) / 100);
      let eatenCarbsNum = Math.round((eatenGramsNum * choosenFoodElem.carbs) / 100);

      totalCalories += eatenCaloriesNum;
      totalProteins += eatenProteinsNum;
      totalFats += eatenFatsNum;
      totalCarbs += eatenCarbsNum;

      generateMealsList(choosenFoodElem, eatenCaloriesNum, eatenGramsNum);
    }
  }
  generateTotalCPFC(totalCalories, totalProteins, totalFats, totalCarbs);
}

function generateMealsList(choosenFoodElem, eatenCaloriesNum, eatenGramsNum) {
  eatenMealsList.insertAdjacentHTML('beforeend', `
    <div class="mealFoodBox">
      <div class="mealFoodWrapper">
        <h4 class="mealFoodH">${choosenFoodElem.name}</h4>
        <p class="mealFoodP">${eatenCaloriesNum} cal • ${eatenGramsNum} g</p>
      </div>
      <div class="deleteButtonsBlock">
        <button class="deleteButton" alt="deleteBtn"></button>

        <div class="editOrDeleteButtonsBox">
          <button id="deleteButton" class="editOrDeleteButtons delete_Button" type="button">Delete</button>
          <button id="cancelButton" class="editOrDeleteButtons cancel_Button" type="button">Cancel</button>
        </div>
      </div>
    </div>
  `);
  addEventListenerToDeleteButtonWhenMealCreating(mealData);
}

function addEventListenerToDeleteButtonWhenMealCreating(mealData) {
  let deleteButtons = document.querySelectorAll('.deleteButton');

  deleteButtons.forEach((button) => {
    let onDeleteButtonClickwhileCreatingMeal = () => onDeleteButtonHandlerWhileCreatingMeal(button, mealData);
    button.addEventListener('click', onDeleteButtonClickwhileCreatingMeal);
  })
}

function onDeleteButtonHandlerWhileCreatingMeal(button, mealData) {
  event.stopPropagation();
  findOpenButtonsBoxToClose();
  let deleteButtonsBlock = button.closest('.deleteButtonsBlock');
  let editOrDeleteButtonsBox = deleteButtonsBlock.querySelector('.editOrDeleteButtonsBox');
  editOrDeleteButtonsBox.style.display = editOrDeleteButtonsBox.style.display === 'flex' ? 'none' : 'flex';

  addEventListenerToDocumentForHidingBlock(editOrDeleteButtonsBox);

  editOrDeleteButtonsBox.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  addEventListenersToButtonsCancelDelete(mealData, editOrDeleteButtonsBox)
}

function addEventListenersToButtonsCancelDelete(mealData, editOrDeleteButtonsBox) {
  let cancel_Button = editOrDeleteButtonsBox.querySelector('.cancel_Button');
  let delete_Button = editOrDeleteButtonsBox.querySelector('.delete_Button');

  let onClickOnCancelButton = () => onCancelButtonFromDeleteBlockHandler(editOrDeleteButtonsBox);
  cancel_Button.removeEventListener('click', onClickOnCancelButton);
  cancel_Button.addEventListener('click', onClickOnCancelButton);

  let onClickOnDeleteButton = () => onDeleteButtonFromDeleteBlockHandler(delete_Button, mealData);
  delete_Button.removeEventListener('click', onClickOnDeleteButton);
  delete_Button.addEventListener('click', onClickOnDeleteButton);
}

function onDeleteButtonFromDeleteBlockHandler(delete_Button, mealData) {
  let foodToDelete = delete_Button.closest('.mealFoodBox');
  let mealName = foodToDelete.querySelector('.mealFoodH').textContent;
  foodToDelete.remove();
  calcEatenCPFC();
  deleteFoodFromMealDataObject(mealData, mealName);
}

function deleteFoodFromMealDataObject(mealData, mealName) {
  let foodExist = Object.keys(mealData).includes(mealName);
  if(foodExist) {
    calcCPFCAfterDeletingFood(mealName, mealData)
    delete mealData[mealName];
  }
}

function onCancelButtonFromDeleteBlockHandler(editOrDeleteButtonsBox) {
  editOrDeleteButtonsBox.style.display = 'none';
}

function generateTotalCPFC(totalCalories, totalProteins, totalFats, totalCarbs) {
  mealCaloriesBlock.innerHTML = '';
  mealCaloriesBlock.innerHTML = `
    <div class="mealCaloriesElem">
      <div class="mealCaloriesNum">${totalCalories}</div>
      <p class="mealCaloriesP">Calories</p>
    </div>

    <div class="mealCaloriesElem">
      <div class="mealCaloriesNum">${totalProteins}</div>
      <p class="mealCaloriesP">Proteins</p>
    </div>

    <div class="mealCaloriesElem">
      <div class="mealCaloriesNum">${totalFats}</div>
      <p class="mealCaloriesP">Fats</p>
    </div>

    <div class="mealCaloriesElem">
      <div class="mealCaloriesNum">${totalCarbs}</div>
      <p class="mealCaloriesP">Carbs</p>
    </div>
  `;

  collectEatenValuesData(totalCalories, totalProteins, totalFats, totalCarbs);
}

function collectEatenValuesData(totalCalories, totalProteins, totalFats, totalCarbs) {
  mealData.eaten_Values = {
    calories: totalCalories,
    proteins: totalProteins,
    fats: totalFats,
    carbs: totalCarbs
  }
}

function chooseIfCreateNewMealOrRecreateSavedMeal(currentGrams) {
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  let activeMeal = mealName.textContent;
  let mealExists = Object.keys(data).includes(activeMeal);

  if(mealExists) {
    changeEatenFoodData(data, activeMeal, currentGrams);
  } else {
    collectEatenFoodData(currentGrams, currentFood);
  }
}

function collectEatenFoodData(grams, foodName) {
  if (!mealData) {
    mealData = {};
  }

  if (mealData.hasOwnProperty(foodName)) {
    mealData[foodName] += grams;
  } else {
    mealData[foodName] = grams;
  }
  mealData.time = getCurrentTime();
  dayKey = findOutTodaysDate();
  checkIfDateChoosen();
}

function changeEatenFoodData(storageObj, mealKey, currentGrams) {
  let food = foodName.textContent;

  Object.assign(mealData, storageObj[mealKey]);

  if(mealData.hasOwnProperty(food)) {
    mealData[food] += currentGrams;
  } else {
    mealData[food] = currentGrams;
  }

  checkIfChangesExist(mealData, mealKey);
}

saveMealsButton.addEventListener('click', onSaveButtonHandler);

function onSaveButtonHandler() {
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  userData = data;
  homePageBlock.style.display = 'flex';
  mealCaloriesBlock.innerHTML = '';
  eatenMealsList.innerHTML = '';
  mealPage.style.display = 'none';

  const mealKey = mealName.textContent;
  const metaFields = ['eaten_Values', 'time', 'date'];
  const realFields = Object.keys(mealData).filter(key => !metaFields.includes(key));

  if (realFields.length > 0) {
    userData[mealKey] = mealData;
    generateNewVersionOfMeal(mealName);
    generateMeal(mealName.textContent, mealData.eaten_Values.calories, mealData.time, mealData.date);
  } else {
    delete userData[mealKey];
    deleteMealFromDOM(mealName);
  }

  saveUserDataToLocalStorage(userData, userDataArray);
  cleanValuesElemsTextContent();
  toWriteEatenAndNormValuesInDom();

  controlBar.style.display = 'flex';
  mealData = {};
}

function deleteMealFromDOM(mealNameToDelete) {
  let meals = mealsBlock.querySelectorAll('.mealbox');
  meals.forEach((elem) => {
    let mealName = elem.querySelector('.mealName');
    if(mealNameToDelete.textContent === mealName.textContent) {
      elem.remove();
    }
  })
}

function checkIfDateChoosen() {
  let ifNotContainsDate = !mealData.hasOwnProperty('date');
  if(ifNotContainsDate) {
    mealData.date = dayKey;
  }
}

function findOutTodaysDate() {
  let date = new Date;
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let actualDate = day + '.' + month + '.' + year;
  return actualDate;
}

function checkIfChangesExist(mealData, mealKey) {
  mealKey = mealName.textContent;
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  let arrFromStorageObj = Object.keys(data[mealKey]);
  let arrFromMealData = Object.keys(mealData);

  if(arrFromStorageObj.length !== arrFromMealData.length) {
    activateButton(saveMealsButton);
    return;
  }

  arrFromStorageObj.forEach((key) => {
    if(!mealData.hasOwnProperty(key) || data[mealKey] !== mealData[key]) {
      activateButton(saveMealsButton);
      return;
    } else {
      deactivateButton(saveMealsButton);
      return;
    }
  })
}

function cleanValuesElemsTextContent() {
  caloriesTextElem.textContent = '';
  proteinsTextElem.textContent = '';
  fatsTextElem.textContent = '';
  carbsTextElem.textContent = '';
}

function getCurrentTime() {
  let now = new Date();
  return now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
}

function generateMeal(mealName, caloriesNum, time, date) {
  mealsBlock.insertAdjacentHTML('beforeend', `
    <div class="mealbox">
      <div class="meal">
        <div class="mealHead">
          <h3 class="mealName">${mealName}</h3>
          <p class="calories">${caloriesNum} Cal</p>
        </div>
        <div class="mealTimeAndDateContainer">
          <p class="mealDate">${date}</p>
          <p class="mealTime">${time}</p>
        </div>
      </div>
    </div>
  `)
  addEventListenersToMealBoxes();
}

function generateNewVersionOfMeal(mealName) {

  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  let mealsFromDom = mealsBlock.querySelectorAll('.mealbox');

  mealsFromDom.forEach(mealBox => {
    let mealFromDomName = mealBox.querySelector('.mealName').textContent;
    if (mealFromDomName === mealName.textContent && Object.keys(data).includes(mealFromDomName)) {
      mealBox.remove();
    }
  })
}

function writeWaterDataInDom(storageObj) {
  let drunkWaterFromStorage = 0;
  let waterNormFromStorage = 0;

  Object.keys(storageObj).forEach((key) => {
    if(key.includes('drunkWater')) {
      drunkWaterFromStorage = storageObj[key];
    }

    if(key.includes('water')) {
      waterNormFromStorage = storageObj[key];
    }

    if(key.includes('timeWaterIntake')) {
      waterIntakeTime.textContent = `Last time ${storageObj[key]}`
    }
  })
    waterNormIndicator.textContent = drunkWaterFromStorage + ' / ' + waterNormFromStorage + 'L';
    calcPercentOfDrunkWater(drunkWaterFromStorage, waterNormFromStorage);
}

function calcWaterNorm(userData) {
  let baseNorm = +(((userData.weight * 35) / 1000).toFixed(1));
  toWriteWaterIntakeInDom(baseNorm, drunkWater);

  let onClickPlusButton = () => onPlusButtonHandler(baseNorm, userData);
  plusButton.addEventListener('click', onClickPlusButton);

  let onClickMinusButton = () => onMinusButtonHandler(baseNorm, userData);
  minusButton.addEventListener('click', onClickMinusButton);
}

function onPlusButtonHandler(baseNorm, userData) {
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  userData = data;
  if(checkWaterIntakeInLocalStorage() !== 0) {
    drunkWater = checkWaterIntakeInLocalStorage();
    drunkWater = Math.round((drunkWater + 0.1) * 10) / 10;
    toWriteWaterIntakeInDom(baseNorm, drunkWater);
    writeWaterIntakeTimeInDom();
    calcPercentOfDrunkWater(drunkWater, baseNorm);
    userData.water = baseNorm;
    userData.drunkWater = drunkWater;
    userData.timeWaterIntake = getCurrentTime();
    saveUserDataToLocalStorage(userData, userDataArray);
  } else {
    drunkWater = Math.round((drunkWater + 0.1) * 10) / 10;
    toWriteWaterIntakeInDom(baseNorm, drunkWater);
    writeWaterIntakeTimeInDom();
    calcPercentOfDrunkWater(drunkWater, baseNorm);
    userData.water = baseNorm;
    userData.drunkWater = drunkWater;
    userData.timeWaterIntake = getCurrentTime();
    saveUserDataToLocalStorage(userData, userDataArray);
  }
}

function onMinusButtonHandler(baseNorm, userData) {
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  userData = data;
  if(checkWaterIntakeInLocalStorage() !== 0) {
    drunkWater = checkWaterIntakeInLocalStorage();
    drunkWater = Math.round((drunkWater - 0.1) * 10) / 10;
    calcPercentOfDrunkWater(drunkWater, baseNorm);
    writeWaterIntakeTimeInDom();
    toWriteWaterIntakeInDom(baseNorm, drunkWater);
    userData.water = baseNorm;
    userData.drunkWater = drunkWater;
    userData.timeWaterIntake = getCurrentTime();
    saveUserDataToLocalStorage(userData, userDataArray);
  } else {
    drunkWater = 0;
    calcPercentOfDrunkWater(drunkWater, baseNorm);
    writeWaterIntakeTimeInDom();
    toWriteWaterIntakeInDom(baseNorm, drunkWater);
    userData.water = baseNorm;
    userData.drunkWater = drunkWater;
    userData.timeWaterIntake = getCurrentTime();
    saveUserDataToLocalStorage(userData, userDataArray);
  }
}

function writeWaterIntakeTimeInDom() {
  waterIntakeTime.textContent = `Last time ${getCurrentTime()}`;
}

function toWriteWaterIntakeInDom(baseNorm, drunkWater) {
  waterNormIndicator.textContent = drunkWater + ' / ' + baseNorm + 'L';
}

function calcPercentOfDrunkWater(drunkNum, normNum) {
  let persentOfDrunkWater = Math.round((drunkNum / normNum) * 100);
  colorWaterIndicator(persentOfDrunkWater);
  generatePercentNumOfDrunkWater(persentOfDrunkWater);
}

function colorWaterIndicator(percent) {
  if(percent > 100) {
    waterColorIndicator.style.height = 100 + '%';
  } else {
    waterColorIndicator.style.height = percent + '%';
  }
}

function generatePercentNumOfDrunkWater(percent) {
  if(!percent) {
    waterPercentNum.textContent = 0 + '%'
  } else {
    waterPercentNum.textContent = percent + '%'
  }
}

function checkWaterIntakeInLocalStorage() {
  let dataFromLocalStorage = JSON.parse(localStorage.getItem('userDataArray'))[0];
  for(let key of Object.keys(dataFromLocalStorage)) {
    if(key.includes('drunkWater')) {
      return Number(dataFromLocalStorage[key]);
    }
  }
  return null;
}

function addEventListenersToMealBoxes() {
  let mealBoxes = document.querySelectorAll('.mealbox');
  mealBoxes.forEach((box) => {
    box.removeEventListener('click', onMealBoxHandler);
    box.addEventListener('click', onMealBoxHandler);
  })
}

function onMealBoxHandler() {
  homePageBlock.style.display = 'none';
  let mealNameElem = this.querySelector('.mealName').textContent;
  mealName.textContent = '';
  mealName.textContent = mealNameElem;
  mealPage.style.display = 'flex';
  scrollTo(0, 0);
  controlBar.style.display = 'none';
  checkMealDataInStorage(mealNameElem);
  deactivateButton(saveMealsButton);
}

function checkMealDataInStorage(clickedMealName) {
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  Object.keys(data).forEach((key) => {
    if(key === clickedMealName) {
      generateSavedCalcsMealsData(data[key], data);
      generateSavedMealsData(data[key], data);
    }
  })
}

function generateSavedCalcsMealsData(mealDataObj, data) {
  mealCaloriesBlock.innerHTML = '';
  mealCaloriesBlock.insertAdjacentHTML('beforeend', `
    <div class="mealCaloriesElem">
      <div class="mealCaloriesNum">${mealDataObj['eaten_Values']['calories']}</div>
      <p class="mealCaloriesP">Calories</p>
    </div>

    <div class="mealCaloriesElem">
      <div class="mealCaloriesNum">${mealDataObj['eaten_Values']['proteins']}</div>
      <p class="mealCaloriesP">Proteins</p>
    </div>

    <div class="mealCaloriesElem">
      <div class="mealCaloriesNum">${mealDataObj['eaten_Values']['fats']}</div>
      <p class="mealCaloriesP">Fats</p>
    </div>

    <div class="mealCaloriesElem">
      <div class="mealCaloriesNum">${mealDataObj['eaten_Values']['carbs']}</div>
      <p class="mealCaloriesP">Carbs</p>
    </div>
  `);
}

function generateSavedMealsData(mealDataObj, data) {
  eatenMealsList.innerHTML = '';
  Object.keys(mealDataObj).forEach((key) => {
    if(!(key === 'eaten_Values') && !(key === 'time') && !(key === 'date')) {
      eatenMealsList.insertAdjacentHTML('beforeend', `
        <div class="mealFoodBox">
          <div class="mealFoodWrapper">
            <h4 class="mealFoodH">${key}</h4>
            <p class="mealFoodP">${calcEatenCalories(key, mealDataObj[key])} cal • ${mealDataObj[key]} g</p>
          </div>
          <div class="deleteButtonsBlock">
            <button class="deleteButton"></button>

            <div class="editOrDeleteButtonsBox">
              <button id="deleteButton" class="editOrDeleteButtons delete_Button" type="button">Delete</button>
              <button id="cancelButton" class="editOrDeleteButtons cancel_Button" type="button">Cancel</button>
            </div>
          </div>
        </div>
      `);
    }
  })
  addEventListenersToDeleteAreaOnFoodElems(mealDataObj, data);
}

function calcEatenCalories(elemsName, elemsGrams) {
  let result = 0;

  foodData.forEach((foodElem) => {
    if(foodElem.name === elemsName) {
      result = Math.round((elemsGrams * foodElem.calories) / 100);
    }
  })
  return result;
}

function addEventListenersToDeleteAreaOnFoodElems(mealDataObj, data) {
  let deleteButtons = document.querySelectorAll('.deleteButton');

  deleteButtons.forEach((button) => {
    let onDeleteButtonClick = () => onDeleteButtonHandler(button, mealDataObj, data);
    button.addEventListener('click', onDeleteButtonClick);
    // button.removeEventListener('click', onDeleteButtonClick);
    // button.addEventListener('click', onDeleteButtonClick);
  })
}

function onDeleteButtonHandler(button, mealDataObj, data) {
  event.stopPropagation();
  findOpenButtonsBoxToClose();

  let deleteButtonsBlock = button.closest('.deleteButtonsBlock');
  let editOrDeleteButtonsBox = deleteButtonsBlock.querySelector('.editOrDeleteButtonsBox');
  editOrDeleteButtonsBox.style.display = editOrDeleteButtonsBox.style.display === 'flex' ? 'none' : 'flex';

  addEventListenerToDocumentForHidingBlock(editOrDeleteButtonsBox);

  editOrDeleteButtonsBox.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  addEventListenersForEditDeleteButtons(button, editOrDeleteButtonsBox, mealDataObj, data);
}

function addEventListenerToDocumentForHidingBlock(elemBlock) {
  document.addEventListener('click', () => {
    elemBlock.style.display = 'none';
  });
}

function findOpenButtonsBoxToClose() {
  let openedButtonsBoxes = document.querySelectorAll('.editOrDeleteButtonsBox');
  openedButtonsBoxes.forEach((box) => {
    if(box.style.display === 'flex') {
      box.style.display = 'none';
    }
  })
}

function generateButtonsForEditorDelete(button, mealDataObj, data) {
  let deleteButtonsBlock = button.closest('.deleteButtonsBlock');
  let editOrDeleteButtonsBox = deleteButtonsBlock.querySelector('.editOrDeleteButtonsBox');
  editOrDeleteButtonsBox.style.display = 'flex';
  addEventListenersForEditDeleteButtons(button, editOrDeleteButtonsBox, mealDataObj, data);
}

function addEventListenersForEditDeleteButtons(button, editOrDeleteButtonsBox, mealDataObj, data) {
  let cancelEditFoodListButton = editOrDeleteButtonsBox.querySelector('.cancel_Button');
  let deleteEditFoodListButton = editOrDeleteButtonsBox.querySelector('.delete_Button');

  let onClickOnCancelEditFoodListButton = () => onCancelEditFoodListButtonHandler(button, editOrDeleteButtonsBox);
  cancelEditFoodListButton.removeEventListener('click', onClickOnCancelEditFoodListButton);
  cancelEditFoodListButton.addEventListener('click', onClickOnCancelEditFoodListButton);
  let onClickOnDeleteEditFoodListButton = () => onDeleteEditFoodListButtonHandler(button, deleteEditFoodListButton, mealDataObj, data);
  deleteEditFoodListButton.removeEventListener('click', onClickOnDeleteEditFoodListButton);
  deleteEditFoodListButton.addEventListener('click', onClickOnDeleteEditFoodListButton);
}

function onCancelEditFoodListButtonHandler(button, editOrDeleteButtonsBox) {
  editOrDeleteButtonsBox.style.display = 'none';
}

function onDeleteEditFoodListButtonHandler(button, deleteEditFoodListButton, mealDataObj, data) {
  let foodToDelete = deleteEditFoodListButton.closest('.mealFoodBox');
  let mealFoodName = foodToDelete.querySelector('.mealFoodH').textContent;
  button.style.backgroundColor = 'inherit';
  foodToDelete.remove();
  deleteFoodFromLocalStorage(mealFoodName, mealDataObj, data);
  // checkIfMealDataHaveFoodElem(data, mealName);
  // checkIfFoodElemIsLast(data, mealName.textContent);
  checkIfChangesExist(mealData, mealFoodName);
  generateSavedCalcsMealsData(mealDataObj, data)
}

function deleteFoodFromLocalStorage(mealFoodName, mealDataObj, data) {
  let mealExist = Object.keys(mealDataObj).includes(mealFoodName);

  if(mealExist) {
    calcCPFCAfterDeletingFood(mealFoodName, mealDataObj);
    delete mealDataObj[mealFoodName];
    mealData = mealDataObj
  }
}

function calcCPFCAfterDeletingFood(mealName, mealDataObj) {
  let calories = 0;
  let proteins = 0;
  let carbs = 0;
  let fats = 0;

  foodData.forEach((food) => {
    if(food.name === mealName) {
      calories = createFormulaForCalcCPFC(food.calories, mealDataObj[mealName]);
      proteins = createFormulaForCalcCPFC(food.protein, mealDataObj[mealName]);
      carbs = createFormulaForCalcCPFC(food.carbs, mealDataObj[mealName]);
      fats = createFormulaForCalcCPFC(food.fat, mealDataObj[mealName]);
    }
  })
  calcEatenValuesWithoutDeleteFood(mealDataObj, calories, proteins, carbs, fats)
}

function calcEatenValuesWithoutDeleteFood(mealDataObj, calories, proteins, carbs, fats) {
  if (!mealDataObj['eaten_Values']) {
    mealDataObj['eaten_Values'] = { calories: 0, proteins: 0, carbs: 0, fats: 0 };
  }

  mealDataObj['eaten_Values']['calories'] -= Math.round(calories);
  mealDataObj['eaten_Values']['proteins'] -= Math.round(proteins);
  mealDataObj['eaten_Values']['carbs'] -= Math.round(carbs);
  mealDataObj['eaten_Values']['fats'] -= Math.round(fats);
}

function createFormulaForCalcCPFC(normValue, eatenValue) {
  return Math.round((eatenValue * normValue) / 100);
}

personInfoMenu.addEventListener('click', openPersonInfoMenu);

function openPersonInfoMenu() {
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  homePageBlock.style.display = 'none';
  profileBlock.style.display = 'flex';
  personProfileName.textContent = data.name;
  writeCaloriesNormInCalorieIntakeButton();

  backProfileButton.removeEventListener('click', onBackPersonInfoButtonHandler);
  backProfileButton.addEventListener('click', onBackPersonInfoButtonHandler);

  openUserInfoButton.removeEventListener('click', onOpenUserInfoButtonHandler);
  openUserInfoButton.addEventListener('click', onOpenUserInfoButtonHandler);

  backMeButton.removeEventListener('click', onBackMeButtonHandler);
  backMeButton.addEventListener('click', onBackMeButtonHandler);

  openCalorieIntakeButton.removeEventListener('click', onOpenCalorieIntakeButtonHandler);
  openCalorieIntakeButton.addEventListener('click', onOpenCalorieIntakeButtonHandler);

  logOut.addEventListener('click', onLogOutHandler);
}

function onLogOutHandler() {
  profileBlock.style.display = 'none';
  homePage.style.display = 'none';
  appleButton.style.display = 'flex';
  homePageBlock.style.display = 'flex';
}

function onBackPersonInfoButtonHandler() {
  profileBlock.style.display = 'none';
  homePageBlock.style.display = 'flex';
}

function onOpenUserInfoButtonHandler() {
  deactivateButton(saveEditedUserButton);
  changeUserInfoBlock.style.display = 'flex';
  writeUserInfoToMeBlock();
  addEventListenersTochangeInfoElems();
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  userData = data;
}

function onBackMeButtonHandler() {
  changeUserInfoBlock.style.display = 'none';
}

function writeUserInfoToMeBlock() {
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  userInfoArrayForMeBlock.forEach((elem) => {
    let nameOfBlock = elem.closest('.meElem');
    if(nameOfBlock) {
      let [attr] = Object.keys(nameOfBlock.dataset);
      let value = nameOfBlock.dataset[attr];

      if(value && data.hasOwnProperty(value)) {
        elem.textContent = capitalizeFirstLetter(data[value]);
      }
    }
  })
}

function addEventListenersTochangeInfoElems() {
  let meElems = document.querySelectorAll('.meElem');
  meElems.forEach((elem) => {
    elem.removeEventListener('click', onMeElemHandler);
    elem.addEventListener('click', onMeElemHandler);
  })
}

function onMeElemHandler() {
  changeWindow.style.display = 'block';
  let clickedElem = this;
  let changingParameter = this.textContent.trim().replace(/\s+/g, ' ').split(' ')[0];
  writeNameOfChangingParameter(changingParameter);
  checkWhichParameterWantToChange(changingParameter);
  let onDoneButtonClick = () => onDoneButtonHandler(changingParameter, clickedElem);
  doneButton.removeEventListener('click', onDoneButtonClick);
  doneButton.addEventListener('click', onDoneButtonClick);
}

function onDoneButtonHandler(changingParameter, clickedElem) {
  changeWindow.style.display = 'none';
  checkIfParametersChanged(changingParameter, saveEditedUserButton);
  writeNewParameterValueInDOM(clickedElem);
}

function writeNameOfChangingParameter(changingParameter) {
  if(changingParameter) nameOfChangingInfo.textContent = changingParameter;
}

function checkWhichParameterWantToChange(changingParameter) {
  changeInfoChooseToolBox.style.display = 'none';
  changingInputContainer.style.display = 'none';
  changeInfoGoalsBlock.style.display = 'none';

  switch (changingParameter) {
    case 'Age':
      changingInputContainer.style.display = 'flex';
      generateInputToolForChangeUserInfo('years', '30');
      break;
    case 'Weight':
      changingInputContainer.style.display = 'flex';
      generateInputToolForChangeUserInfo('kg', '55');
      break;
    case 'Height':
      changeInfoChooseToolBox.style.display = 'flex';
      createPicker(0, 3, changeInfoMeterPicker, 'm');
      createPicker(0, 100, changeInfoCmPicker, 'cm');
      break;
    case 'Goal':
      onGoalParameterHandler();
      break;
  }
}

function generateInputToolForChangeUserInfo(forInputValue, placeholderValue) {
  changingInputContainer.innerHTML = '';
  changingInputContainer.insertAdjacentHTML('beforeend', `
    <input 
      class="inputForChangeInfo" 
      type="number"
      min="1"
      step="1"
      placeholder="${placeholderValue}"
    >
    <p class="valuesOfChangingInfo">
      ${forInputValue}
    </p>
  `)
  addEventListenersToInputs();
}

function onGoalParameterHandler() {
  changeInfoGoalsBlock.style.display = 'flex';
  addEventListenersToGoalButtons();
}

function addEventListenersToGoalButtons() {
  let changeInfoDataButtons = document.querySelectorAll('.changeInfoDataButton');
  changeInfoDataButtons.forEach((button) => {
    let onClickOnGoalButton = () => onGoalButtonHandler(button);
    button.style.border = '1px solid rgba(217, 217, 217, 1)';
    button.removeEventListener('click', onClickOnGoalButton);
    button.addEventListener('click', onClickOnGoalButton);
  })
}

function onGoalButtonHandler(button) {
  createColorBorderForActiveButton(button);
  collectDataFromButtons(button);
}

function createColorBorderForActiveButton(button) {
  if(prevButton) prevButton.style.border = '1px solid rgba(217, 217, 217, 1)';
  button.style.border = '1px solid rgba(53, 204, 140, 1)';
  prevButton = button;
}

function collectDataFromButtons(button) {
  userData.goals = button.textContent.toLowerCase();
}

function addEventListenersToInputs() {
  let inputForChangeInfo = document.querySelector('.inputForChangeInfo');
  let inputInteraction = () => onInputInteraction(inputForChangeInfo);
  inputForChangeInfo.removeEventListener('input', inputInteraction);
  inputForChangeInfo.addEventListener('input', inputInteraction);
}

function onInputInteraction(input) {
  let keyName = toolsForChangeUserInfo.querySelector('.nameOfChaingingParameter').textContent.toLowerCase();
  changeInfoFromInput = input.value;
  collectDataFromInputs(keyName, changeInfoFromInput);
}

function collectDataFromInputs(keyName, changeInfoFromInput) {
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  if(changeInfoFromInput === '') {
    changeInfoFromInput = data[keyName];
  }
  userData[keyName] = changeInfoFromInput;
}

function checkIfParametersChanged(changingParameter, button) {
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  let key = changingParameter.toLowerCase();

  if(key === 'goal' || key === 'height') {
    key = createCorrectKey(key);
  }

  let currentParameter = String(userData[key]).trim();
  let storageParameter = String(data[key]).trim();

  if(currentParameter !== storageParameter) {
    activateButton(button);
  } else {
    deactivateButton(button);
  }
}

function createCorrectKey(key) {
  if(key === 'goal') {
    key = 'goals';
    return key;
  }

  if(key === 'height') {
    key = 'tall';
    return key;
  }
  return;
}

function writeNewParameterValueInDOM(clickedElem) {
  const key = Object.keys(clickedElem.dataset)[0];
  const value = clickedElem.dataset[key];
  if(userData.hasOwnProperty(value)) {
    clickedElem.querySelector('.meGreenParagraph').textContent = capitalizeFirstLetter(userData[value]);
  }
}

saveEditedUserButton.addEventListener('click', onSaveEditedUserButton);

function onSaveEditedUserButton() {
  updInfoWindow.style.display = 'flex';
  addEventListenersToUpdateElementsButton();
}

function addEventListenersToUpdateElementsButton() {
  updateCancelButton.removeEventListener('click', onUpdateCancelButton);
  updateCancelButton.addEventListener('click', onUpdateCancelButton);

  updateOkButton.removeEventListener('click', onUpdateOkButton);
  updateOkButton.addEventListener('click', onUpdateOkButton);

  inputUpdate.removeEventListener('click', checkUpdateInput);
  inputUpdate.addEventListener('click', checkUpdateInput);
}

function onUpdateCancelButton() {
  updInfoWindow.style.display = 'none';
}

function onUpdateOkButton() {
  updInfoWindow.style.display = 'none';
  inputUpdate.checked = false;
}

function checkUpdateInput() {
  if(this.checked) {
    saveUserDataToLocalStorage(userData, userDataArray);
    let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
    calcPFC(data);
  }
}

function onOpenCalorieIntakeButtonHandler() {
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  userData = data;
  deactivateButton(saveEditedNutrientsButton);
  changeCalorieIntakeBlock.style.display = 'flex';
  changeCalorieIntakeBackButton.removeEventListener('click', onChangeCalorieIntakeBackButton);
  changeCalorieIntakeBackButton.addEventListener('click', onChangeCalorieIntakeBackButton);
  writeCalorieIntakeInfoFromStorage();
  addEventListenersToCalorieIntakeElems();
  saveEditedNutrientsButton.removeEventListener('click', onSaveEditedNutrientsButtonHandler);
  saveEditedNutrientsButton.addEventListener('click', onSaveEditedNutrientsButtonHandler);
}

function onChangeCalorieIntakeBackButton() {
  changeCalorieIntakeBlock.style.display = 'none';
}

function writeCaloriesNormInCalorieIntakeButton() {
  caloriesNormElem.textContent = '';
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  if(data) {
    caloriesNormElem.textContent = data.calories + ' Cal';
  }
}

function writeCalorieIntakeInfoFromStorage() {
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  let calorieIntakeElements = document.querySelectorAll('.calorieIntakeElement');
  calorieIntakeElements.forEach((elem) => {
    let nutrientInStorage = elem.textContent.trim().toLowerCase();
    if(data.hasOwnProperty(nutrientInStorage)) {
      let nutrientsValue = elem.querySelector('.nutrientsValue');
      nutrientsValue.textContent = data[nutrientInStorage];
    }
  })
}

function addEventListenersToCalorieIntakeElems() {
  let calorieIntakeElements = document.querySelectorAll('.calorieIntakeElement');
  calorieIntakeElements.forEach((elem) => {
    elem.removeEventListener('click', onCalorieIntakeElementHandler);
    elem.addEventListener('click', onCalorieIntakeElementHandler);
  })
}

function onCalorieIntakeElementHandler() {
  let intakeClickedElem = this;
  let intakeElem = this.querySelector('.nutrientsName').textContent;
  changeIntakeBlockDependsOnIntakeElement(intakeElem);

  let collectInfoFromNutrientsInput = () => collectInfoFromNutrientsValueInput(intakeElem, nutrientsValue);
  nutrientsValue.addEventListener('input', collectInfoFromNutrientsInput);

  let onDoneButtonClick = () => onChangeNutrientsIntakeDoneBtn(collectInfoFromNutrientsInput, intakeElem, intakeClickedElem);
  changeNutrientsIntakeDoneBtn.removeEventListener('click', onDoneButtonClick);
  changeNutrientsIntakeDoneBtn.addEventListener('click', onDoneButtonClick);
}

function changeIntakeBlockDependsOnIntakeElement(intakeElem) {
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  let nutrientName = document.querySelector('.nutrientName');
  let nutrientQuantity = document.querySelector('.nutrientQuantity');
  let recommendQuantity = document.querySelector('.recommendQuantity');
  nutrientName.textContent = '';
  nutrientQuantity.textContent = '';
  recommendQuantity.textContent = '';
  switch (intakeElem) {
    case 'Calories':
      nutrientName.textContent = intakeElem.toLowerCase();
      nutrientQuantity.textContent = 'cal';
      recommendQuantity.textContent = data[intakeElem.toLowerCase()] + ' cal';
      changeNutrientsIntakeBlock.style.display = 'flex';
      break;
    case 'Water':
      nutrientName.textContent = intakeElem.toLowerCase();
      nutrientQuantity.textContent = 'liters';
      recommendQuantity.textContent = data[intakeElem.toLowerCase()] + ' liters';
      changeNutrientsIntakeBlock.style.display = 'flex';
      break;
    default:
      nutrientName.textContent = intakeElem.toLowerCase();
      nutrientQuantity.textContent = 'grams';
      recommendQuantity.textContent = data[intakeElem.toLowerCase()] + ' grams';
      changeNutrientsIntakeBlock.style.display = 'flex';
      break;
  }
}

function onChangeNutrientsIntakeDoneBtn(collectInfoFromNutrientsInput, intakeElem, intakeClickedElem) {
  changeNutrientsIntakeBlock.style.display = 'none';
  nutrientsValue.removeEventListener('input', collectInfoFromNutrientsInput);
  nutrientsValue.value = '';
  checkIfParametersChanged(intakeElem, saveEditedNutrientsButton);
  writeChangedDataInDOM(intakeClickedElem);
}

function writeChangedDataInDOM(intakeClickedElem) {
  let clickedElemName = intakeClickedElem.querySelector('.nutrientsName').textContent.toLowerCase();
  if(userData.hasOwnProperty(clickedElemName)) {
    intakeClickedElem.querySelector('.nutrientsValue').textContent = userData[clickedElemName];
  }
}

function collectInfoFromNutrientsValueInput(intakeElem, nutrientsValue) {
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  let keyForUserData = intakeElem.toLowerCase();
  if(nutrientsValue.value === '') {
    userData[keyForUserData] = data[keyForUserData];
  } else {
    userData[keyForUserData] = nutrientsValue.value;
  }
}

function onSaveEditedNutrientsButtonHandler() {
  saveUserDataToLocalStorage(userData, userDataArray);
}

function setTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  sliderTheme.checked = theme === 'dark';
}

document.addEventListener('DOMContentLoaded', function() {
  let savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
})

sliderTheme.addEventListener('change', function() {
  const newTheme = sliderTheme.checked ? 'dark' : 'light';
  setTheme(newTheme);
})

