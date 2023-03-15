import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Знайти індекс останньої ціни, що більше за 1000

const PRICES_ARRAY = getFilledArrayWithRandomNumbers(1, 100, 1, 10000);

const GET_INDEX_OF_LAST_PRICE_MORE_THAN_1000 = PRICES_ARRAY.findLastIndex(value => value > 1000)


const ARRAY_SECTION = document.querySelector('.array-section')
ARRAY_SECTION.innerHTML += `Prices: ${ PRICES_ARRAY }`
const ARRAY_LAST_INDEX_SECTION = document.querySelector('.array-section__index')
ARRAY_LAST_INDEX_SECTION.innerHTML += `Index of last price that more than 1000: ${ GET_INDEX_OF_LAST_PRICE_MORE_THAN_1000 }`