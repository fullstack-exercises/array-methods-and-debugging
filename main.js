// Part A
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }
]

const findSpiderMan = superheroes.find((item) => {
    return item.name === 'Spiderman';
});

console.log(findSpiderMan); // result: {name: "Spiderman", alter_ego: "Peter Parker"}

// Part B
const numbers = [1, 2, 3];
numbers.forEach((item) => {
    console.log(item * 2); // result: [2, 4, 6]
});

// Part C
containsNumberBiggerThan10 = [1, 4, 3, 6, 9, 7, 11];
const checkNumber = containsNumberBiggerThan10.some((number) => {
    return number < 10;
});
console.log(checkNumber); // result: true

// Part D
const isItalyInTheGreat7 = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];
const checkCountry = () => {
    console.log(includes('Italy'));
}
checkCountry; // result: true

// Part E
const numbersExerciseE = [1, 4, 3, 6, 9, 7, 11];
let multiplyBy10 = [];

numbersExerciseE.forEach((number) => {
    multiplyBy10.push(number * 10);
});
console.log(multiplyBy10); // Result: [10, 40, 30, 60, 90, 70, 110]

// Part F
const numbersBelow100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];
const isBelow100 = numbersBelow100.includes((number) => {
    return number <= 100;
});
console.log(isBelow100); // return: false

// Part G BONUS
const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const totalOfBigSum = bigSum.reduce((number, currentValue) => {
    return number + currentValue;
});
console.log(totalOfBigSum); // return: 1118