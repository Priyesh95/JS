const marvel_heros = ["ironman", "hulk", "thor"];
const dc_heros = ["batman", "superman", "flash"];

marvel_heros.push(dc_heros);

console.log(marvel_heros)

// marvel_heros = ["ironman", "hulk", "thor", ["batman", "superman", "flash"]];

const all_heroes = marvel_heros.concat(dc_heros);

//all_heroes = ["ironman", "hulk", "thor", "batman", "superman", "flash"]

const all_heroes_spread = [...marvel_heros, ...dc_heros] // spread operator means now all elements of array are seperate. If a bowl of glass when dropped spreads into pieces

console.log(all_heroes_spread)

console.log(Array.isArray(all_heroes_spread));
console.log(Array.isArray("Priyesh"));
console.log(Array.from("Priyesh")); // ['P', 'r', 'i','y', 'e', 's','h']
