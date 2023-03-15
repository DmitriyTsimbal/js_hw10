import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Визначати, чи усі ціни більше за 1000

const PRICES_ARRAY = getFilledArrayWithRandomNumbers(1, 100, 1, 10000);
const IS_ALL_PRICES_MORE_THAN_1000 = PRICES_ARRAY.every((value)=> value > 1000);

const ARRAY_SECTION = document.querySelector('.array-section')
ARRAY_SECTION.innerHTML += `Prices: ${ PRICES_ARRAY }`
const ARRAY_ANSWER_SECTION = document.querySelector('.array-section__answer')
ARRAY_ANSWER_SECTION.innerHTML += IS_ALL_PRICES_MORE_THAN_1000 === true ? 'All prices is more than 1000' : 'There is prices less than 1000';
