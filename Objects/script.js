//In JavaScript, objects are collections of data stored in key–value pairs.

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

let obj = {
  number: 10,
  text: "Hello",
  arr: [1, 2, 3],
  nested: { x: 5, y: 6 },
  isActive: true,
  greet: function() {
    console.log("Hi!");
  }
};
console.log(obj);
obj.greet();


//Exercise : user object

let user = {
    name: "Hema",
    dept: "CSE",
    age: 21,
    isLoggedIn: true,
    course : ['Java','Python','JS','AI'],
    greet()
    {
          console.log("You got your dream job!😍");
    }
}
console.log(user.dept);
user.greet();

user.age = 20;
console.log(user.age);
user.year = 4;
console.log(user.year);

             //LOOPS
//for,while,do-while
for(let i=0;i<5;i++)
{
    console.log("hema");
}
let i
for(i=0;i<=5;i++)
{
    console.log(i);
}
console.log("Outside loop " , i);
for(i = 10; i>=0;i--)
{
    console.log(i);
}
//while loop
i=10
while(i>0){
    console.log(i);
    i--;
}
console.log("Outside while loop ", i);

//do while
i=0
do{
    console.log(i);
    i--;
}while(i>=1)

//break - stop the loop

// while(true)
// {
//    //let num =  Number(prompt('Enter number:'))
//    if(!isNaN(num))
//      break;
// }

//continue - skip the current iteration
console.log("Odd number between 1 to 10")
for(let i=1;i<10;i++)
{
    if(i%2==0)
    {
        continue;
    }
    console.log(i);
}
// for ... of loop - for accessing array easier

let color = ['purple','violet','blue','green']
for(i=0;i<color.length;i++)
{
    console.log(color[i]);
    console.log(color[i].toUpperCase())
}
console.log(color[2]);
let city = ['paris','london','newyork','Dubai']
for(let place of city)
{
    console.log(place);
}

// for ... in loop - for accessing object easier

let friend = {
    name: 'dhivya',
    age: 21,
    dept: 'CSD',
    college: 'SNS'
}
for(let key in friend)
{
    console.log(key,':',friend[key]);
}
