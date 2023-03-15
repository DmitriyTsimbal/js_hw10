import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Підрахувати кількість змін цін

const PRICES_ARRAY = getFilledArrayWithRandomNumbers(1, 100, 1, 10000);

const PRICES_CHANGES_COUNTER = PRICES_ARRAY.reduce((value, currentValue, currentIndex, array) => {
    if (currentValue !== array[currentIndex+1]) value++
    return value;
},-1)


const ARRAY_SECTION = document.querySelector('.array-section')
ARRAY_SECTION.innerHTML += `Prices: ${ PRICES_ARRAY }`
const ARRAY_CHANGES_SECTION = document.querySelector('.array-section__changes')
ARRAY_CHANGES_SECTION.innerHTML += `Prices changes counter: ${ PRICES_CHANGES_COUNTER }`
