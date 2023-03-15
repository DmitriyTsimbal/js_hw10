import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Сформувати список з тих цін, які більші за попереднє значення

const PRICES_ARRAY = getFilledArrayWithRandomNumbers(1,100,1,10000);

const PRICES_FILTERED = PRICES_ARRAY.reduce((previousValue, currentValue, currentIndex, array) => currentValue > array[currentIndex-1] ?
    ([...previousValue, currentValue]) : previousValue,[])

const ARRAY_SECTION = document.querySelector('.array-section')
ARRAY_SECTION.innerHTML += `Prices: ${PRICES_ARRAY}`
const ARRAY_SECTION_FILTERED = document.querySelector('.array-section__filtered')
ARRAY_SECTION_FILTERED.innerHTML += `Filtered prices: ${PRICES_FILTERED}`
