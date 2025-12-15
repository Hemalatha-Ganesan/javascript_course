console.log("hello world");
    //    this is an alert
    //    variables - 8 bytes - dynamically typed language
    //    let score =  0; // initialization
    //    score = 100; // assignment
    //    console.log("The score is:" + score);
    //    const pi = 3.14;
    //    console.log("The pi value is:" + pi)

       //user input
// let name = prompt("Enter your name:")
// console.log("Hello", name);

// let tickets = prompt("Enter no of tickets:");
// console.log("You should pay:", Number(tickets) * 190);

// let a = prompt("Enter value of a:")
// console.log(Number(a)+10);


// string - group of characters 
let str1 = "hemalatha";
let str2 = "ganesan"
console.log(str1 + " " + str2);

//partitioning string
// slice(start,end)
// substring(start,end)
// substr(start,length)



// Template literals - Introducted in 2015 with ECMAScript6

let firstname = "hemalatha"
let lastname = "ganesan"
let city = "bangalore"
console.log(firstname + " " + lastname + " lives in " + city);


//mix of int and string

let arr = [4,5,6,'g',"hema",[9,6]]
console.log(arr)
console.log(arr[5][1])

console.log(`${firstname} ${lastname} lives in ${city}`)
let msg = `happy
birthday`
console.log(msg)

console.log(`Cat's name is "tom"`)
console.log(`"You have 5 items in your cart.
Your bill amount is $95"`)

//   array
//1D array
let cities = ["bangalore","chennai","pune","hyderabad"]
console.log(cities[1]);
console.log(cities[cities.length - 1])
let marks = [56,85,74,34,98]
console.log(marks[marks.length - 1])

//2D array
let matrix  = [[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix[0])
console.log(matrix[2][2])
//array methods
cities.push("mumbai")
console.log(cities)
console.log(cities.length)

cities.pop()
console.log(cities)

console.log(cities.shift()) //remove element from start
console.log(cities)
console.log(cities.unshift("delhi"))  // add element to the start of array
console.log(cities)

//splice
//1st paramter - starting index
//2nd parameter - no of elements to be deleted
//3d (optional) - values to be added from starting index
cities.splice(2,2)   // delete 2 elements at index 2
console.log(cities)

cities.splice(1,0,"kolkata","agra") // add elements at index 1
console.log(cities)

//slice(starting index,ending index)
//ending index not included
console.log(cities.slice(1,3))
//reverse
cities.reverse()
console.log(cities)

// join - convert array to string
let str = cities.join(", ")
console.log(str)

// split - convert string to array
let str4 = "h,e,m,a,l,a,t,h,a"
let arr2 = str4.split(",")
console.log(arr2)

let str5 = arr2.join(", ")
console.log(str5)

let first = [1,2,3,4]
let second = [5,6,7,8]
let combined = first.concat(second)
console.log(combined)
let join = [...first,...second]
console.log(join)


// If -else - Conditional statements

let age = 21
if( age >= 18)
    console.log("You can vote")
else
    console.log("You cannot vote")
console.log("Thank you")


                //object


let item = {
    name: 'phone',
    cost: 15000,
    quantity : 1,
    categories : ['electronics','mobile'],
    dimensions:{
        length: 7,
        breadth: 3.5,
        height: 5
    }
}
console.log(item.categories[1]);
console.log(item)

// another way to create object
let item2 = new Object();
item2.name = 'laptop',
item2.cost = 52000,
item2.quantity = 1
console.log(item2)


//accessing object
//dot property
console.log(item.name)
item.cost = 20000
console.log(item.cost)
// adding new property
item.returnable = true
console.log(item)
//square bracket notationn
console.log(item['cost'])
item['returnable'] = false
let key = 'cost'
item[key] = 30000
console.log(item)


item1 = {
    name: "Modern Wear",
    quantity: 1,
    price: 2000,
    buy: function(){
        console.log('item added to cart')
    },
    addtoList(){
       console.log('item added to wishlist')
    }

}
item1.buy()
item1.addtoList()



