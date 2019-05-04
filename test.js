// let c = [1,[2,3,4]];
// let [a,b] = c;
// console.log(b);
// c[1].push(5);
// console.log(b);
// let x = 0
// function demo(y = x){
//   let x = 3
//   console.log(y)
// }
// demo()

// Number.prototype[Symbol.iterator] = function*() {
//   let i = 0;
//   let num = this.valueOf();
//   while (i < num) {
//     yield i++;
//   }
// }

// console.log([...5]) 

// let onWatch = (obj, setBind, getLogger) => {
//   let handler = {
//     get(target, property, receiver) {
//       getLogger(target, property)
//       return Reflect.get(target, property, receiver)
//     },
//     set(target, property, value, receiver) {
//       setBind(value, property)
//       return Reflect.set(target, property, value)
//     }
//   }
//   return new Proxy(obj, handler)
// }

// let obj = { a: 1 }
// let p = onWatch(
//   obj,
//   (v, property) => {
//     console.log(`监听到属性${property}改变为${v}`)
//   },
//   (target, property) => {
//     console.log(`'${property}' = ${target[property]}`)
//   }
// )
// p.a = 2 // 监听到属性a改变
// p.a // 'a' = 2

// function *foo(x) {
//   let y = 2 * (yield (x + 1))
//   let z = yield (y / 3)
//   return (x + y + z)
// }
// let it = foo(5)
// console.log(it.next())   // => {value: 6, done: false}
// console.log(it.next(12)) // => {value: 8, done: false}
// console.log(it.next(13)) // => {value: 42, done: true}


// const obj = {
//   0 : 'a',
//   1 : 'b',
//   // length : 2
// }
// // // console.log(...obj)
// // // console.log(Array.from(obj,value => value + value))

// obj.__proto__[Symbol.iterator] = function *(){
//   let i = 0
//   while(i < Object.keys(obj).length){
//     yield obj[i++]
//   }
// }
// console.log([...obj])

// let age = {age: 15};
// let name = {name: "Amy"};
// let person = {...age, ...name};

// function aryRandom(len){
//   let ary = []
//   for(let i = 0; i < len; i++){
//     ary.push(Math.random())
//   }
//   return ary
// }
// console.log(aryRandom(5))
// function *aryRandom(len){
//   for(let i = 0; i < len; i++){
//     yield Math.random()
//   }
// }
// console.log(Array.from(aryRandom(5)))

// function aryRandom(len){
//   return Array.from({length:len},()=>Math.random())
// }
// console.log(aryRandom(5))

// console.log(Array(5))
// const b = Symbol('bb')
// const obj ={
//   a : 1
// }
// obj[b] = 2
// console.log(Object.getOwnPropertyDescriptor(obj,b))
// Object.defineProperty(obj,b,{
//   enumerable: false
// })
// // console.log(Object.getOwnPropertyDescriptor(obj,'a'))
// console.log(Object.getOwnPropertyDescriptor(obj,b))
// console.log(Object.getOwnPropertySymbols(obj))
// const obj = {}
// const set = new Set()
// set.add([])
// set.add([])
// console.log(set)

// const obj = [1,2]
// const obj1 = {}
// obj1[obj] = 1
// console.log(obj1)

const ary = [[1,2],[1,3]]
const map = new Map(ary)
// map.set(ary,1)
// map.set(ary,1)
map.set(+0,1)
map.set(-0,1)
console.log(Array.from(map))

