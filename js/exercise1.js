import {getFilledArrayWithRandomNumbers} from "./random-array.js";
//Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
const PRICES_ARRAY = getFilledArrayWithRandomNumbers(1,100,1,10000);


//Using reduce
// const PRICES_ARRAY_FILTERED = PRICES_ARRAY.reduce((value, price, currentIndex) =>
//     (price > 1000 ? ([...value, currentIndex]) : value),
//         []
// )


//Using filter and map methods
const PRICES_ARRAY_FILTERED = PRICES_ARRAY
    .map((price, index) => {
        if (price > 1000) return index
    })
    .filter(index => index !== undefined);

const ARRAY_SECTION = document.querySelector('.array-section')
ARRAY_SECTION.innerHTML += `Prices: ${PRICES_ARRAY}`
const ARRAY_SECTION_FILTERED = document.querySelector('.array-section__filtered')
ARRAY_SECTION_FILTERED.innerHTML += `Filtered prices indexes: ${PRICES_ARRAY_FILTERED}`
