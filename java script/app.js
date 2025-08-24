let userinput="mrudula";
for(let i=0;i< userinput.length;i++){
    let row="";

for(let j=0;j<=i;j++){
    row+=userinput[j];
}
 console.log(row); 
}
let n=6;

for(let i=0;i<n;i++){
  row ="";

for(let j=1;j<=i;j++){
row+="*";
}
console.log(row);
}
let r=5;
for(let i=0;i<=r;i++){
  let row="";
  for(let s=1;s<=r-i;s++){
    row+=" ";
  }
  for(let j=1;j<=i;j++){
    row+="*";
  }
  console.log(row);
}
let m=5;
let l=5;
for(let i=0;i<=m;i++){
  let row="";
  for(let j=0;j<=l;j++){
    row+="*"
  }
  console.log(row)
}
let g = 4;  
for (let i = 1; i <= g; i++) {
  let row = "";

  if (i % 2 === 0) {
    row += " ";  
  }
  let stars = (i % 2 === 0) ? 2 : 3;
  for (let j = 1; j <= stars; j++) {  
    row += "* ";
  
  }
  console.log(row);  
}

//   let age=20;
//   if(age>=18){
//     console.log("your eligible to vote");
//   }
//   else{
//     console.log("not eligible for vote");
//   }

//   let balance=1000;
//   // let withdraw=prompt("enter the ammount");
// let  withdraw=100;
//   if(balance>=withdraw){
//     balance-=withdraw;
//     console.log("withdraw ammount:"+withdraw+"reaming balance"+balance)
//   }else{
//     console.log("insufficent balance");
//   }
let marks=13;
let subject=100;
if(marks<=subject){
  console.log("your pass the exam");
}
else {
    console.log("you fail in the exam");
  }
 function grretwithcallback(person,callabackfn){
  console.log("hi"+person);

 
 callabackfn();
 }
 function showcallbackmessage(){
  console.log("iam the call back function")
 }
 grretwithcallback("peter",showcallbackmessage);

 let num=2;
 if(num%2===0){
  console.log("even");
 }
 else{
  console.log("odd");
 }
 let total_value=100;
 let discont=50;
 if(total_value>=discont){
  console.log("discount applied")
 }
  else{
   console.log("no discount applied")
  }
 let age_driving=20;
 if(age_driving>=18){
  console.log("you eligible to drive")
 }
 else{
  console.log("your not eligible to vote")
 }
 let order_ammount=1000;
 let freedelivery=500;
//  if(order_ammount<0){
//   console.log("invalid order")
  if(order_ammount>=freedelivery){
    console.log(" free delivery")
  }
 else{
  console.log("delivery charges apply")
 }

//  else{
//  console.log("Invalid order please check it once")
//  }
 let grade_marks=50;
 if(grade_marks>100){
  console.log("gradA");
 }
 else if(grade_marks>70){
  console.log("gardB")
 }
 else if(grade_marks>=50){
  console.log("gardeC");
 }
 else if(grade_marks>30){
  console.log("gradeD")
 }
 else{
  console.log("you fail in the exam")
 }

 let check_age=21;
 if(check_age<10){
  console.log("child")
 }
 else if(check_age>20){
  console.log("tenage")
 }
 else if(check_age>50){
  console.log("middle age")
 }
 else if(check_age>70){
  console.log("old age")
 }
 else{
  console.log("senior citizes")
 }

 let temp=32;
 if(temp<0){
  console.log("cold")
 }
 else if(temp<20){
  console.log("some cold")
 }
 else if(temp<35){
  console.log("warm")
 }
 else if(temp<80){
  console.log("hot")
 }
 else{
  console.log("not working")
 }

 let movie_age=21;
 if(movie_age<=5){
  console.log("free")
 }
 else if(movie_age<=25){
  console.log("ticketprize100")
 }
 else if(movie_age<=50){
  console.log("ticketprize200");
 }
else{
  console.log("ticketprize250")
}
let day=3;
switch(day){
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wensday");
    break;
  case 4:
    console.log("tursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("invalid day");
}

let operator='+';
let a=10,b=5;
switch(operator){
  case "+":
    console.log("Result:",a+b);
    break;
case "-":
  console.log("Result:",a-b);
  break;
case "*":
  console.log("Result",a*b);
  break;
case "/":
  console.log("Result:",a/b);
  break;
case "%":
  console.log("Result:",a%b);
  break;
default:
  console.log("Invalid operator")
}

function showOfferBanner(){
  let offres=[
      "10% of on the electronics",
      "Free delivery for the orders above $999 ",
      "Buy 1 Get 1 on creams",
  ];
  console.log("Welcom to our store");
  offres.forEach((offer)=>{console.log(`party ${offer} party`)})
}
showOfferBanner();
 const productPrices=[999,599,199,499,299,899];
 productPrices.forEach((price)=> {console.log((price-(price*0.1)+price*0.18));
} );

function getCountdownDiscount(){
  let now=new Date();
  let endOfDay=new Date();
  let timeRemaing=endOfDay-now;
  if(timeRemaing<=0){
    return "Discount period has ended!";
  }
  let hours = Math.floor(timeRemaing / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaing % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaing % (1000 * 60)) / 1000);

  let discont=20;
  return`time left:${hours}h ${minutes}m ${seconds}s |flat Discount:${discont}%(valid till EOD)`
}
let productsInfo = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Smartphone",
    price: 999,
    inStock: true,
    rating: 4.8,
    brand: "Apple",
    quantity: 25
  },
{
    id: 2,
    name: "Samsung Galaxy S23",
    category: "Smartphone",
    price: 899,
    inStock: true,
    rating: 4.6,
    brand: "Samsung",
    quantity: 40
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 349,
    inStock: false,
    rating: 4.7,
    brand: "Sony",
    quantity: 0
  },
  {
    id: 4,
    name: "MacBook Air M2",
    category: "Laptop",
    price: 1199,
    inStock: true,
    rating: 4.9,
    brand: "Apple",
    quantity: 12
  },
  {
    id: 5,
    name: "Dell XPS 13",
    category: "Laptop",
    price: 1099,
    inStock: true,
    rating: 4.5,
    brand: "Dell",
    quantity: 18
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    category: "Shoes",
    price: 150,
    inStock: true,
    rating: 4.4,
    brand: "Nike",
    quantity: 60
  },
  {
    id: 7,
    name: "Adidas Ultraboost",
    category: "Shoes",
    price: 180,
    inStock: false,
    rating: 4.6,
    brand: "Adidas",
    quantity: 0
  },
  {
    id: 8,
    name: "Canon EOS R10",
    category: "Camera",
    price: 999,
    inStock: true,
    rating: 4.7,
    brand: "Canon",
    quantity: 10
  },
  {
    id: 9,
    name: "LG OLED55 TV",
    category: "Television",
    price: 1399,
    inStock: true,
    rating: 4.8,
    brand: "LG",
    quantity: 8
  },
  {
    id: 10,
    name: "Apple Watch Series 9",
    category: "Smartwatch",
    price: 399,
    inStock: false,
    rating: 4.6,
    brand: "Apple",
    quantity: 0
  }
];
const discount=getCountdownDiscount();
console.log(discount);

function displayProducts(productList){
  console.log("Available Product");
  productList.forEach((product)=>{
    console.log(`${product.id}.${product.name}-${product.price}`);
  })
}
displayProducts(productsInfo);

let cart = [];


function addToCart(productId, quantity){
    const product = productsInfo.find(p=> p.id === productId);

    if(!product){
        console.log(`No results Found`);
        return 0;
    }


    const total = product.price * quantity;

    cart.push({...product, quantity, total});
    return total;
}

const cartTotal = addToCart(5, 3);
addToCart(1, 1);

console.log(cart);


console.log(cartTotal);

function addToCart(productId,quantity){
  const product=productsInfo.find(p=>p.id===productId);
 if(!product){
  console.log(`no Result Found`);
  return 0;

 }
 console.log(product)
}
addToCart(2,1); 

function isPrime(num){
  if(num<2){
    return false;
  }
  for(let i=2;i<num;i++){
    if(num%i===0){
      return false;
    }
  }
    return true;
  }
 console.log(isPrime(7));
 console.log(isPrime(15));

let age=20;
if(age<=18){
  console.log("your eligible to vote");
}
else{
  console.log("your not eligible to vote");
}

let ammount=1000;
let withdraw=100;
if(ammount>=withdraw){
   ammount-=withdraw;
 console.log("withdraw ammount"+withdraw,"remaing ammount"+ammount);
}
else{
  console.log("insufficent ammount");
}

let pass_marks=35;
if(pass_marks<=35){
  console.log("pass the exam");
}
else{
  console.log("fail the exam");
}
let eo=3;
if(eo%2===0){
  console.log("even");
}
else{
  console.log("odd")
}
let username="banka";
let password="123456789";
let enterusername="banka";
let enterpassword="12345678";

if(username==enterusername && password===enterpassword){
  console.log("login successfully");
}
else{
  console.log("invalus creditional");
}
let money=1100;
let dis=0.1;
if(money<=1200){
  let dism=money*dis;
  let totalm=money-dism;
  console.log("discount applied"+totalm);
}
else{
  console.log("discount not applied"+totalm);
}
let year=2023;
if(year%4===0){
  console.log("leapyear");
}
else{
  console.log("not a leap year");
}
let drivelince=25;
if(drivelince>=18){
  console.log("eligible to drive");
}
else{
  console.log("not eligiblw to drive");
}
let bill=3000;
if(bill>=2000){
  console.log("free delivary");
}
else{
  console.log("not a free delivary");
}
let movieage=10;
if(movieage>=18){
  console.log("adult");
}
else{
console.log("child")
}
let temperature=5;
if(temperature>=35){ 
  console.log("warm");
}
else{
  console.log("cold")
}


// let ticketPrices=1000;
// let discountTicket=0;
// let ticketAge=60;

// let festivalDays=false;
// let studentId=true; 
// let month="december";
// let finalTicket=ticketPrices;
// let days="monday";

// if(ticketAge>60 && days!=="saturday"  && day!=="sunday" && !festivalDays){
//    discountTicket=0.30;

  
// }else if(ticketAge<=25 && studentId && month !=="december"){
//   discountTicket=0.20;


  
// }
// else if(days==="sunday"){
  
//    discountTicket=0.10;
// }

//   finalTicket=ticketPrices-(ticketPrices*discountTicket);

//   console.log("final ticket prices:",finalTicket);

let age1 = 70;
let ticketPrice = 1000;
let discount1 = 0;
let day1 = "Sunday";
let festival = false;
let student = true;
let studentID = true;
let month = "December";
let finalPrice = ticketPrice;
if (age1 > 60) {
    switch (day1) {
        case "Monday":
            console.log("No senior citizen discount (Monday): " + ticketPrice);
            break;
        case "Tuesday":
            console.log("No senior citizen discount (Tuesday): " + ticketPrice);
            break;
        case "Wednesday":
            console.log("No senior citizen discount (Wednesday): " + ticketPrice);
            break;
        case "Thursday":
            console.log("No senior citizen discount (Thursday): " + ticketPrice);
            break;
        case "Friday":
            console.log("No senior citizen discount (Friday): " + ticketPrice);
            break;
        case "Saturday":
            console.log("No senior citizen discount (Saturday): " + ticketPrice);
            break;
       
    }
    if (festival === false) {
        discount1 = ticketPrice * 0.3;
        finalPrice = ticketPrice - discount1;
        console.log("Discount applied for senior citizen: " + finalPrice);
    } else {
        console.log("No senior citizen discount (festival day): " + ticketPrice);
    }
} else {
    console.log("No senior citizen discount (Sunday): " + ticketPrice);
}

let student_attendance=85;

if(student_attendance>=75){
  console.log("allowed for exam");
}
else{
  console.log("not allowed for exam");
}

let total_ammount=1000;
let groupof_friends=4;
if(groupof_friends>0){
  if(total_ammount>0){
    let perhead=total_ammount/groupof_friends;
    console.log("divided"+perhead.toFixed(2));
  }
  else{
    console,log("Enter valid bill")
  }
  
}
else{
  console.log("enter valid number of frieds")
}

let number=15;
let rule1=(number%3===0);
let rule2=(number%5===0);
let special_Word="mrudula"
if(rule1 && rule2){
 console.log("print the:"+special_Word);
}
else{
  console.log("print the number:"+number);
}
let strong_Password="Bankamrudula@123"
let startAphapet=true;
let length=strong_Password.length;
let character_numbers=true;
if(startAphapet){
  if(length>=15){
    if(!character_numbers){
      console.log("strong password:"+strong_Password);
    }
    else{
      console.log("enter the valid password");
    }

    }else{
      console.log("enter the valid lenght")
    }

  }else{
  console.log("enter the strating alphabet uppercase")
  }


  let payment="UPI";
  switch(payment){
    case "cashTOpay":
      console.log("Enter the cash to pay");
      break;
    case "Depit":
      console.log("Enter the depit:");
      break;
    case "UPI":
      console.log("Enter the scan");
      break;
    case "net banking":
      console.log("Enter the phonePay:");
      break;
    case "Buy":
      console.log("Bay now in the bill:");
      break;
    default :
      console.log("Enter the valid payment");   
  }

let menu=5;
switch(menu){
  case 1:
    console.log("vada");
    break;
  case 2:
    console.log("bonda");
    break;
  case 3:
    console.log("Idli");
    break;
  case 4:
    console.log("Uttapam");
    break;  

case 5:
  console.log("Dosa");

break;
default:
  console.log("Enter the valid meal");
}
 let Position="Manager";
 switch(Position){
    case "Developer":
      console.log("The role in the company is Developer");
    break;
  case "Tester":
    console.log("The role in the company is Tester");
    break;
  case "CEO":
    console.log("The role in the company is CEO");
          break;
  case "Manager":
   console.log("The role in the company is Manager");
   break;
   case "TeamLeder":
   console.log("The role in the company is TeamLeder");
   break;
   default:
      console.log("Enter the valid Position");
   
 }