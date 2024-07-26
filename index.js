//prompt("Enter a number");
// let cloths={
//     size:'xl',
//     age:15,
//     price:1000,
// };
//alert(cloths.price);
// console.log(cloths);
// console.log(cloths.price)
// delete cloths.price;
// console.log(cloths)





//finding the even and odd number using function
// let number;
// number=prompt("Enter the number ");
// function find(number)
// {
//     if (number%2==0)
//     {
//         return 'the number is even';
//     }
//     else
//     return 'the number is odd';
// }
// alert(find(number));






// example of function and object inside object

/*let cloth={
    name:'tshirt',
    price:900,
    brand:'addidas',
    rating:{                        // object inside object
           noOfRating:90,
           ratingStar:4.5,
    },
    display: function()                //function inside object
    {
        console.log(`The price is ${cloth.price}\n The brand is ${cloth.brand}`);
    }
};
cloth.display();
*/








// example of autoboxing

/*let name = console.log('my name is sushil bhusal' .length);
let hname= console.log(`his name is hari bahadur `.replace ('bahadur', 'parsad'))
*/

//example of object references

// let a={value:10,};
// let b={value:10,};
// console.log(a===b);

// let num=10;
// let c=num;
// console.log(num, c);
// num=20;
// console.log(num, c);

/*let value={v:9,};
let x=value;
console.log(`${value.v},  ${x.v}`);
v=10;
console.log(`${value.v},  ${x.v}`);
*/


// destructuring in object
/*let a={value:10, ename:'elephant',};
let {value, ename}=a;
console.log(value);
console.log(ename);
*/

// example of JSON (javaScript Object Notation)

/*let product={
    name:'tshirt',
    price:900,
    rating:{
        noOfReview:90,
        star:4.5,
    },
}

console.log(product);
console.log(typeof(product));

let change=JSON.stringify(product);  // to convert into string
console.log(change);
console.log(typeof(change));

let rechange;
rechange=JSON.parse(change);
console.log(rechange);
console.log(typeof(rechange));
*/






// Example of local storage

/*let product={
    name:'tshirt',
    price:900,
    rating:{
        noOfReview:90,
        star:4.5,
    },
}
product=JSON.stringify(product);
console.log(product);
// localStorage.setItem('product', 'tshirt');
// localStorage.setItem('price', '900');
//  localStorage.getItem('name');
// localStorage.getItem('price');
localStorage.setItem('product','product');
localStorage.getItem('product', 'product');


product=JSON.parse(product);
console.log(product);
localStorage.setItem(product);
*/


// Date in js


/*let mydate=new Date();
console.log(mydate);
console.log(mydate.getTime());
console.log(mydate.getFullYear())
*/


// DOM properties and method



/*let button=document.createElement('Button');
button.innerText='click me';
document.querySelector('.subbutton').appendChild(button)
*/




// array in  js

/*let value=[1,2, 'sushil bhusal', 56, 8.9, null , undefined,true];
console.log(value[2]);
console.log(value[5]);
console.log(value[6]);
console.log(value[4]);
console.log(value);
*/



//push and pop operation in array


/*let value=[1,2,3,4];
value.push('sushil');
console.log(value);

value.pop();
console.log(value);
*/




// shift and unshift operation in array
/*let value=[1,2,3,4];
console.log(value);
value.unshift(5);
console.log(value);
value.shift();
console.log(value);
*/


/*let value2=[1,2,3,4,5,6,6,7,];
console.log(value2)
value2.splice(2,3);
console.log(value2);

console.log(value2.toString());
*/



//loop  while loop, do while loop and for loop


/*let n=0;
while(n<=10)
{
    console.log(n);
    n++;
}
*/


/*let n=0;
do{
    console.log(n);
    n++;
}
while(n<=20);
*/



/*let i=0;
for(i=0; i<=15; i++)
{
    console.log(i);
}
*/


/* let num=[1,2,5,4,8,6,9.8];
let i;
let value=num.length;
console.log(value);
for(i=0; i<value; i++)
{
    console.log(num[i]);
}
*/




// accmulator pattern

/*let n=[1,5,4,3,5,3];
let sum=0;
let i;
for(i=0; i<n.length; i++)
{
    sum=sum+n[i];
}
console.log('sum is '+ sum);


// square using looop

let square;
for(i=0; i<n.length; i++)
{
    square=n[i]*n[i];
    console.log(square);
}
*/



// break 

/*let n=[2,3,4,6,5,9];
let i=0;
for(i; i<n.length; i++)
{
    console.log(n[i]);
    if(n[i]===5)
    {
    console.log(`The number five found at ${i}`);
    break;
    }
}
*/


//continue 
/* find the even number from 1 to 50 and odd from 50 to 100 using continue statement */

/*
let i=0;
for(i; i<=50; i++)
{
    
    if(i%2==1)
    {
     continue;
    }
    console.log(i);
}
 console.log('now this is odd');
 i=50;
for(i; i<=100; i++)
{
    
    if(i%2==0)
    {
     continue;
    }
    console.log(i);
}
*/

//just practice
/*
function getElement(num, i){
    return num[i];
}
let num=[5,6,3,6,5,7,43];
console.log(getElement(num, 2));
*/



// create a while loop that exit after counting 5 prime numbers
 

/*function isPrime(num)
{
    let i=2;
    num++;
    for(i; i<num-1; i++)
    {
     if(num%i==1)
     {
        return true;
     }
     else
     {
        return false;
     }
    }

}
let i=0;
let  num=1;
while (i<5)
{
if(isPrime(num))
{
    console.log(num);
    i++;
    num++;
}   
}
*/

// DOM manipulation

/*let selectParagraph=document.querySelector(".para");
selectParagraph.style.backgroundColor="black";
selectParagraph.style.color="white";
selectParagraph.innerHTML="hello i am sushil"
selectParagraph.style.fontSize="2rem"
*/

/*let main=document.querySelector(".main");
main.style.backgroundColor="green";
let subbutton=document.createElement("button");
subbutton.innerHTML="click me";
main.append(subbutton);

let subbutton2=document.createElement("button");
subbutton2.innerHTML="be carefull";
main.prepend(subbutton2);
remove(subbutton2)
*/


/*let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>hello  i am heading</i>"
document.querySelector("body").prepend(newHeading);
newHeading.remove();     // it is used for remove the element
*/

/*let newButton=document.createElement("button");
newButton.innerHTML="click me";
newButton.style.backgroundColor="black"
newButton.style.color="white"


document.querySelector("body").prepend(newButton);
*/


// create a paragraph tag in html and give it class , then create another class in css and give some style now try to apply that css into paragraph tag using js.

/*let accessTag=document.querySelector("p");
accessTag.getAttribute("class");
accessTag.setAttribute("class", "para2");
accessTag.classList.add("para2")
*/


//events handling
 

/*let but=document.querySelector(".button1");
but.onclick =() =>
{
    console.log("clicked");
}


let button2=document.querySelector(".but2");
button2.addEventListener("onclick" , (evt) =>{
    console.log("button clicked");
    console.log(evt.target);
});
*/



// toggle button practice

/*let tbutton=document.querySelector(".togglebutton");
let currentmode="light";

tbutton.addEventListener("click", () =>{
if(currentmode==="light")
{
    document.querySelector("body").style.backgroundColor="black";
    currentmode="white";
}

else


document.querySelector("body").style.backgroundColor="white";
currentmode="black";

})
*/

/*let sum=(num1, num2) => {
    return num1 + num2;

}
console.log(sum(5,66));
*/

 
/*let square = num1 => num1*num1;
console.log(square(3));
*/


// for each loop example

let foods=['pizza', 'momo', 'burger', 'noodles', 'chauwmin'];
foods.forEach(function(food){
    console.log(food);
})




