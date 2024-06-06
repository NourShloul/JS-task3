/*1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
// ---------------------------Q1---------------------------------------
function tellFortune(job, location, partner, numOfkids) {
  return `You will be a ${job} in ${location}, and married to ${partner} with ${numOfkids} kids.`;
}
let a = tellFortune("Full-Stack Web developer", "Amman", "Nour", 2);
console.log(a);

/*2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
//-----------------------------Q2------------------------------------
function calculateDogAge(NN) {
  NN *= 7;
  return `Your doggie is ${NN} years old in dog years!`;
}
let dogOld = calculateDogAge(prompt("enter the human year"));
console.log(dogOld);

/*3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
// -----------------------------Q3-------------------------------------
function calculateSupply(age, amoutPerDay) {
  let maxAge = 100;
  let need = (maxAge - age) * (amoutPerDay * 365);
  console.log(
    "You will need " +
      need +
      " cups of tea to last you until the ripe old age of " +
      maxAge
  );
}
calculateSupply(25, 4);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
// ------------------------------Q4------------------------------------
function greet(name) {
  return "hello " + name;
}
let b = greet(prompt("enter yourname"));
window.alert(b);

//5 what is the error:
//------------------------------Q5--------------------------------------
// function double(cat) {
//   return 2 * x;
// }
//solution:
function double(cat) {
  let x = cat;
  return 2 * x;
}
console.log(double(4));
// hint : the x is not defind so declare x

// function double(7) {
//     return 2 * 7;
//   }
//solutiion:
function double(x) {
  return 2 * 7;
}
//hint : error messeage (Identifier expected) the parameter must be a variableName not value

// function double('7') {
//   return 2 * 'x';
// }
//solution:
function double(x) {
  return 2 * "7";
}
console.log(double(5));
//hint : error messeage (Identifier expected) the parameter must be a variableName not value and change the 'x' in return to 'number' to return value not NaN

/*6 
fix these functions:
func double1(x {
  return 2 * x ;
} */
// ---------------------------------Q6----------------------------------
//solution:
function double1(x) {
  return 2 * x;
}
/*
functiondouble2 x)
return 2 * x;
}*/
//soultion:
function double2(x) {
  return 2 * x;
}
/*
function (x) double3 {
  return 2 * x;
*/
//solution:
function double3(x) {
  return 2 * x;
}

/*7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
//---------------------------------Q7----------------------------------
function cube(c) {
  let u = c * c * c;
  return u;
}
let u = cube(5);
console.log(u);

/*8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
//----------------------------------Q8---------------------------------
function multiply(x, y) {
  console.log(x * y);
}
multiply(4, 7);
multiply(2, 8);

/*9 Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"
*/
//----------------------------------------Q9----------------------------------
function canIGetADrivingLicense(age) {
  let x = 20 - age;
  if (age >= 20) {
    return "yes you can";
  } else {
    return `please come back after ${x} years to get one`;
  }
}
let A = canIGetADrivingLicense(14);
console.log(A);
let B = canIGetADrivingLicense(25);
console.log(B);

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
//------------------------------------------Q10-----------------------------------------
function sameLength(string1, string2) {
  if (string1.length == string2.length) {
    return true;
  } else {
    return false;
  }
}
let S1 = sameLength("Nour", "Zain");
console.log(S1);
let S2 = sameLength("Nour", "Salwa");
console.log(S2);
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
//------------------------------------------Q11---------------------------------------
function largerNubmer(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
let largeNum = largerNubmer(10, 20);
console.log(largeNum);
let largeNumm = largerNubmer(50, 30);
console.log(largeNumm);
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
//------------------------------Q12-----------------------------
function smallerNubmer(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return num1;
  } else if (num2 < num1 && num2 < num3) {
    return num2;
  } else {
    return num3;
  }
}
let x = smallerNubmer(4, 7, 2);
console.log(x);
let y = smallerNubmer(9, 1, 3);
console.log(y);
let z = smallerNubmer(2, 4, 3);
console.log(z);

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
//-------------------------Q13----------------------------------
function shorterString(s1, s2, s3, s4, s5) {
  if (
    s1.length < s2.length &&
    s1.length < s3.length &&
    s1.length < s4.length &&
    s1.length < s5.length
  ) {
    return s1;
  }
  if (
    s2.length < s1.length &&
    s2.length < s3.length &&
    s2.length < s4.length &&
    s2.length < s5.length
  ) {
    return s2;
  }
  if (
    s3.length < s1.length &&
    s3.length < s2.length &&
    s3.length < s4.length &&
    s3.length < s5.length
  ) {
    return s3;
  }
  if (
    s4.length < s1.length &&
    s4.length < s2.length &&
    s4.length < s3.length &&
    s4.length < s5.length
  ) {
    return s4;
  }
  if (
    s5.length < s1.length &&
    s5.length < s2.length &&
    s5.length < s3.length &&
    s5.length < s4.length
  ) {
    return s5;
  }
}
let X = shorterString(
  "stysntys",
  "Nour",
  "Rashid",
  "shloouul",
  "asdfghjklqwerty"
);
console.log(X);
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string
Ex: longerString("air","school","car","github")
=> school
Ex: longerString("air","schoo","car","github")
=> github
try all the cases (change the order of the longestString)
*/
//-------------------------------------Q14-------------------------------------------------
function longerString(s1, s2, s3, s4) {
  if (
    s1.length > s2.length &&
    s1.length > s3.length &&
    s1.length > s4.length &&
    s1.length > s5.length
  ) {
    return s1;
  }
  if (
    s2.length > s1.length &&
    s2.length > s3.length &&
    s2.length > s4.length &&
    s2.length > s5.length
  ) {
    return s2;
  }
  if (
    s3.length > s1.length &&
    s3.length > s2.length &&
    s3.length > s4.length &&
    s3.length > s5.length
  ) {
    return s3;
  }
  if (
    s4.length > s1.length &&
    s4.length > s2.length &&
    s4.length > s3.length &&
    s4.length > s5.length
  ) {
    return s4;
  }
}
let Y = longerString("stysntys", "Nour", "Rashid", "shloouul");
console.log(Y);
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd
Ex: isEven(1)
=> false
Ex: isEven(2)
=> true
*/
//-------------------------------------------Q15------------------------------
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
let ev = isEven(10);
console.log(ev);
ev = isEven(7);
console.log(ev);

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num) {
  if (num % 2 != 0) {
    return true;
  } else {
    return false;
  }
}
let od = isOdd(10);
console.log(od);
od = isOdd(7);
console.log(od);

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num) {
  if (num > 0) {
    return num;
  } else {
    return -num;
  }
}
let pos = positive(10);
console.log(pos);
pos = positive(-7);
console.log(pos);

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
//-----------------------------------Q18-------------------------------------------

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
let NameFull = fullName("Nour", "Rashid");
console.log(NameFull);

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
//--------------------------------Q19--------------------------------------------
function average(in1, in2, in3, in4, in5) {
  return (in1 + in2 + in3 + in4 + in5) / 5;
}
let avg = average(10, 21, 32, 4, 7);
console.log(avg);

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
//--------------------------------------Q20-------------------------------------
function randomNumber() {
  return Math.random();
}
let ran = randomNumber(10);
console.log(ran);
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
//--------------------------------------Q21---------------------------------------
function randomBetweenNumbers(min, max) {
  return Math.random() * (max - min) + min;
}
let rand = randomBetweenNumbers(5, 10);
console.log(rand);

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
//-----------------------------------Q22------------------------------------
function scoreInUniversty(score) {
  if (score <= 49) {
    return "F";
  } else if (score >= 50 && score <= 69) {
    return "D";
  } else if (score >= 70 && score <= 84) {
    return "C";
  } else if (score >= 85 && score <= 94) {
    return "B";
  } else {
    return "A";
  }
}
let score = scoreInUniversty(35);
console.log(score);
score = scoreInUniversty(80);
console.log(score);
score = scoreInUniversty(90);
console.log(score);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3
*/
//------------------------------------------Q23-------------------------------
let i = 0;
function counter() {
  return i++;
}
let count = counter();
console.log(count);

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
//-----------------------------------------Q24----------------------------------------
function resetCounter() {
  return `${count()} and the counter reset now`;
}
count = counter();
console.log(count);
count = counter();
console.log(count);
