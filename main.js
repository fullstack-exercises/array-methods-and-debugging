// Part A
const addTheWordCool = () => {
    let words = ["nice", "awesome", "tof"];
    words.push('cool');
    return words;
}
console.log(addTheWordCool()); // result: ["nice", "awesome", "tof", "cool"]

// Part B
const returnItems = () => {
    let items = ['appels', 'peren', 'citroenen'];
    return items.length;
}
console.log(returnItems()); // 3

// Part C
const returnFirstItem = () => {
    let items = ['Belgie', 'Nederland', 'Luxenburg'];
    return items[0];
}
console.log(returnFirstItem()); // result: Belgie

// Part D
const returnLastItem = () => {
    let items = ['Haas', 'Cavia', 'Kip', 'Schildpad'];
    return items[items.length - 1];
}
console.log(returnLastItem()); // result: Schildpad

// Part E
const presidents = ["Trump", "Obama", "Bush", "Clinton"]
const dissapearFirstIteminArray = () => {
    return presidents.slice(2)
}
console.log(dissapearFirstIteminArray()); // result: [ 'Obama', 'Bush', 'Clinton' ]

// Part F
const stringsTogether = () => {
    let words = ['Winc', 'Academy', 'is', 'leuk', ';-}'];
    return words.join();
}
console.log(stringsTogether()); // result: Winc,Academy,is,leuk,;-}

// Part G
const combineArrays = () => {
    array1 = [1, 2, 3];
    array2 = [4, 5, 6];
    combine = [...array1, ...array2];
    return combine;
}
console.log(combineArrays()); // result: [ 1, 2, 3, 4, 5, 6 ]