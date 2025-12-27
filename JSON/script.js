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


fetch('https://official-joke-api.appspot.com/random_joke')
.then((res) => res.json())
.then((msg) => msg[0].setup)
