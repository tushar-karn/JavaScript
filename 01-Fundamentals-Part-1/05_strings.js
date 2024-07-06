const name = "Tushar "
const repoCount = 50

// console.log(name + repoCount + " Value"); old way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`PUBG`); //typeof gameName is object
// console.log(gameName , typeof gameName);

// console.log(typeof name);

// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.charAt(1));
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf("B"));


const personName = new String(`tushar-karn.com`);
// console.log(personName.length);
const personSubString = personName.substring(0, 6);
// console.log(personSubString);

const personSlice = personName.slice(0, 6);
// console.log(personSlice);

const newSlice = personName.slice(-8 , 10); 

//beginIndex: The index at which to start extraction. If negative, it is treated as str.length + beginIndex, where str is the string on which slice() is called.
// endIndex: The index before which to end extraction. The character at this index will not be included. If negative, it is treated as str.length + endIndex.

// Original String: 'tushar-karn.com'

// beginIndex (-8):

// Since it’s negative, it is calculated as str.length + beginIndex.
// The length of the string is 15 ('tushar-karn.com' has 15 characters).
// Therefore, beginIndex becomes 15 + (-8) = 7.

// console.log(newSlice);

const newString = "  Tushar Karn    ";
// console.log(newString);
// console.log(newString.trim());

const url = "https://tushar-karn.com";
// console.log(url.replace("-", ""));
const usableUrl = url.replace("-","");
// console.log(usableUrl);

// console.log(url.endsWith("com"));

// console.log(url.includes("tushar"));

const newGame = "PUBG Mobile Lite Version";
// console.log(newGame.split(" ")); // ["PUBG", "Mobile", "Lite", "Version"] returns an array of strings by splitting the string by the specified separator
// console.log(newGame.split("")); // ["P", "U", "B", "G", " ", "M", "o", "b", "i", "l", "e", " ", "L", "i", "t", "e", " ", "V", "e", "r", "s", "i", "o", "n"]


const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));

// concat(str1, str2) 

console.log(Math.round(2.5));

