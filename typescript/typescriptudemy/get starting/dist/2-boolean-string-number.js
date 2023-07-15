"use strict";
let numbers = [1, 2, 3, 4, 5];
let products = ["hats", "shirst", "shirt"];
let mixDdata = [4, 'hats'];
let myNums = [
    [1, 2],
    [2, 3]
];
let myString = [
    ["hi"],
    ["hello"]
];
let myMixedNested = [
    ["hwllo", 1]
];
const courseDetailes = ["hello", 12];
const courseDetailes1 = ["hello", 12];
var RollNumber;
(function (RollNumber) {
    RollNumber[RollNumber["John"] = 1] = "John";
    RollNumber[RollNumber["Kelly"] = 2] = "Kelly";
    RollNumber[RollNumber["sandra"] = 3] = "sandra";
    RollNumber[RollNumber["Joseph"] = 4] = "Joseph";
    RollNumber[RollNumber["Samantha"] = 5] = "Samantha";
})(RollNumber || (RollNumber = {}));
let studentRollNumber = RollNumber.sandra;
let num1 = 2;
let num2 = 3;
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
}
let nums = [10, 20, 30, 40, 50, 60, 70];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}


let data = ["cosmos", 13, 50, "star"];
for (let dataPoint in data) {
    console.log(`${+dataPoint + 1}-${data[dataPoint]}`);
}
