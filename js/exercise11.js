import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Знайти останню ціну, що більше за 1000

const PRICES_ARRAY = getFilledArrayWithRandomNumbers(1, 100, 1, 10000);

const GET_LAST_PRICE_THAT_MORE_THAN_1000 = PRICES_ARRAY.findLast(value => value > 1000)

const ARRAY_SECTION = document.querySelector('.array-section')
ARRAY_SECTION.innerHTML += `Prices: ${ PRICES_ARRAY }`
const ARRAY_RESULT_SECTION = document.querySelector('.array-section__result')
ARRAY_RESULT_SECTION.innerHTML += `Index of last price that more than 1000: ${ GET_LAST_PRICE_THAT_MORE_THAN_1000 }`