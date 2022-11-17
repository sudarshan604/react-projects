lodash - javascript library

npm i lodash

import {compose,pipe} from ''lodash/fp"
lodash library is used to remove nexted function call and make it easier

eg
wrapInDiv(toLowerCase(trim(imput)))

we can simpl write it

const result=compose(wrapInDiv,toLowerCase,trim)
or from left to right use pipe

curring=is method where function return function and innerFunction access parameter of outer function

import { Map } from "immutable";
for making js object immutable

const person=Map({name:"rohan"})
dherai jhau xa kina vane plae javasccrip ma herna lai .toJs()
.get("name")
tesaile immer use garxau

npm i immer
