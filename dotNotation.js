console.log("hello".toUpperCase());
console.log("hello".toLowerCase());
console.log(Math.floor(Math.random()*10));

// TASK 1//


// BASIC LONG //
console.log ("    |    |    ")
console.log ("    |    |    ")
console.log ("    |    |    ")
console.log ("- - - - - - - -")
console.log ("    |    |    ")
console.log ("    |    |    ")
console.log ("    |    |    ")
console.log ("- - - - - - - -")
console.log ("    |    |    ")
console.log ("    |    |    ")
console.log ("    |    |    ")

// VARIABLE WITH AN OR STATEMENT //
let lineVertical = "    |    |    ";
let lineHorizontal = "- - - - - - - -";
for (let i = 0; i < 9; i++) {
    if (i == 3 || i == 6){
        console.log(lineHorizontal)
        }
        console.log(lineVertical)
    }

// ARRAY VERSION //   
let lineArray = ["    |    |    ", "- - - - - - - -"];
for (let i = 0; i < 9; i++) {
    if (i == 3 || i == 6){
        console.log(lineArray[1])
        }
        console.log(lineArray[0])
    }


// ADAMS VERSION //
    myArr = []
  
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(i !== 3 ? true : false){
                myArr.push("   |    |    ");
            }
            if(j !== 2 ? true : false){
                myArr.push("--------------");
            }
            console.log(myArr[0]);
        }
        console.log(myArr[1]);
    }