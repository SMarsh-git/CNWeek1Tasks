// Activity 1 //
const person = {
    name:"Sam",
    age:24,
    favSongs: [
        "Starless",
        "Weird Fishes",
        "Sugarman"
    ],
    sayHi(){
        if(this.name){
        return `Hello my name is ${person.name}.`
        }
    }
};
console.log(person.sayHi());

// Activity 2 //
const pet = {
    name:"Mimi",
    age:11,
    typeOfPet:"Cat",
    colour:"Tabby",
    eat(){
        return `${pet.name} is eating.`
        },
    drink(){
        return `${pet.name} is drinking.`
    },
};
console.log(pet.eat());
console.log(pet.drink());

// ACtivity 3 //
// MY SOLUTION //
const coffeeShop = {
    branch: "Merseyside",
    drink: [
      "Cappucino",
      "Latte",
      "Filter Coffee",
      "Tea",
      "Hot Chocolate"
    ],
    food: [
        "Scones",
        "Sandwich",
        "Ice Cream"
    ],
    drinkCost:[
        1.00,
        1.50,
        1.30,
        1.00,
        2.00
    ],
    foodCost:[
        2.00,
        1.20,
        3.40
    ],
    myOrder(drink,food,drinkCost,foodCost) {
        totalCost=drinkCost+foodCost
        return `Your Order is a ${drink} - £${drinkCost} with the ${food} - £${foodCost}, totaling £${totalCost}.`
    }
    }
    
    console.log(coffeeShop.myOrder(coffeeShop.drink[1],coffeeShop.food[1],coffeeShop.drinkCost[1],coffeeShop.foodCost[1]));
//  MAIN ISSUE IS THE USE OF INDEX POSITIONS RATHER THAN ITEM NAMES //


// GARY SOLUTION //
let foodAmount = 0;
let drinkAmount = 0;
let total = 0;

const coffeeShop = {
    branch:"Liverpool",
    menu:[
        "cappuccino",
        "Latte",
        "Hot chocolate",
        "Tea",
        "sandwich",
        "Wrap"],
    fooodPrice:3.50,
    drinkPrice:1.00
}
let priceofDrink = coffeeShop.drinkPrice
let priceOfFood = coffeeShop.fooodPrice
let item = coffeeShop.menu

const orderfood = (food)=>{
    for(let i = 0 ;i < item.length ;i++){
        if(item[i] == food ){
             console.log(`Your order is: ${food}`)
             foodAmount += priceOfFood;

             console.log(priceOfFood);
        }
        }
    }



const orderdrink = (drink)=>{
  for(let j = 0 ;j < item.length;j++){
    if( item[j] == drink){
      console.log(`Your order is: ${drink}`);
      drinkAmount += priceofDrink;
      console.log(priceofDrink);
    }
  }
};

orderdrink("Hot chocolate");
orderdrink("Tea");
orderdrink("Latte");

total += (foodAmount + drinkAmount); 
console.log(`Total cost: £${total}`);

// ADAM SOLUTION //

const coffeeShop = {
    drinksWithPrices: 
    [
        {
            name: "coffee",
            price: 2.50
        },
        {
            name: "latte",
            price: 3.00
        },
        {
            name: "hot chocolate",
            price: 3.50,
        },

    ],
    foodWithPrices: 
    [
        { 
            name: "Burger",
            price: 3.00,
        }, 
        {
            name: "Sandwich",
            price: 2.50,
        },
        {
            name: "Crisps", 
            price: 1.00,
        },
    ],
}

// ADAM IMPROVED VERSION WITH .map
const getTotal = (coffeeShop) => {
    const foodPrices = coffeeShop.foodWithPrices.map(item => item.price);
    const foodTotal = foodPrices.reduce((acc, item) => (acc + item), 0);
    const items = coffeeShop.foodWithPrices.map((item) => `${item.name}: £${item.price}`);
    

    const drinkPrice = 
coffeeShop.drinksWithPrices.map(drinktot => drinktot.price);
    const drinkTotal = drinkPrice.reduce((acc, drinktot) => (acc + drinktot), 0);
    const drinks = coffeeShop.drinksWithPrices.map((drinktot) => `${drinktot.name}: £${drinktot.price}`);

    const total = foodTotal + drinkTotal; 
    let orderTotal = ':\n'; 
    orderTotal += items.join('\n');
    orderTotal += '\n'
    orderTotal += drinks.join('\n');
    orderTotal += `\n\n\nTotal: £${total}`;
    return `Your total order is ${orderTotal}`;
 

    
    console.log(foodTotal);
}

// MYLES SOLUTION EDITED //
const coffeeShop = {
    branch: 'Merseyside',
  
    drinks: {
      americano: 1.99,
      latte: 2.49,
      capuccino: 1.99,
    },
  
    food: {
      scone: 0.99,
      sandwich: 1.49,
      cookie: 3,
    },
  
    drinksOrdered(...drinks) {
      let cost = 0;
      const drinksStr = drinks.join(' & ');
      drinks.forEach(drink => (cost += this.drinks[drink]));
      cost = cost.toString().split('.');
      cost[1] = cost[1].padEnd(2, '0');
      cost = cost.join('.');
  
      return this.displayOrder(drinksStr, cost);
    },
  
    foodOrdered(...food) {
      let cost = 0;
      const foodStr = food.join(' & ');
  
      food.forEach(item => (cost += this.food[item]));
  
      cost = cost.toString().split('.');
      cost[1] = cost[1].padEnd(2, '0');
      cost = cost.join('.');
  
      return this.displayOrder(foodStr, cost);
    },
  
    displayOrder(order, cost) {
      return console.log(
        `You have ordered a ${order}, your total cost is £${cost}.`
      );
    },
  };
  
  coffeeShop.drinksOrdered('latte', 'capuccino');
  coffeeShop.foodOrdered('scone', 'cookie');