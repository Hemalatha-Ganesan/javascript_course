//Set object -  Collection of values
// values are unique (primitive only strictly unique)
let arr = [1,2,1,3,2,4,5,5,5,10,8]
let myset = new Set(arr)
console.log(arr)
console.log(myset)

let myset1 = new Set()
myset1.add(4)
myset1.add(6)
myset1.add('hema')
myset1.add({'a':1,'b': 2})  // object is reference type
myset1.add(4)
myset1.add(4)
console.log(myset1)

let obj = {'a':1,'b': 2}
myset1.add(obj)
console.log(myset1) // obj also added because it has another add(reference)
//console.log(myset1.add(3))  
console.log(myset1.size)  // 6
console.log(myset1.has(6))
console.log(myset1.delete(2)) // false

let arr2 = Array.from(myset1)
console.log(arr2)
console.clear()


// Map - collection of key-value pairs
// A key in the Map may only occur once  - key or value can be object
let map1 = new Map()
map1.set('a',1)
map1.set('b',2)
map1.set('a',3)
console.log(map1)
console.log(map1.size)
console.log(map1.has('c'))
map1.delete('a')
map1.set('d',4)
map1.set('g',2)
console.log(map1)
for(let i of map1){
    console.log(i) // -- ['b',2] ['d',4] ['g',2]
}
for(let [k,v] of map1){
    console.log(k)  //   b d g
}
for(let [k,v] of map1){
    console.log(v)// 2 4 2 
}
for(let k of map1.keys()){
    console.log(k)   // b d g
}
map1.forEach((v,k) => {
    console.log('key',k,'value',v)  // key b value 2  key d value 4 key g value 2
})
// 2d array to map
let arrMap = [['a',1],['b',2],['c',3]]
let map2 = new Map(arrMap)
console.log(map2)
console.log(...map2)





