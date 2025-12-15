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


