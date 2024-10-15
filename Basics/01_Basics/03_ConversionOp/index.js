let score=33;

console.log(typeof score);  //Number
console.log(typeof(score)); //Number

let con=Number(score);
console.log(typeof(con));   //Number
console.log(con);           //33

console.log("This is Another Example")

let score1="33aa";
console.log(typeof(score1));
console.log(typeof score1);

let con1=Number(score1);
console.log(typeof con1);
console.log(con1);


console.log(" ");
let score2=null;
console.log("Type->",typeof score2);  //object

let con2=Number(score2);
console.log("Type->", typeof con2);    //Number 
console.log("Value->", con2);          //0

let con3=String(score2);
console.log("Type->",typeof con3);   // string
console.log("Value-> ",con3);        // null

console.log(" ");
let score3=undefined;
console.log("Type->",typeof(score3));   //undefined
console.log("Value-> ",score3);         //undefined
let con4=Number(score3)
console.log("type->",typeof(con4));    //number
console.log("value->",con4);           //NaN


console.log(" ");

let someNum=true;
console.log(+someNum); //1 and for false -> 0

console.log(" ");

let someNum1=1+"2";
console.log(someNum1); //12

let someNum3="1"+2; //12

let someNum4="1"+"2"; //12

console.log(" ");

let someNum5=1+2+"3";
console.log("someNum5:"+someNum5)

let someNum6="1"+2+3+4;
console.log("someNum5: "+someNum6);

//console.log([(0.1 + 0.2)] == [(0.3)]);


console.log("Comparison: ",null>0); //false
console.log(null==0);  //false
console.log(null>=0);  //true -> In compariosn null is automatically converted into a number and it's value will be 0 then it will check 0 isEqual to 0 then it will be yes so it's answer will be true

console.log("2">1); //true
console.log(2>"1"); //true..

//********************************************************************************************************************************* */

//Stack and Heap Concept

//primitive data types uses stack memory -> only get variable's copy if we change only value it's not refelect on other's value
//non-primitive data types uses heap memory -> get reference so if we change one value it's reflect on other.


let var1="First Variable";
let var2=var1;
var2="Second Variable";



console.log("var1",var1); //First Variable
console.log("var2",var2); //Second Variable

let user1={
    name:"Suraj"
}

let user2=user1;
user2.name="Tupkar";

console.log(user1.name);
console.log(user2.name);







