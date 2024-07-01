let score = NaN;

// console.log("score:", score);
// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log("valueInNumber:", valueInNumber);

// console.log("valueInNumber:type", typeof valueInNumber);

// * * "33" => 33
// * "33abc" => NaN
// * true => 1; false => 0
// * undefined =>  NaN
// * null // => 0
// * "hello" // => NaN
// * ``  // => 0
// *  Nan // => NaN

let isLoggedin = "";
// console.log("isLoggedin:", isLoggedin);
// console.log("isLoggedin:type", isLoggedin);

let booleanIsLoggedin = Boolean(isLoggedin);
// console.log("booleanIsLoggedin:", booleanIsLoggedin);
// console.log("booleanIsLoggedin:type", booleanIsLoggedin);

// * 1 => true; 0 => false
// * "" => false
// * "hitesh" => true
// * undefined => false
// * NaN => false
// * null => false

let someNumber = ``;
// console.log("someNumber:", someNumber);
// console.log("someNumber:type ", typeof someNumber);

let stringNumber = String(someNumber);
// console.log("stringNumber:", stringNumber);
// console.log("stringNumber:type", typeof stringNumber);

// * 23 => string
// * true/false => string
// * undefined => string
// * null=>  string
// * NaN => string
// * `` => string

// ! *********************************** Operations ***********************************

let value = ``;
let negValue = -value;
// console.log("negValue:", negValue);
// console.log("negValue: type", typeof negValue);
// * value     === optput    type

// * 2         ==> -2       number
// * "manthan" ==> NaN      number
// * true      ==> -1       number
// * false     ==> -0       number
// * undefined ==> NaN      number
// * null      ==> -0       number
// * ``        ==> -0       number

// * console.log(2+2)   // 2
// * console.log(2+2); ==> 4
// * console.log(2-2);  ==>0
// * console.log(2*2);  ==> 4
// * console.log(2**3); ==6
// * console.log(2 / 3);    ==>0.6
// * console.log("2 % 3", 2 % 3);  ==> 2 is remender

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3);

// * console.log("1" + 2);            ==> 12
// * console.log(1 + "2");            ==> 12
// * console.log("1" + 2 + 2);        ==> 122
// * console.log(1 + 2 + "2");        ==> 32

// * console.log(((3 + 4) * 5) % 3);  ==> 2

// * console.log(+true);              ==> 1
// * console.log(+"");                ==> 0

// * console.log(+true);                   ==> 1
// * console.log(+" ");                    ==> 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
// console.log("gameCounter:", gameCounter); // * 101

let x = 3;
const y = x++;
// ! expected is x = 3 and y = 4
console.log(`x: ${x} y :${y}`); // * x:4 y:3

// ? If used postfix, with operator after operand (for example, x++),
// ?  the increment operator increments and returns the value before incrementing.
0;
// ? If used prefix, with operator before operand (for example, ++x),
// ? the increment operator increments and returns the value after incrementing.

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
