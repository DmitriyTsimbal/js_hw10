import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Підрахувати кількість цін, що більше за 1000

const PRICES_ARRAY = getFilledArrayWithRandomNumbers(1, 100, 1, 10000);

const GET_COUNT_OF_PRICES_MORE_THAN_1000 = PRICES_ARRAY.reduce((value, currentValue) => {
    if (currentValue > 1000) value++
    return value
},0)


const ARRAY_SECTION = document.querySelector('.array-section')
ARRAY_SECTION.innerHTML += `Prices: ${ PRICES_ARRAY }`
const ARRAY_COUNTER_SECTION = document.querySelector('.array-section__count')
ARRAY_COUNTER_SECTION.innerHTML += `Prices that more than 1000, counter : ${ GET_COUNT_OF_PRICES_MORE_THAN_1000 }`
