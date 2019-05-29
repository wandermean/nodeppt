// let c = [1,[2,3,4]];
// let [a,b] = c;
// console.log(b);
// c[1].push(5);
// console.log(b);
let x = 0
function demo(y = x){
  let x=1
  console.log(y)
}
demo()

// Number.prototype[Symbol.iterator] = function*() {
//   let i = 0;
//   let num = this.valueOf();
//   while (i < num) {
//     yield i++;
//   }
// }

// console.log([...5]) 

// const obj = {
//   0 : 'a',
//   1 : 'b',
//   // length : 2
// }
// console.log([].slice.call(obj))
// console.log(Array.from(obj))
//  console.log([...obj])
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
// console.log(Array.from({length:2}))

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
// Object.defineProperty(obj,'a',{
//   enumerable: false
// })
// console.log(Object.keys(obj))
// // console.log(Object.getOwnPropertyDescriptor(obj,'a'))
// console.log(Object.getOwnPropertyDescriptor(obj,b))
// console.log(Object.getOwnPropertyDescriptors(obj))
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

// const ary = [[1,2],[1,3]]
// const map = new Map(ary)
// // map.set(ary,1)
// // map.set(ary,1)
// map.set(+0,1)
// map.set(-0,1)
// console.log(Array.from(map))

// let target = {
//   name: 'Tom',
//   age: 24
// }
// let handler = {
//   get: function(target, key) {
//       console.log('getting '+key);
//       return target[key]; // 不是target.key
//   },
//   set: function(target, key, value) {
//       console.log('setting '+key);
//       target[key] = value;
//   }
// }
// let proxy = new Proxy(target, handler)
// proxy.name     // 实际执行 handler.get
// proxy.age = 25

