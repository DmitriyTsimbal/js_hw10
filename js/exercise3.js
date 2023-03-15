import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

const PRICES_ARRAY = getFilledArrayWithRandomNumbers(1, 100, 1, 10000);

const MAX_PRICE = PRICES_ARRAY.reduce((maxValue, value) => maxValue > value ? maxValue : value);

const PRICES_PERCENTAGE_FROM_MAX_PRICE = PRICES_ARRAY.map(item => Math.round((item * 100) / MAX_PRICE));

const ARRAY_SECTION = document.querySelector('.array-section')
ARRAY_SECTION.innerHTML += `Prices: ${ PRICES_ARRAY }`
const ARRAY_SECTION_MAX = document.querySelector('.array-section__max')
ARRAY_SECTION_MAX.innerHTML += `Max price: ${ MAX_PRICE }`
const ARRAY_SECTION_PERCENTAGE = document.querySelector('.array-section__percentage')
ARRAY_SECTION_PERCENTAGE.innerHTML += `Percentages from max price: ${ PRICES_PERCENTAGE_FROM_MAX_PRICE.join('%, ') }%`
