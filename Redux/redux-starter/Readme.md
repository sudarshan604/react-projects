function are like first class citizen in javascript we can assign then pass them and return them

assign function
function sayHello() {
return "Hello world";
}

let fn = sayHello;

fn();

lodash - javascript library

npm i lodash

import {compose,pipe} from ''lodash/fp"
lodash library is used to remove nexted function call and make it easier
eg

wrapInDiv(toLowerCase(trim(imput)))
we can simpl write it

const result=compose(wrapInDiv,toLowerCase,trim)
it return a function
result()
or from left to right use pipe
const result=pipe(trim,toLowerCase,wrapInDiv)

curring=is method where function return function and innerFunction access parameter of outer function

1.shallow copy & deep copy

1.shallow copy
const person={
name:'r',
address:{
city:'us'
}
}

const updated={...person,name:'b'}

updated.address.city:'ew'
it updated both person and updated object so it is called shallow copy

to solve this we use deep copy

2.deep copy
1.shallow copy
const person={
name:'r',
address:{
city:'us'
}
}

const updated={...person,address:{...person.address,
city:'ew'
},
name:'BB'
}

//working with immuable js

npm i immutable
import { Map } from "immutable";
for making js object immutable

const person=Map({title:"rohan"})

person.get("title")

const person=person.set('isPublish',true)

console.log(person.toJS())

//so we use inner it better then immutable

npm i immer

import {produce} from 'immer'

let book={title:'harr'}

function pulich(book)
{
return produce(book,draftBook=>{ //produce return a object so,book object is not modify directly
draftBook.isPublished=true
})
}

const updatedBook=publish(book)

//

redux devtools extenxiion install
npm i redux-devtools-extension

in webpack,config adding
devtool: "source-map",
because of that by default vscode is open after adding path in redux extension setting path
