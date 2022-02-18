// ACTIVITY 1//
let age=19
let locale="UK"
if (age>=18 && locale == "UK") {
    console.log("Yes I can serve you.")
 } else {
    console.log("You aren't old enough.")
 }

// ACTIVITY 2//
let pizzaTopping= "Pepperoni";
switch (pizzaTopping){
    case "Cheese":
    case "Pepperoni":    
    case "Ham":
        console.log("These are important ingredients for my pizza.");
        break;
    case "Chicken":
        console.log(`I dont mind having ${pizzaTopping} on my pizza.`);
        break;
    case "Pineapple":
        console.log(`${pizzaTopping} should not be on a pizza!`);
        break;
    default:
        console.log("I dont really have an opinion!");
}

// ACTIVITY 3//
let password="password";
var passLength = password.length;
if (passLength>=8){
    console.log(`Your password is accepted. Your password is "${password}".`)}
else{
    console.log("Your password is too short!")
}

// ACTIVITY 4//
num=15
if (num%3==0 || num%5==0){
    console.log ("This number is divisible by 3 or 5.")
}
else{
    console.log ("This number is not divisible by 3 or 5.")
}

// ACTIVITY 5//
let i=15
if (i % 15 == 0) console.log("FizzBuzz");
else if (i % 3 == 0) console.log("Fizz");
else if (i % 5 == 0) console.log("Buzz");
else console.log(i);


// ACTIVITY 6//
function palindrome (str) {
    return str == str.split("").reverse().join("");
}
console.log(palindrome("noon"))

// ACTIVITY 7//
let time = 16;
let townOfHome = "Widnes";
let placeOfWork = "Warehouse";

if (time == 8){
    console.log(`I am commuting from ${townOfHome}`)
}
    else if (time >= 9 && time <= 16){
    console.log(`I am working at ${placeOfWork}`)
}
    else if (time == 17){
    console.log(`I am on my way home in the city of ${townOfHome}`)
}
    else if (time >= 24){
    console.log("Please enter a 24h time.")
}
    else {
    console.log("I am at home.")
}

// ACTIVITY 8//
function lastVowel(z){
    const match = z.match(/[a,e,i,o,u](?!.*[a,e,i,o,u])/i);
    return match ? match[0] : 'No match';
 }
 
 console.log(lastVowel('jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'));

//this version uses some regex that I dont fully understand
//    Will have to revisit this one.
//    https://cheatography.com/davechild/cheat-sheets/regular-expressions/
//    ?! 
//    * 
//    /i 

//OTHER VERSION NOT MINE, STUDY SYNTAX
const startVowel = (str, vowels = "aeiouAEIOU") =>
   str .split('') .find (c => vowels .includes (c))

const reverseString = (str) => str .split('') .reverse () .join('')

const endVowel = (str) => startVowel (reverseString (str))

console .log (
 endVowel   ('jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'), 
)
//          //

const paragraph = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
let substr = ('a','e','i','o','u');
const searchTerm = paragraph.lastIndexOf(substr);

console.log(searchTerm);

// ACTIVITY 9//
let word = "noon";
let lastLetter = word[word.length-1];

if (word[0] === lastLetter){
    console.log(true);
} else {
    console.log(false);
}
let word2 = "samuel";
let lastLetter2 = word2[word2.length-1];

if (word2[0] === lastLetter2){
    console.log(true);
} else {
    console.log(false);
}

// ACTIVITY 10//
num1=2
num2=2
num3=num1+num2
if ((num1+num2)%2==0){  
    console.log(`The sum is even, result is ${num3}`)
}
else{(
    console.log(num1*num2))
}
