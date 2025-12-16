//Function - to perform a specific task
 //             can be called multiple times
 //               optionally takes input as parameters and optionall
    //               returns a value

//function with parameters and return value

function isPositive(num)
{
    return num>0;
}
console.log(isPositive(5));
console.log(isPositive(-4));

//function without parameters and without return value
function sayHello()
{
    console.log("Hello User");
}
sayHello();
function product(a,b)
{
    return a*b;
}
console.log(product(4,5));
console.log(product) //function without parameter passing lead to function definition
console.log(typeof product)

function greet(name = 'user')  // name = 'user' is default parameter
{
    console.log("Hi", name);
}
greet("Hema");
greet(); //default value - undefined


// recursion - function calling itself
//factorial  - product of first n natural numbers
function factorial(n) // 5! = 5 * 4 * 3 * 2 *1
{
    if(n==1 || n == 0)
        return 1;
    return n*factorial(n-1)
}
console.log(factorial(5));
//function expression
// function without name assigned to a variable
let square = function(num)
{
    return num * num;
}
console.log(square(6));

let isEven = function(num)
{
    return num%2==0;
}
console.log(isEven(4));
let arr  = [2,3,5,6,7,5]
let even = function(arr){
    let sum = 0;
    for(let val of arr)
    {
        sum += val;;
    }
    return sum;
}
console.log(even(arr))

let sumofarr = arr => {   // arrow function
    let sum = 0;
    for(let val of arr)
    {
        sum += val;;
    }
    return sum;
}

console.log(sumofarr(arr))

let volume = function(l,b,h)
{
    return l*b*h;
}
console.log(volume(2,3,4))
// ARROW FUNCTIONS
 // shorter syntax for function expression
let vol = (l,b,h) => l*b*h;
console.log(vol(3,1,4))

let area = r => (Math.PI * r * r);
console.log(area(5))
console.clear()


// variable number of arguments - rest parameters
let total = function(...args)
{
    let sum = 0;
    for(let val of args)
    {
        sum += val;
    }
}
console.log(product(4,3,2,5))
console.log(product(4,2,5))
console.log(product(9,8,7))


let prod = function()
{
    let result = 1;
    console.log(arguments) // array like object
    return result;
}
console.log(prod(4,3,2))

let prod1 = function()
{
    let result = 1;
    for(i=0;i<arguments.length;i++)
        {
            result *= arguments[i];
        }    // array like object
    return result;
}
console.log(prod(7,6,5,4))

//Generators - generate value one by one   // return type - yield

function* gen()
{
    let ind = 1;
    while(true)
    {
        yield ind++;
    }
}
const generator = gen();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);


// callback - function passed as argument to another function


// function greetConsole(name)
// {
//     console.log("Hello",name);
// }
// function greetHeading(name)
// {
//     const heading = document.querySelector('hi');
//     heading.innerHTML = 'hello' + name;
// }
// function greet(callback)
// {
//    // console.log(callback);
//     callback("Hema");
// }
// greet(greetConsole)

// ✅ correct

// For-each with callback

arr = ['hema','dhivya','dharani']
arr.forEach(print)


function print(val)
{
    console.log(val.toUpperCase());
}

//using arrow function
arr.forEach(val => console.log(val))
console.log(arr)

arr.forEach((val,index,arr) => {
    arr[index] = val.toUpperCase();
})
console.log(arr)
arr = ['CSE','IT','AIDS','ECE','EEE','MECH','CIVIL']
arr.forEach(val => {
    const opt = document.createElement('option'); // new option tag
    opt.textContent =val
    opt.val = val
    document.getElementById('branch').appendChild(opt);
})

input = [6,-5,7,-2,4,5,-1]
input.forEach((num) =>{
    if(isPositive(num))
    {
        console.log(num);
    }
});
function isPositive(num)
{
    return num>0;
}


let num = [1,3,-4,6,7,-8,5,5]
let sum = 0;
num.forEach((n) => {
    if(n>0)
    {
        sum += n;
    }
})
console.log("sum of positive numbers:",sum);

// map - create new array by performing operation on each array element
let n = [1,2,3,4,5];
let double = n.map(x => x*2);
console.log(double);

let priceUSD  = [20,30,50];
let priceINR = priceUSD.map(x => x * 83);
console.log(priceINR);

priceINR = priceUSD.map(convert)

function convert(x)
{
    return x * 83;
}
console.log(priceINR);

const std = [ // array of objects
    {name: 'hema', age:21},
    {name: 'dhivya',age: 20},
    {name: 'dharani',age:21},
    {name: 'kavya',age:20}
]
const ages = std.map(x => x.name);
console.log(ages);

//filter - create new array by filtering elements based on condition
// returns new array by checking condition 👉 Selects elements from an array based on a condition


let mark = [40,70,98,45,78,89]
let topper = mark.filter(x => x > 85)
console.log(topper)

//reduce -  Reduces array to a single value (sum, max, object, etc.)
// executes reducer callback
let cost = [35,67,12,34,54,123,179]
let tot = cost.reduce((total,x) => total + x);
console.log(tot);

d2d = [
    ["a","b","c"],
    ["c","d","e"],
    ["d","f","g"],
];  // it will change into 1d array
console.log(d2d.flat())
let res = {'a': 1, 'b':2}
res['c'] = 1;
console.log(res);

let count = d2d.flat().reduce(
    (accumulator,currval) => {
        if(accumulator[currval])
        {
            accumulator[currval]++;
        }else{
            accumulator[currval] = 1
        }
        return accumulator
    }
    , {}); // initialize it as empty obj
console.log(count)
// Exercise - remove duplicates from array

let arr1 = [2,3,4,2,1]
let uni = arr1.filter((val,indx) =>
{
    return arr1.indexOf(val) == indx;
});
console.log(uni);

// find sum of positive number

let no = [5,-7,3,2,5,-9]
let Sum = no.filter(x => x > 0).reduce((acc,curr) => acc + curr,0);
console.log(Sum);

// abbreviate by gathering first letter of each word
let str = "JAva Script Object Model";
let abr = str.split(" ").map(word => word[0]).join("");
console.log(abr);
console.clear();

let a = 100
function func1(){
    console.log("a is", a);
}
func1()
a = 200
func1()

// returning functions - higher order function
// lexical scoping - inner scope can access
// A closure is the combination of a function bundled together(enclosed)
function outer(name){
    let outerVariable = 'bread'
    function inner(){
        let innerVariable = 'butter'
        console.log('inner variable', innerVariable);
        console.log('outer variable', outerVariable);
        console.log('a is',a)
        console.log("Hello",name);
    }
    return inner
}
let call1 = outer('hema');
call1()
let call2 = outer('divya')
call2()

function add(){
    let sum = 10;
    function tot(){
        console.log(sum);
    }
    return tot; // return inner function
}
let Val = add();
Val();

function makeAdder(x){  // x -5
    return function(y){
        return x+y
    }
}
let add5 = makeAdder(5)
console.log(add5(10))

let add100 = makeAdder(100)
console.log(add100(30))
console.log(add100(45))


// memory management

let bigNum = 9007199254740991n
const bigNum2 = BigInt(9007199254740991)
let va = 100
a1 = 200
let b = a   // primitive type
b = a
b = 500
console.log('a is',a)
console.log('b is',b)

let obj1 = {name: 'Hema',age:20}
let obj2 = obj1

obj1.age = 21    // - reference type
obj2.age = 19
console.log('Obj1',obj1);   // {name: 'Hema',age: 21}
console.log('Obj2',obj2);   //  {name: 'Hema',age: 21}

let ar = [2,3,4]
let ar2 = ar
ar2[0] = 7
console.log(ar,ar2) // - [7, 3, 4]  [7, 3, 4]