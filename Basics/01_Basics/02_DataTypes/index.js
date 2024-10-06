//DataTypes

"use strict" // treat all JS code as newer version

//Datatypes

//Number
let num=20;

//string
let name1="Suraj";

//boolean
let isavailable=true;

//null
let state=null; // -> it's a standalone value and representation of empty value 


//undefined -> Declare a variable not assign any value.
let isdefined;

//symbol -> It is used to find uniqueness 

let id=Symbol("123");
console.log("Type Of ID: ", typeof id);
console.log("Value of :",id);

let anotherId=Symbol("123");
console.log("Comparison: ",id===anotherId);


console.table([name1,num,isavailable,state,isdefined]);

console.log("Type of null -> ",typeof(null));
console.log(typeof null);
console.log("Type of undefined -> ",typeof(undefined));


//Non-Primitive Data Types

console.log(" ");

console.log("Arrays: ");

//Arrays

let arr=["Hello","World",1,2,{
    name:"Suraj"
},"xyz"];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log("Type of Arrays:",typeof(arr));

//Function

const myfun=function (){
    console.log("This is a Function")
}

console.log(myfun);
console.log("Type of MyFunction: ",myfun);



