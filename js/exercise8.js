import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Підрахувати суму цін, що більше за 1000

const PRICES_ARRAY = getFilledArrayWithRandomNumbers(1, 100, 1, 10000);

const GET_SUM_OF_PRICES_THAT_MORE_THAN_1000 = PRICES_ARRAY.reduce((value, currentValue)=>{
    if(currentValue > 1000) value+=currentValue;
    return value;
},0)

const ARRAY_SECTION = document.querySelector('.array-section')
ARRAY_SECTION.innerHTML += `Prices: ${ PRICES_ARRAY }`
const ARRAY_SUM_SECTION = document.querySelector('.array-section__sum')
ARRAY_SUM_SECTION.innerHTML += `Sum of prices that more than 1000: ${ GET_SUM_OF_PRICES_THAT_MORE_THAN_1000 }`
