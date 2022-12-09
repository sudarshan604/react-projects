/*
import { compose, pipe } from "lodash/fp";

function sayHello() {
  return function () {
    return "hello world";
  };
}

let fn = sayHello;

fn();

function greet(fnMessage) {
  console.log(fnMessage());
}

/* Higher order function
 function that function as a argument or return function or both 
example are map(),setTimeout
*/
/*

let input = " javascript   ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();

const wrapDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

/* 



*/
/*
let inputc = " javascript   ";
const trimc = (str) => str.trim();

const wrap = (type, str) => `<${type}>${str}</${type}>`;
const toLowerCasec = (str) => str.toLowerCase();

const tranform = pipe(trimc, toLowerCasec, wrap("div")); // show error
//we cannot do that becasuse it show error as string is pass in pipe (wrap(div) call and passed )

//but instead we can use currying method

//i.e

const wrapn = (type) => (str) => `<${type}>${str}</${type}>`;

//now we can call wrap because it return function and pass as function
const tranformn = pipe(trimc, toLowerCasec, wrap("div")); //right

//purse function always return same result
//immutability-once created canot ne changed,to chnage take copy and changed
//why immutability
/*
prdictible
faseter change detection

cons
 performance
 memory overhead
 */
/*
const person = { name: person };

const Updated = Object.assign({}, person, { name: "bob," }); //->to copy object
const updated1 = { ...person, name: "rof" };

//IMMUTABILITY IN ARRAY

//adding
const numbers = [1, 2, 3];
const added = [4, ...numbers];

*/
