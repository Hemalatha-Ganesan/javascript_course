import c,{fillgas,repair} from './car.js'
let car1 = new c()
car1.drive()
fillgas()
repair()

/*let user1 = {              //creating one user obj
    name: 'Hema',
    age: 21,
    login(){
        console.log("Welcome",this.name)
        console.log("You are logged in")
    },
    logout(){
        console.log("You are logged out")
    }
}

let user2 = {              //creating one user obj
    name: 'dhivya',
    age: 20,
    login(){
        console.log("Welcome",this.name)
        console.log("You are logged in")
    },
    logout(){
        console.log("You are logged out")
    }
}
user1.login()
user2.login()

// class is a template of properties and methods
// class - ES6 implemented
class User{   // base class
    static noOfUser = 0;
    constructor(name,age){
        //instance variables 
        this.name = name;
        this.age = age;
        User.noOfUser++;
    }
    login(){
        console.log("Welcome",this.name)
        console.log("You are logged in")
    }
    logout(){
        console.log("You are logged out")
    }
    static displayTotalUsers(){ //static methods are invoked by obj name
        console.log('Total no of Users  is', User.noOfUser++)
    }
}

let UserOne = new User('dharani',21)
let Usertwo = new User('Gopika',21)
let Userthree = new User('kavya',20)

UserOne.login()
Usertwo.login()
Userthree.login()
//console.log('Number of user:',User.noOfUser)
User.displayTotalUsers()
let movie = 'Remo'
let music = new String('A')


// Inheritance - acquiring properties of base class
class paiduser extends User{ //derived class
     constructor(name,age){
        super(name,age);
        this.storage = 100;
     }
      message(){
        console.log("You have 100GB free storage")
      }
      // overriding
      login(){
        console.log("Welcome to logging in....")
        return this
      }
}
let paiduser1 = new paiduser('sandhiya',19)
paiduser1.login()
//UserOne.message()  // not able to access child method by using parent obj



// Method chaining
paiduser1.login().message()
console.clear()


function Member(name,age){
    this.name = name;
    this.age = age;
   
}
Member.prototype.login = function(){
    console.log('hi',this.name)
    console.log("Welcome you are logged in")
}
let mem1 = new Member('vidhya',27)
mem1.login() // Welcome you are logged in


console.log(mem1);  // {name: 'vidhya', age: 27, login: ƒ}

//get and set
class Temp{
    constructor(temp){
        this._temp = temp
    }
    get temp(){
        //return this._temp
        return `${this._temp} deg celsius`
    }
    set temp(temp){
        if(temp>100)
            temp = 100
        this._temp = temp
    }
}
let temp1 = new Temp(23)
console.log(temp1.temp)
temp1.temp = 230
console.log(temp1.temp)

*/

