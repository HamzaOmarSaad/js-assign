//====================Q1=============================================
let value1 = "123";
let newvalue1 = Number(value1);
let result1 = newvalue1 + 7;
console.log(" result1:", result1);
//====================Q2=============================================
function checkFalse(value) {
  if (value) return "Valid";
  return "Invalid";
}
console.log(checkFalse(0));

//====================Q3=============================================

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}
//====================Q4=============================================
let arr = [1, 2, 3, 4, 5];
let evens = arr.filter((n) => n % 2 === 0);
console.log(evens);

//====================Q5=============================================
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged);

//====================Q6=============================================
function getDay(num) {
  switch (num) {
    case 1:
      return "Sun";
    case 2:
      return "Mon";
    case 3:
      return "Tues";
    case 4:
      return "Wed";
    case 5:
      return "Thu";
    case 6:
      return "Fri";
    case 7:
      return "Sat";
    default:
      return "wrong input";
  }
}

console.log(getDay(2));

//====================Q7=============================================
let words = ["hamza", "hamz", "haz"];
let lengths = words.map((s) => s.length);
console.log(lengths);

//====================Q8=============================================
function checkDiv(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "Divisible ";
  }
  return "Not divisible ";
}

console.log(checkDiv(15)); // Divisible
console.log(checkDiv(10)); // notDivisible

//====================Q9=============================================
let square = (n) => {
  return n * n;
};
console.log(square(3)); // 9

//====================Q10=============================================
function describe({ name, age }) {
  return "my name is " + name + " and i am " + age + " years old";
}

const info = { name: "hamza", age: 25 };
console.log(describe(info));

//====================Q11=============================================
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

//====================Q12=============================================
function waitSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Success"), 3000);
  });
}

waitSuccess().then(console.log);

//====================Q13=============================================
function largest(arr) {
  return Math.max(...arr);
}

console.log(largest([1, 3, 7, 2, 4])); // 7

//====================Q14=============================================
function getKeys(obj) {
  return Object.keys(obj);
}
console.log(getKeys({ name: "John", age: 30 }));

//====================Q15=============================================

function splitString(str) {
  return str.split(" ");
}

console.log(splitString("this is a sentences we want to split"));

//=================================================================
//####################ESSAY QUESTION ##############################
//=================================================================

/*
*1*
  for each ==>is used on array for applying sth on each elemet in an array also it dont support break

  for of ==> work on every thing have elemets in it (string ,array )also it  support break

*2*
Hoisting ==> JavaScript moves declarations to the top before execution.

Temporal Dead Zone ==> Variables declared with let or const are hoisted but not usable until the line they are declared on.

*3*

  ==	Values only 
  ===	Value + type

*4*
try{
block of code if an error happend in it i want to catch it 
}
catch (error){
what will happend when an error happend 
}

for asyn code if there is any error happen with the result of the async code the catch bloc kwill fire preventing program from stoping
*5*
Type Conversion  ==> You change the type manually.
Type Coercion  ==> JavaScript converts automatically.

 */
