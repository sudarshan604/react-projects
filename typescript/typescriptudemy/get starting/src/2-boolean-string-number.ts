let numbers:number[]=[1,2,3,4,5]

//array of string
let products:string[]=["hats","shirst","shirt"]

//Array of string and numbers
let mixDdata:(string | number)[]=[4,'hats']

//nested number rype array
let myNums:number[][]=[
      [1,2],
      [2,3]
    ]

//nested number rype string
 let myString:string[][]=[
    ["hi"],
    ["hello"]
  ]


let myMixedNested:(string|number)[][]=[
    ["hwllo",1]
]






//tuples
const courseDetailes:[string,number]=["hello",12]

const courseDetailes1=["hello",12]



//Enum

//1.Numneric enum

// enum RollNumber{
//   John,
//   Kelly,
//   sandra,
//   Joseph,
//   Samantha

// }

enum RollNumber{
  John=1,
  Kelly,
  sandra,
  Joseph,
  Samantha

}
let studentRollNumber:RollNumber=RollNumber.sandra


let num1:number=2
let num2:number=3


if(num1>num2){
   console.log(`${num1} is greater than ${num2}`)
}

//For loops in typescript

// for(let i:number=0;i<10;i++){ console.log(i) }


let nums:number[]=[10,20,30,40,50,60,70]

for(let i:number=0;i<nums.length;i++){
   console.log(nums[i])
}

//for in loops

let data:(string|number)[]=["cosmos",13,50,"star"]

for(let dataPoint in data){
 
   console.log(`${+dataPoint+1}-${data[dataPoint]}`)//+ change string index to number

}























