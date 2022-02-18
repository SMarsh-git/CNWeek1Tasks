// ACTIVITY 1 //

let user_name="Sam"
let user_age=24
let user_favcol="cyan"

console.log(`Your name is ${user_name}; your age is ${user_age}; and your favourite colour is ${user_favcol} `)

{
let user_name="Joe"
let user_age=("34")
let user_favcol=("red")


console.log(`Your name is ${user_name}; your age is ${user_age}; and your favourite colour is ${user_favcol} `)}

// ACTIVITY 2 //

user_breakfast="Eggs"
user_lunch="Grapes"
user_dinner="Fish and Chips"

console.log(`Today you ate ${user_breakfast} for breakfast. Then you ate ${user_lunch} for lunch. Lastly for dinner you ate ${user_dinner}`)

user_breakfast="Cereal"
user_lunch="A packed lunch"
user_dinner="Carbonara"

console.log(`Tommorrow I will eat ${user_breakfast} for breakfast. Then I will eat ${user_lunch} for lunch. Lastly for dinner I will have ${user_dinner}`)

// ACTIVITY 3 //


const birthday = new Date("2022,09,15");
let today= new Date("2022,02,15");

let delta=((birthday-today)/(1000 * 60 * 60 * 24))


if (delta==0){
    console.log("It is your birthday!!!")
}
else {console.log(`It is ${delta} days until your birthday!`)}

//GARY SOLUTION
//const todaysDate = new Date("02/15/2022");
//const birthDay = new Date("09/15/2022");
//let differenceInTime = birthDay.getTime() - todaysDate.getTime();
//differenceInTime = differenceInTime / (86400000);
//console.log(`There are ${differenceInTime} days until my birthday!`)


// ADAM SOLUTION
//const daysToBday = (now, then) => {
//    const dateNow = new Date(now);
//    const dateThen = new Date(then);
//
//  const oneDay = 1000 * 60 * 60 * 24;
//
//    const timeDifference = dateThen.getTime() - dateNow.getTime();
//
//    const difInDays = Math.round(timeDifference / oneDay);
//
//    return difInDays;
//}
//const theDate = new Date();
//console.log(daysToBday("/15/2022", theDate))

// ACTIVITY 4 //

space1=("X")
space2=("O")
space3=(" ")

console.log ("     |     |    ");
console.log (`  ${space1}  |  ${space2}  |  ${space3}  `);
console.log ("     |     |    ");
console.log (" - - - - - - - - ");
console.log ("     |     |    ");
console.log (`  ${space1}  |  ${space1}  |  ${space3}  `);
console.log ("     |     |    ");
console.log (" - - - - - - - - ");
console.log ("     |     |    ");
console.log (`  ${space2}  |  ${space3}  |  ${space3}  `);
console.log ("     |     |    ");

//space1=("X")
//space2=("O")
//space3=(" ")
//space4=("X")
//space5=("X")
//space6=(" ")
//space7=("O")
//space8=(" ")
//space9=(" ")

//console.log ("     |     |    ");
//console.log (`  ${space1}  |  ${space2}  |  ${space3}  `);
//console.log ("     |     |    ");
//console.log (" - - - - - - - - ");
//console.log ("     |     |    ");
//console.log (`  ${space4}  |  ${space5}  |  ${space6}  `);
//console.log ("     |     |    ");
//console.log (" - - - - - - - - ");
//console.log ("     |     |    ");
//console.log (`  ${space7}  |  ${space8}  |  ${space9}  `);
//console.log ("     |     |    ");