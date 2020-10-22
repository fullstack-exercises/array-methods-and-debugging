const superheroes = [{
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
];

// .map, .filter of .reduce

// 1. All superheroes names
const supheroesNames = superheroes.map((person) => {
    return person.name;
});
console.log('All superheroes names: ' + supheroesNames);

// 2. All light superheroes < 190 pounds
const lightSuperheroes = superheroes.filter((person) => {
    return person.weight <= 190;
});
console.log('Weight of light superheroes ' + JSON.stringify(superheroes, ['weight']));

// 3. All names of superheroes that weight 200 pounds
const namesSuperheroes200Pound = superheroes.filter((person) => {
    return person.weight == 200;
}).map(person => {
    return person.name;
});
console.log('Names of superheroes that weight 200 Pounds: ' + namesSuperheroes200Pound);

// 4. Comics superheroes with first appearances
const firstAppearanceInComic = superheroes.map((person) => {
    return person.first_appearance;
});
console.log('First appearance in comics: ' + firstAppearanceInComic);

// 5. All superheroes from DC Comics
const dcComics = superheroes.filter((person) => {
    return person.publisher == 'DC Comics';
}).map(person => {
    return person.name;
});
console.log('All superheroes from DC comics: ' + dcComics);

const marvelComics = superheroes.filter((person) => {
    return person.publisher == 'Marvel Comics';
}).map(person => {
    return person.name;
});
console.log('All superheroes from Marvel Comics: ' + marvelComics);

// 6. Total weight of all superheroes
const weightOfAllSuperheroes = superheroes.filter((item) => {
    return item.weight > 0;
}).reduce((totalWeight, person) => {
    let total = parseInt(person.weight) + totalWeight;
    return total;

}, 0);
console.log('Weight of all superheroes ' + weightOfAllSuperheroes);

// 7 Doe hetzelfde met alle superhelden van Marvel Comics
const weightOfAllMarvelSuperheroes = superheroes.filter((person) => {
    return person.publisher == 'Marvel Comics';
}).filter((item) => {
    return item.weight > 0;
}).reduce((totalWeight, person) => {
    let total = parseInt(person.weight) + totalWeight;
    return total;

}, 0);
console.log('Weight of all Marvel superheroes ' + weightOfAllMarvelSuperheroes);

// 8 Bonus: Find heaviest superhero + written shorthand
const heaviestSuperhero = superheroes
    .filter(person => person.weight > 0)
    .filter(person => person.weight > 250)
    .map(person => person.name);

console.log(heaviestSuperhero);