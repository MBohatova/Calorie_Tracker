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


// Inputs
let inputWeight = document.getElementById('weight');
let inputAge = document.getElementById('age');
let inputName = document.getElementById('name');
let searchInput = document.getElementById('searchInput');
let eatenAmountInput = document.getElementById('eatenAmountInput');

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
let drunkWater = 0;

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
let currentFood = "";
let currentGrams = 0;
let controlBar = document.getElementById('controlBar');

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
    jenerateMealsFromLocalStorage(data[0]);
    calcWaterNorm(data[0]);
    writeWaterDataInDom(data[0]);
  } else {
    appleButton.style.display = 'none';
    onboardingBox.style.display = 'flex';
    onboardingBox1.style.display = 'flex';
  }
}

function jenerateMealsFromLocalStorage(userInfoObject) {
  Object.keys(userInfoObject).forEach((key) => {
    if(key.includes('Meal')) {
      jenerateMeal(key, userInfoObject[key]['eaten_Values']['calories'], userInfoObject[key]['time'])
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
  scrollTo(0, 0);
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
  scrollTo(0, 0);
}

requestingButton.addEventListener('click', changeContentInRequestForm)

function changeContentInRequestForm() {
  requestingButtonBack.style.display = 'flex';
  requestingContent[requestingCurrentIndex].style.display = 'none';
  requestingCurrentIndex = (requestingCurrentIndex + 1);
  requestingContent[requestingCurrentIndex].style.display = 'flex';
  scrollTo(0, 0);

  if(requestingCurrentIndex === (requestingContent.length - 2)) {
    calcPFC(userData);
  }

  if(requestingCurrentIndex === (requestingContent.length - 1)) {
    requestingButtons.style.display = 'none';
    toSaveCalcResultsInLocalStorage(normDependOnGoal, proteinsCalcs, fatsCalcs, carbsCalcs);
    saveUserDataToLocalStorage(userData, userDataArray);
    toWriteDataInDomElems(userData);
    writeDefaultValuesDataInDom();
    calcWaterNorm(userData);
  }
}

requestingButtonBack.addEventListener('click', onRequestingButtonBack);

function onRequestingButtonBack() {
  requestingContent[requestingCurrentIndex].style.display = 'none';
  requestingCurrentIndex = (requestingCurrentIndex - 1);
  requestingContent[requestingCurrentIndex].style.display = 'flex';
  scrollTo(0, 0);

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
    Object.keys(userData).forEach((key) => {
      data[0][key] = userData[key];
    });
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

  proteinsCalcs = Math.round(Number(userData.weight) * (userData.goals === 'gain_weight' ? 2.2 : 1.6));
  fatsCalcs = Math.round(Number(userData.weight) * (userData.goals === 'gain_weight' ? 1.2 : 1.0));

  let proteinCalories = proteinsCalcs * 4;
  let fatCalories = fatsCalcs * 9;
  carbsCalcs = Math.round((normDependOnGoal - (proteinCalories + fatCalories)) / 4);

  toWriteResults(normDependOnGoal, proteinsCalcs, fatsCalcs, carbsCalcs);
  toSaveCalcResultsInLocalStorage(normDependOnGoal, proteinsCalcs, fatsCalcs, carbsCalcs)
}

function toWriteResults(normDependOnGoal, proteinsCalcs, fatsCalcs, carbsCalcs) {
  calories.textContent = 'Calories: ' + normDependOnGoal;
  proteins.textContent = 'Proteins: ' + proteinsCalcs + 'g';
  fats.textContent = 'Fats: ' + fatsCalcs + 'g';
  carbs.textContent = 'Carbs: ' + carbsCalcs + 'g';
}

function toSaveCalcResultsInLocalStorage(normDependOnGoal, proteinsCalcs, fatsCalcs, carbsCalcs) {
  userData.proteins = proteinsCalcs;
  userData.fats = fatsCalcs;
  userData.carbs = carbsCalcs;
  userData.calories = normDependOnGoal;
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
    if(key.includes('Meal')) {
      caloriesTextElem.textContent = calcSumOfValues(dataFromStorage, calcCaloriesArr, key, 'calories') + ' / ' + dataFromStorage.calories;
      proteinsTextElem.textContent = calcSumOfValues(dataFromStorage, calcProteinsArr, key, 'proteins') + ' / ' + dataFromStorage.proteins;
      fatsTextElem.textContent = calcSumOfValues(dataFromStorage, calcCarbsArr, key, 'fats') + ' / ' + dataFromStorage.fats;
      carbsTextElem.textContent = calcSumOfValues(dataFromStorage, calcFatsArr, key, 'carbs') + ' / ' + dataFromStorage.carbs;
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
  calendar.style.display = 'flex';
  toWriteTodaysDate();
  generateDefaultCalendar();
  generateMonthAndYearElems();
}

function generateMonthAndYearElems() {
  let thisYear = new Date().getFullYear();
  let thisMonthIndex = new Date().getMonth();

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

calendarCancelBtn.addEventListener('click', onCancelCalendarButtonHandler);
calendarOkBtn.addEventListener('click', onOkCalendarButtonHandler);

function onCancelCalendarButtonHandler() {
  calendar.style.display = 'none';
}

function onOkCalendarButtonHandler() {
  calendar.style.display = 'none';
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
}

createMealButton.addEventListener('click', onCreateMealButtonHandler);

function onCreateMealButtonHandler() {
  mealPage.style.display = 'flex';
  scrollTo(0, 0);
  controlBar.style.display = 'none';
  writeMealName();
  jenerateDefaultCPFCValues();
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

function jenerateDefaultCPFCValues() {
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
  jenerateAllFoodVariants();
}

closeMealPageBtn.addEventListener('click', onCloseMealPageBtn);

function onCloseMealPageBtn() {
  mealPage.style.display = 'none';
  controlBar.style.display = 'flex';
  eatenMealsList.innerHTML = '';
}

searchInput.addEventListener('input', searchByInput);

function searchByInput() {
  foodContainer.innerHTML = '';
  let searchString = searchInput.value.toLowerCase();

  foodData.filter(food => {
    if(food.name.toLowerCase().includes(searchString)) {
      jenerateFoodAlgorithm(foodContainer, food);
    }
  })
}

function jenerateAllFoodVariants() {
  foodData.forEach((food) => {
    jenerateFoodAlgorithm(foodContainer, food);
  })
}

function jenerateFoodAlgorithm(container, elem) {
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
  jenerateAllFoodVariants();
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

      jenerateMealsList(choosenFoodElem, eatenCaloriesNum, eatenGramsNum);
    }
  }
  jenerateTotalCPFC(totalCalories, totalProteins, totalFats, totalCarbs);
}

function jenerateMealsList(choosenFoodElem, eatenCaloriesNum, eatenGramsNum) {
  eatenMealsList.insertAdjacentHTML('beforeend', `
    <div class="mealFoodBox">
      <div class="mealFoodWrapper">
        <h4 class="mealFoodH">${choosenFoodElem.name}</h4>
        <p class="mealFoodP">${eatenCaloriesNum} cal • ${eatenGramsNum} g</p>
      </div>
      <div class="deleteArea">
        <div class="deleteItem"></div>
        <div class="deleteItem"></div>
        <div class="deleteItem"></div>
      </div>
    </div>
  `);
}

function jenerateTotalCPFC(totalCalories, totalProteins, totalFats, totalCarbs) {
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
  if (mealData.hasOwnProperty(foodName)) {
    mealData[foodName] += grams;
  } else {
    mealData[foodName] = grams;
  }
}

function changeEatenFoodData(storageObj, mealKey, currentGrams) {
  let food = foodName.textContent;
  if (storageObj[mealKey].hasOwnProperty(food)) {
    storageObj[mealKey][food] += currentGrams;
  } else {
    storageObj[mealKey][food] = currentGrams;
  }
  mealData = storageObj[mealKey];
}

saveMealsButton.addEventListener('click', onSaveButtonHandler);

function onSaveButtonHandler() {
  mealCaloriesBlock.innerHTML = '';
  eatenMealsList.innerHTML = '';
  mealPage.style.display = 'none';
  mealData.time = getCurrentTime();
  let mealKey = mealName.textContent;
  userData[mealKey] = mealData;
  saveUserDataToLocalStorage(userData, userDataArray);
  cleanValuesElemsTextContent();
  toWriteEatenAndNormValuesInDom();
  jenerateMeal(mealName.textContent, mealData.eaten_Values.calories, mealData.time);
  controlBar.style.display = 'flex';
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

function jenerateMeal(mealName, caloriesNum, time) {
  mealsBlock.insertAdjacentHTML('beforeend', `
    <div class="mealbox">
      <div class="meal">
        <div class="mealHead">
          <h3 class="mealName">${mealName}</h3>
          <p class="calories">${caloriesNum} Cal</p>
        </div>
        <p class="mealTime">${time}</p>
      </div>
    </div>
  `)
  addEventListenersToMealBoxes();
}

function writeWaterDataInDom(storageObj) {
  Object.keys(storageObj).forEach((key) => {
    if(key.includes('waterIntake')) {
      waterNormIndicator.textContent = storageObj[key] + 'L';
      let waterDataArr = storageObj[key].split(' / ');
      calcPercentOfDrunkWater(waterDataArr[0], waterDataArr[1]);
    }

    if(key.includes('timeWaterIntake')) {
      waterIntakeTime.textContent = `Last time ${storageObj[key]}`
    }
  })
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
  if(checkWaterIntakeInLocalStorage() !== 0) {
    drunkWater = checkWaterIntakeInLocalStorage();
    drunkWater = Math.round((drunkWater + 0.1) * 10) / 10;
    toWriteWaterIntakeInDom(baseNorm, drunkWater);
    writeWaterIntakeTimeInDom();
    calcPercentOfDrunkWater(drunkWater, baseNorm);
    userData.waterIntake = drunkWater + ' / ' + baseNorm;
    userData.timeWaterIntake = getCurrentTime();
    saveUserDataToLocalStorage(userData, userDataArray);
  } else {
    drunkWater = Math.round((drunkWater + 0.1) * 10) / 10;
    toWriteWaterIntakeInDom(baseNorm, drunkWater);
    writeWaterIntakeTimeInDom();
    calcPercentOfDrunkWater(drunkWater, baseNorm);
    userData.waterIntake = drunkWater + ' / ' + baseNorm;
    userData.timeWaterIntake = getCurrentTime();
    saveUserDataToLocalStorage(userData, userDataArray);
  }
}

function onMinusButtonHandler(baseNorm, userData) {
  if(checkWaterIntakeInLocalStorage() !== 0) {
    drunkWater = checkWaterIntakeInLocalStorage();
    drunkWater = Math.round((drunkWater - 0.1) * 10) / 10;
    calcPercentOfDrunkWater(drunkWater, baseNorm);
    writeWaterIntakeTimeInDom();
    toWriteWaterIntakeInDom(baseNorm, drunkWater);
    userData.waterIntake = drunkWater + ' / ' + baseNorm;
    userData.timeWaterIntake = getCurrentTime();
    saveUserDataToLocalStorage(userData, userDataArray);
  } else {
    drunkWater = 0;
    calcPercentOfDrunkWater(drunkWater, baseNorm);
    writeWaterIntakeTimeInDom();
    toWriteWaterIntakeInDom(baseNorm, drunkWater);
    userData.waterIntake = drunkWater + ' / ' + baseNorm;
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
  jeneratePercentNumOfDrunkWater(persentOfDrunkWater);
}

function colorWaterIndicator(percent) {
  if(percent > 100) {
    waterColorIndicator.style.height = 100 + '%';
  } else {
    waterColorIndicator.style.height = percent + '%';
  }
}

function jeneratePercentNumOfDrunkWater(percent) {
  waterPercentNum.textContent = percent + '%'
}

function checkWaterIntakeInLocalStorage() {
  let dataFromLocalStorage = JSON.parse(localStorage.getItem('userDataArray'))[0];
  for(let key of Object.keys(dataFromLocalStorage)) {
    if(key.includes('waterIntake')) {
      let waterDataArr = dataFromLocalStorage[key].split(' / ');
      return Number(waterDataArr[0]);
    }
  }
  return null;
}

// доробити можливість видаляти, редагувати створені meals 
// + елементи по кліку на іконку користувача і зміна даних користувача 
// з головного меню =>

function addEventListenersToMealBoxes() {
  let mealBoxes = document.querySelectorAll('.mealbox');
  mealBoxes.forEach((box) => {
    box.removeEventListener('click', onMealBoxHandler);
    box.addEventListener('click', onMealBoxHandler);
  })
}

function onMealBoxHandler() {
  let mealNameElem = this.querySelector('.mealName').textContent;
  mealName.textContent = '';
  mealName.textContent = mealNameElem;
  mealPage.style.display = 'flex';
  scrollTo(0, 0);
  controlBar.style.display = 'none';
  checkMealDataInStorage(mealNameElem);
}

function checkMealDataInStorage(clickedMealName) {
  let data = JSON.parse(localStorage.getItem('userDataArray'))[0];
  Object.keys(data).forEach((key) => {
    if(key === clickedMealName) {
      jenerateSavedDataAboutMeal(data[key]);
    }
  })
}

function jenerateSavedDataAboutMeal(mealDataObj) {
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

  eatenMealsList.innerHTML = '';
  Object.keys(mealDataObj).forEach((key) => {
    if(!(key === 'eaten_Values') && !(key === 'time')) {
      eatenMealsList.insertAdjacentHTML('beforeend', `
        <div class="mealFoodBox">
          <div class="mealFoodWrapper">
            <h4 class="mealFoodH">${key}</h4>
            <p class="mealFoodP">${calcEatenCalories(key, mealDataObj[key])} cal • ${mealDataObj[key]} g</p>
          </div>
          <div class="deleteArea">
            <div class="deleteItem"></div>
            <div class="deleteItem"></div>
            <div class="deleteItem"></div>
          </div>
        </div>
      `);
    }
  })

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

