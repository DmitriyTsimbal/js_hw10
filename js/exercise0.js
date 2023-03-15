import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

const PRICES_ARRAY = getFilledArrayWithRandomNumbers(1,100,1,10000);

const PRICES_ARRAY_FILTERED = PRICES_ARRAY.filter(price => price > 1000)

const ARRAY_SECTION = document.querySelector('.array-section')
ARRAY_SECTION.innerHTML += `Prices: ${PRICES_ARRAY}`
const ARRAY_SECTION_FILTERED = document.querySelector('.array-section__filtered')
ARRAY_SECTION_FILTERED.innerHTML += `Filtered prices: ${PRICES_ARRAY_FILTERED}`
