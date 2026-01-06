//The promise object represents the eventual completion (or failure) 
// asynchronous operation


const tatkalbook = new Promise((resolve,reject) => {
    let bookingSuccess = true
    if(bookingSuccess)
        resolve(245)
    else
        reject()
})

tatkalbook.then((amt) =>  console.log(`Thanks dude! I will transfer the amt ${amt}`) )
.catch(() => console.log("Thanks for trying!"))
// another 
function tossCoin()
{
    return new Promise((resolve,reject) => {
        // 0 - head(success)  1- tail(failure)
        const rand = Math.floor(Math.random()*2)
        if(rand == 0)
            resolve()
        else
            reject()
    })
}
tossCoin().then(() => console.log("Congrats! You won"))
.catch(() => console.log("sorry! You Lost"))

// promise - pending,resolved,rejected(stay in any one state)
// promise.all - check if all promise are true.. If one fails, it return failure only
let reachA = new Promise((resolve,reject) => {
    const reached = true
    if(reached)
        setTimeout(resolve,40000,"Divya reached")
    else
       reject("Divya not reached") 
})


let reachB = new Promise((resolve,reject) => {
    const reached = true
    if(reached)
        setTimeout(resolve,2000,"Dharani reached")
    else
       reject("Dharani not reached") 
})

let reachC = new Promise((resolve,reject) => {
    const reached = true
    if(reached)
        setTimeout(resolve,1000,"Kavya reached")
    else
       reject("kavya not reached") 
})

Promise.all([reachA,reachB,reachC])
.then((message) => console.log(message))
.catch((message) => console.log((message)))

//(resolved or rejected) - settled 
Promise.allSettled([reachA,reachB,reachC])
.then((message) => console.log(message))
.catch((message) => console.log((message)))

//any - Fulfils when any of the promises fulfils; 
//rejects when any of the promises rejects.
Promise.any([reachA,reachB,reachC])
.then((message) => console.log(message))
.catch((message) => console.log((message)))

//promise.race - settles 

Promise.race([reachA,reachB,reachC])
.then((message) => console.log(message))
.catch((message) => console.log((message)))



// async -  always return a promise
console.clear()

function fun(){
    return 'hello'
}
console.log(fun())

async function fun(){
    return 'hello'
}
console.log(fun())

//fun().then((msg) => console.log(msg))

 let reachD = new Promise((resolve,reject) => {
    
    const reached = false
    if(reached)
        setTimeout(resolve,1000,"Divya reached")
    else
       reject("Divya not reached") 
})

async function asyncstatus(){
    try{
    console.log('hello....')
    res = await reachD
    console.log(res)
    console.log('bye')
    }
    catch(err){
        console.log(err)
    }
}
asyncstatus()