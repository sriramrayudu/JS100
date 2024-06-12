//ARRAY
const myArr=[1,2,45,77,98]
//console.log(myArr[3])
myArr.push(7777)
//console.log(myArr)
 //const newArr = myArr.join()

 //console.log(myArr);
 //console.log( newArr);
//slice(excludes last index )and splice(last index too)
//+++++++++++++++++++++++++++++++++
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hiteshhh"))
console.log(Array.from("Hiteshhhhhh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));