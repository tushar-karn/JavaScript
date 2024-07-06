"use strict"

// Conversion Operation

// study 

let myVar = "34abc";
let myVar2 = null;
console.log(myVar, typeof myVar);

let myNum = Number(myVar);
console.log(myNum, typeof myNum);

let myNum2 = Number(myVar2);
console.log(myNum2, typeof myNum2);


if (typeof myNum == "number" && isNaN(myNum) == false) {
    console.log("This is a proper number");
}
else {
    console.log("This is not a Proper number");
}

if (typeof myNum2 == "number" && myVar2 != null) {
    console.log("This is a proper number");
}
else {
    console.log("This is not a Proper number");
}


// "33" => 33 , typeof "33" => number
// "33abc" => NaN , typeof "33abc" => number
//  true => 1; false => 0 , typeof true/false after conversion => number
// null => 0 , typeof null after conversion => number
// undefined => NaN , typeof undefined after conversion => number
// " " => 0 , typeof " " after conversion => number
// "abc" => NaN , typeof "abc" after conversion => number
// [] => 0 , typeof [] after conversion => number
// [1, 2, 3] => NaN , typeof [1, 2, 3] after conversion => number
// {} => NaN , typeof {} after conversion => number
// {name: "Tushar"} => NaN , typeof {name: "Tushar"} after conversion => number


// Conversion to String

let myVar3 = 34;
console.log(myVar3, typeof myVar3);

let myStr = String(myVar3);
console.log(myStr, typeof myStr);


// Conversion to Boolean

let myVar4 = 34;
console.log(myVar4, typeof myVar4);

let myBool = Boolean(myVar4);
console.log(myBool, typeof myBool);

// falsy values
// 0, "", null, undefined, NaN, false
// all other values are truthy values


// *********************** Operations ***********************

// console.log(+true); // 1
// console.log(+""); // 0
// console.log(+"abc"); // NaN

/* Confusioning Operations 

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

*/

