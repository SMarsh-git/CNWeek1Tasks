// Activity 1 //
let favFilm = [
    "The Grand Budapest Hotel",
    "The Shining",
    "Shawshank Redemption",
    "Godfather Part I",
    "Goodfellas"
]
favFilm.push("The Grinch", "Falling Down");
for(let i = 0; i <favFilm.length; i++){              
    console.log(favFilm[i])
}

// Activity 2 //
for (let i=1; i<=6; i++){
    console.log(Math.floor(Math.random() * 51));
    }

// Activity 3 //
let count=[];
for (let i=9; i>=0; i--){
        count.push(i);
    }
console.log(`9-0 countdown is : ${count}.`)

// Activity 4 //
let favFilms = [
    "The Grand Budapest Hotel",
    "The Shining",
    "Ghostbusters",
    "Godfather Part I",
]
for (let i = 0; i <favFilms.length; i++){
        console.log(favFilms[i])
}

if (favFilms[2]=='Ghostbusters'){
    console.log ("YAY ITS GHOSTBUSTERS!")}
else{
    console.log ("BOO! WE WANT GHOSTBUSTERS!")
}

// Activity 5 //
for (let i=1; i<=6; i++){
    console.log(Math.floor(Math.random() * 31))
    if ([i]%7==0){
        console.log(`[${i}] is divisible by 7.`)
    }
    else {
        console.log(`${i} is not divisible by 7.`)
    }
    }

for (let i = 0; i < 6; i++) {
    const number = Math.round(Math.random() * 30);
        if (number % 7 === 0) {
          console.log(`${number} is divisible`);
        }
        else {
          console.log(`${number} is not divisible `)
        }
      }

// Activity 6 //
  let hannahsFollowers = [' Adam', ' Gary', ' Sam', ' Theo'];
  let bobsFollowers = [' Adam', ' Sam', ' Gary', ' Peter'];
  let mutualFollowers = [];
  
  for (let i = 0; i < hannahsFollowers.length; i++) {
    for (let j = 0 ; j < bobsFollowers.length; j++) {
      if (hannahsFollowers[i] === bobsFollowers[j]){
        mutualFollowers.push(bobsFollowers[j]);
      }
    }
  }
  console.log(`Your Mutual Followers are ${mutualFollowers[0]}, ${mutualFollowers[1]}, ${mutualFollowers[2]}.`);


// Activity 7 //
//Research on do...while loop, find out about the difference between for loop, while loop and do...while loop. Give examples of each. Pros and Cons

//EXAMPLE OF FOR LOOP
for (let i=0; i < 5; i++){
    if (i=5)
    console.log("I can count to 5!")
}
//EXAMPLE OF A WHILE LOOP
let n = 0;
let x = 0;
while (n < 5) {
  n++;
  x += n;
  console.log(n)
}
console.log("I can count to five!")
//EXAMPLE OF do...while loops

//syntax
// do
//    statement
// while (condition);

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"

let n=0
while (n < 5) {
    n++;
    console.log(n);
  }
console.log("I can count to five!")