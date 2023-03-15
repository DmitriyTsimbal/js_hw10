import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Визначити, чи є ціна, що менше 1000

const PRICES_ARRAY = getFilledArrayWithRandomNumbers(1, 100, 1, 10000);

const PRICE_LESS_THAN_1000 = PRICES_ARRAY.find((value) => value < 1000)


const ARRAY_SECTION = document.querySelector('.array-section')
ARRAY_SECTION.innerHTML += `Prices: ${ PRICES_ARRAY }`
const ARRAY_CHANGES_SECTION = document.querySelector('.array-section__result')
ARRAY_CHANGES_SECTION.innerHTML += PRICE_LESS_THAN_1000 === undefined ? 'All prices more than 1000' : 'There is price less than 1000' ;
