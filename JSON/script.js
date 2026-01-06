let json1 = "hema"
let json2 = 7
let json3 = true
let json4 = [4,5,6,7]
let json5 = {
    "stock": "Juspay",
    "Price": 2300,
}
let json6 = `[   // array of objects
    {
     "Company": "Juspay",
    "Salary": 75000
    },
     {
     "Company": "Deloitte",
    "Salary": 120000
    },
     {
     "Company": "Zoho",
    "Salary": 60000
    }
]`
// let parsed = JSON.parse(json6)
// console.log(parsed[1].Salary)


 fetch('https://official-joke-api.appspot.com/jokes/programming/random')
 .then((res) => res.json())
 .then((msg) => console.log(msg[0].setup,msg[0].punchline))
 .catch((err) => console.log(err))

 fetch('https://api-thirukkural.vercel.app/api?num=25')   // we get an API and use it

 .then(res => res.json())
 .then(msg => console.log(msg.line1,msg.line2,msg.tam_exp))
// .catch(err => console.log(err))

