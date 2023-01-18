//Declaring variables 
let customerName = "Gary";
let customerEmail = "Gary@123.com"
let phoneNo = 412312345;
let address = "20, Marble Drive, Eville";
let noOfPizzaOrdered = 5;
let priceOfPizza;
let pizzaSize;
let priceOfRegularPizza = 9.99;
let priceOfMeduimPizza = 11.99;
let priceOfLargePizza = 13.99;
let noOfGarlicBreadOrdered = 3;
let priceOfGarlicBread = 5.99;
let noOfBevaragesOrdered = 3;
let priceOfBevarage = 1.99;


// define function displayCustomerDetails() to display the details of customer passed as parameters.
function displayCustomerDetails(name,email,phoneNo, address){
    console.log('Customer Details \n------------------');
    console.log(`Customer's Name    : ${name}`);
    console.log(`Customer's Email   : ${email}`);
    console.log(`Customer's Number  : ${phoneNo} `);
    console.log(`Customer's Address : ${address}`);
    console.log('-------------------------------------');

}
 

// define funciton displayMenu() to raise an alert that displays the menu with 
// category, item names and price
function displayMenu(){
    console.log('Select the items to Order');
    console.log('Sl No    Item Category \n---------------------');
    console.log('1) Pizza');
    console.log(`   Price of one Regular Pizza : $ ${priceOfRegularPizza}`);
    console.log(`   Price of Medium Pizza      : $ ${priceOfMeduimPizza}`);
    console.log(`   Price of Large Pizza       : $ ${priceOfLargePizza}`);
    console.log('2) Garlic Bread');
    console.log(`   Price of One Garlic Bread  : $ ${priceOfGarlicBread}`);
    console.log('3) Beverages');
    console.log(`   Price of One Beverage      : $ ${priceOfBevarage}`);
    console.log('Enter 1 for Pizza, 2 for Garlic Bread and 3 for Beverages');
}
 
// define function getPriceOfPizzaBasedOnSize() to return price of pizza for the 
// size passed as parameter.
function getPriceOfPizzaBasedOnSize(pizzaSize){
    //let priceOfLargePizza =0
    switch(pizzaSize){
        case 1: priceOfPizza = 9.99;
        break;
        case 2: priceOfPizza = 11.99;
        break;
        case 3: priceOfPizza = 13.99;
        break;
        default: 
           alert('Invalid size, Enter 1,2 or 3 ');
           priceOfPizza = 0;
           break;
    }
    return priceOfPizza;
}


// define function getPriceOfGarlicBread() to return price of garlic bread as 5.99.
 function getPriceOfGarlicBread(){
    return 5.99;
 }


// define function getPriceOfBeverage() to return price of beverage as 1.99.
function getPriceOfBeverage(){
    return 1.99;
}
 

// define function calculatePrice() to return cost of items ordered for the 
// no of items and price passed as parameters.
function calculatePriceOfPizza(noOfPizza, priceOfPizza){
    return noOfPizza*priceOfPizza;
}

function calculateGarlicBreadPrice(noOfGarlicBreadOrdered , priceOfGarlicBread){
    return noOfGarlicBreadOrdered*priceOfGarlicBread;
}

function calculateBevaragePrice(noOfBevaragesOrdered, priceOfBevarage){
    return noOfBevaragesOrdered*priceOfBevarage;
}
 

// define function calculateTotalBill() to return total bill amount from the 
// total price of pizza, garlic bread and beverages ordered 
 function calculateTotalBill(totalPizzaPrice, totalGarlicPrice, totalBevPrice){
    return totalBevPrice+totalGarlicPrice+totalPizzaPrice;
 }


// define function calculateDiscountAndReturnBillAmount() to return discounted amount 
// which will be calculated only if total bill is more than 50  
function calculateDiscountAndReturnBillAmount(totalBillAmount){
    if(totalBillAmount>50)
      return totalBillAmount*.9;
      else 
      return totalBillAmount;
}
 
// define function displayOrderDetails() to print the order details
function displayOrderDetails(totalBill, discountedBill){
    console.log("Order Details \n-------------------")
    console.log(`Number of Pizzas ordered       : ${noOfPizzaOrdered}`);
    console.log(`Number of Garlic Bread Ordered : ${noOfGarlicBreadOrdered}`);
    console.log(`Number of Bevarages Ordered    : ${noOfBevaragesOrdered} `);
    console.log('----------------------------------------------------');
    console.log(`The total Bill Amount is       : ${totalBill}`);
    console.log(`The Discounted Bill Amount is  : ${discountedBill}`);
}

//Main Program

// call the functions to compute order amount and display order details
displayMenu();
displayCustomerDetails(customerName,customerEmail,phoneNo,address);
let pizzasPrice = calculatePriceOfPizza(noOfPizzaOrdered,getPriceOfPizzaBasedOnSize(3));
let GBPrice  = calculateGarlicBreadPrice(noOfGarlicBreadOrdered,getPriceOfGarlicBread());
let BevPrice = calculateBevaragePrice(noOfBevaragesOrdered,getPriceOfBeverage());
let total  = calculateTotalBill(pizzasPrice,GBPrice,BevPrice);
let discounted  = calculateDiscountAndReturnBillAmount(total);
displayOrderDetails(total,discounted);

