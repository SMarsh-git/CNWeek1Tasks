// ACTIVITY 1 //
const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
};
console.log(factorial(33));

// ACTIVITY 2 //
let orderCount = 0;
const takeOrder = (topping1,topping2,topping3) => {
    console.log(`Pizza with ${topping1}, ${topping2}, and ${topping3}.`);
    orderCount++;
    console.log (orderCount);
}
takeOrder("pineapple","ham","cheese");
takeOrder("pineapple","ham","cheese");

// ACTIVITY 3 //

let pin = 1234
let balance = 1000
const cashMachine = (userPin,withdraw) => {
    if (userPin == pin && withdraw <= balance){
            balance = balance - withdraw; 
            console.log (`PIN ACCEPTED.`)
            console.log (`You have withdrawn ${withdraw} from your account.`)
            console.log (`Your new balance is ${balance}.`)
    }
    if (userPin == pin && withdraw - balance >= 0 ) {
            console.log (`You are unable to withdraw funds of that amount.`)
    }
    if (userPin != pin) {
        console.log("INCORRECT PIN. Your account has been locked.")
    }
}
cashMachine(14,100)
