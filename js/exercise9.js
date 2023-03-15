import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Знайти першу ціну, що більше за 1000
const PRICES_ARRAY = getFilledArrayWithRandomNumbers(1, 100, 1, 10000);

const GET_FIRST_PRICE_THAT_MORE_THAN_1000 = PRICES_ARRAY.find(element => element>1000)


const ARRAY_SECTION = document.querySelector('.array-section')
ARRAY_SECTION.innerHTML += `Prices: ${ PRICES_ARRAY }`
const ARRAY_SUM_SECTION = document.querySelector('.array-section__result')
ARRAY_SUM_SECTION.innerHTML += `First price that more than 1000: ${ GET_FIRST_PRICE_THAT_MORE_THAN_1000 }`