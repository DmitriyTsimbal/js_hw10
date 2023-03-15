import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Знайти індекс першої ціни, що більше за 1000

const PRICES_ARRAY = getFilledArrayWithRandomNumbers(1, 100, 1, 10000);

const GET_INDEX_OF_FIRST_PRICE_MORE_THAN_1000 = PRICES_ARRAY.findIndex(value => value > 1000);

const ARRAY_SECTION = document.querySelector('.array-section')
ARRAY_SECTION.innerHTML += `Prices: ${ PRICES_ARRAY }`
const ARRAY_INDEX_SECTION = document.querySelector('.array-section__index')
ARRAY_INDEX_SECTION.innerHTML += `Index of first price that more than 1000: ${ GET_INDEX_OF_FIRST_PRICE_MORE_THAN_1000 }`